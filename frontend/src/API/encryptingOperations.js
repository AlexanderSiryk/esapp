import aesjs from "aes-js";

export const getImage = (imgURL) => {
	return new Promise(resolve => {
		let img = new Image();
		img.src = imgURL;
		img.onload = () => resolve(img);
	});
}

let calcBits = (imgArr) => {
	const PERMISSIBLE_COLOR_DEVIATION = 25;
	const ROWS_QUANTITY = 16;
	const COLS_QUANTITY = 33; // 16data + 17margins
	const SIDE_COLS_QUANTITY = 2;
	const LAST_COL_OFFSET = 4;
	const CELL_SIZE = 6;
	const HORIZONTAL_MARGIN = 35;
	const WORK_ROW_WIDTH = CELL_SIZE * (COLS_QUANTITY - SIDE_COLS_QUANTITY) - LAST_COL_OFFSET; // 182
	const VERTICAL_MARGIN = (HORIZONTAL_MARGIN * 2 + WORK_ROW_WIDTH) * 29;
	const IDENT_BETWEEN_ROWS = (HORIZONTAL_MARGIN * 2 + WORK_ROW_WIDTH) * 15;

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

export let calcKey = (imgArr) => {
	let bitsArr = calcBits(imgArr);
	let key = "";
	for (let i = 0; i < bitsArr.length; i++) {
		let bitLetter = bitsArr[i].join("");
		let letter = parseInt(bitLetter, 2).toString(16);
		key = key.concat(letter);
	}
	return key;
}
export let encryptEntry = (entry, keyStr) => {
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

export let decryptEntries = (entries, keyStr) => {
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

let encryptString = (text, key) => {
	let textBytes = aesjs.utils.utf8.toBytes(text);
	let aesCtr = new aesjs.ModeOfOperation.ctr(key, new aesjs.Counter(10));
	let encryptedBytes = aesCtr.encrypt(textBytes);
	return aesjs.utils.hex.fromBytes(encryptedBytes);
}

let decryptString = (encryptedHex, key) => {
	let encryptedBytes = aesjs.utils.hex.toBytes(encryptedHex);
	let aesCtr = new aesjs.ModeOfOperation.ctr(key, new aesjs.Counter(10));
	let decryptedBytes = aesCtr.decrypt(encryptedBytes);
	return aesjs.utils.utf8.fromBytes(decryptedBytes);
}

