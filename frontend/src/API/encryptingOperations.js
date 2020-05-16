import aesjs from "aes-js";
import {pbkdf2Sync} from "pbkdf2";

const WIDTH = 252;
const LENGTH = 285;
const PERMISSIBLE_COLOR_DEVIATION = 25;
const ROWS_QUANTITY = 16;
const COLS_QUANTITY = 33;
const SIDE_COLS_QUANTITY = 2;
const LAST_COL_OFFSET = 4;
const CELL_SIZE = 6;
const HORIZONTAL_MARGIN = 35;
const WORK_ROW_WIDTH = CELL_SIZE * (COLS_QUANTITY - SIDE_COLS_QUANTITY) - LAST_COL_OFFSET; // 182
const VERTICAL_MARGIN = (HORIZONTAL_MARGIN * 2 + WORK_ROW_WIDTH) * 29;
const IDENT_BETWEEN_ROWS = (HORIZONTAL_MARGIN * 2 + WORK_ROW_WIDTH) * 15;

function imageToBits(imgArr) {
    let startPoint = VERTICAL_MARGIN + HORIZONTAL_MARGIN;
    let step = CELL_SIZE * 2;

    const bitsArr = [[]];
    let bitsArrLength = 0;

    for (let n = 0; n < ROWS_QUANTITY; n++) {
        for (let i = startPoint * 4; i <= (startPoint + WORK_ROW_WIDTH) * 4; i += step * 4) {
            if (!(bitsArr[bitsArrLength].length % 4) && (bitsArr[bitsArrLength].length !== 0)) {
                bitsArr.push([]);
                bitsArrLength++;
                if (imgArr[i] <= PERMISSIBLE_COLOR_DEVIATION &&
                    imgArr[i + 1] <= PERMISSIBLE_COLOR_DEVIATION &&
                    imgArr[i + 2] <= PERMISSIBLE_COLOR_DEVIATION) {
                    bitsArr[bitsArrLength].push(0);
                } else bitsArr[bitsArrLength].push(1);
            } else {
                if (imgArr[i] <= PERMISSIBLE_COLOR_DEVIATION &&
                    imgArr[i + 1] <= PERMISSIBLE_COLOR_DEVIATION &&
                    imgArr[i + 2] <= PERMISSIBLE_COLOR_DEVIATION) {
                    bitsArr[bitsArrLength].push(0);
                } else bitsArr[bitsArrLength].push(1);
            }
        }
        startPoint += IDENT_BETWEEN_ROWS;
    }
    return bitsArr;
}

function keyToBits(key) {
    const strKey = aesjs.utils.hex.fromBytes(key);
    const bits = new Uint8Array(strKey.length * 4);
    let counter = 0;
    strKey.split("").forEach(item => {
        let bin = parseInt(item, 16).toString(2);

        // ex. 3(16) = 11(2) => 0011(2)
        while (bin.length !== 4) {
            bin = "0".concat(bin);
        }
        for (let j = 0; j < bin.length; j++) {
            bits[counter] = parseInt(bin[j], 10)
            counter++;
        }
    });
    return bits;
}

function paintBitSquare(arr, i) {
    const rowSize = WIDTH * 4;
    i = i - 2 * rowSize - 2 * 4;
    for (let j = 0; j < CELL_SIZE ** 2; j++) {
        arr[i] = arr[i + 1] = arr[i + 2] = 255;
        if (!((j + 1) % CELL_SIZE)) i += rowSize - CELL_SIZE * 4 + 4;
        else i += 4;
    }
}

export const generateImageKey = (password, salt) => {
    const key = pbkdf2Sync(password, salt, 1, 256 / 8, 'sha512');
    const bits = keyToBits(key);
    const arr = new Uint8ClampedArray(WIDTH * LENGTH * 4);
    let startPoint = VERTICAL_MARGIN + HORIZONTAL_MARGIN;
    let step = CELL_SIZE * 2;
    let bitIndex = 0;
    for (let i = 0; i < arr.length; i++) {
        if (!((i + 1) % 4)) arr[i] = 255;
        else arr[i] = 0;
    }
    for (let n = 0; n < ROWS_QUANTITY; n++) {
        for (let i = startPoint * 4; i <= (startPoint + WORK_ROW_WIDTH) * 4; i += step * 4) {
            // 0 or 1
            if (bits[bitIndex]) paintBitSquare(arr, i);
            bitIndex++;
        }
        startPoint += IDENT_BETWEEN_ROWS;
    }
    return arr;
}
export const getImage = (imgURL) => {
    return new Promise(resolve => {
        let img = new Image();
        img.src = imgURL;
        img.onload = () => resolve(img);
    });
}
export const generateSalt = () => {
    let salt = "";
    for (let i = 0; i < 8; i++) {
        salt += Math.floor(Math.random() * Math.floor(9));
    }
    return salt;
}
export const generateKey = (password, salt) => {
    const key = pbkdf2Sync(password, salt, 1, 256 / 8, 'sha512');
    return aesjs.utils.hex.fromBytes(key);
}
export const calcKey = (imgArr) => {
    let bitsArr = imageToBits(imgArr);
    let key = "";
    for (let i = 0; i < bitsArr.length; i++) {
        let bitLetter = bitsArr[i].join("");
        let letter = parseInt(bitLetter, 2).toString(16);
        key = key.concat(letter);
    }
    return key;
}
export const encryptEntry = (entry, keyStr) => {
    let key = new Uint8Array(aesjs.utils.hex.toBytes(keyStr));
    let obj = {...entry};
    for (const prop in obj) {
        if (prop !== "id") {
            if (obj.hasOwnProperty(prop)) {
                obj[prop] = encryptString(obj[prop], key);
            } else throw new Error(`There is no instance ${prop} in ${obj}`);
        }
    }
    return obj;
}
export const decryptEntries = (entries, keyStr) => {
    let key = new Uint8Array(aesjs.utils.hex.toBytes(keyStr));
    return entries.map((item) => {
        let obj = {...item};
        for (const prop in obj) {
            if (prop !== "id") {
                if (obj.hasOwnProperty(prop)) {
                    obj[prop] = decryptString(obj[prop], key);
                } else throw new Error(`There is no instance ${prop} in ${item}`);
            }
        }
        return obj;
    });
}

function encryptString(text, key) {
    let textBytes = aesjs.utils.utf8.toBytes(text);
    let aesCtr = new aesjs.ModeOfOperation.ctr(key, new aesjs.Counter(10));
    let encryptedBytes = aesCtr.encrypt(textBytes);
    return aesjs.utils.hex.fromBytes(encryptedBytes);
}

function decryptString(encryptedHex, key) {
    let encryptedBytes = aesjs.utils.hex.toBytes(encryptedHex);
    let aesCtr = new aesjs.ModeOfOperation.ctr(key, new aesjs.Counter(10));
    let decryptedBytes = aesCtr.decrypt(encryptedBytes);
    return aesjs.utils.utf8.fromBytes(decryptedBytes);
}
