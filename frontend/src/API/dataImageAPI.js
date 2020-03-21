export const getImage = (imgURL) => {
	return new Promise(resolve => {
		let img = new Image();
		img.src = imgURL;
		img.onload = () => resolve(img);
	});
}

let calcBits = (imgArr) => {
	const HORIZONTAL_MARGIN = 35;
	const WORK_ROW_WIDTH = 182;
	const VERTICAL_MARGIN = (HORIZONTAL_MARGIN * 2 + WORK_ROW_WIDTH) * 29;
	const IDENT_BETWEEN_ROWS = (HORIZONTAL_MARGIN * 2 + WORK_ROW_WIDTH) * 15;
	let startPoint = (VERTICAL_MARGIN + HORIZONTAL_MARGIN) * 4;
	let step = 12 * 4;
	const bitsArr = [[]];
	let bitsArrLength = 0;
	for (let n = 0; n <= 15; n++) {
		for (let i = startPoint; i <= startPoint + (WORK_ROW_WIDTH * 4); i += step) {
			if (!(bitsArr[bitsArrLength].length % 4) && (bitsArr[bitsArrLength].length !== 0)) {
				bitsArr.push([]);
				bitsArrLength++;
				if (imgArr[i] === 0) bitsArr[bitsArrLength].push(0);
				else bitsArr[bitsArrLength].push(1);
			} else {
				if (imgArr[i] === 0) bitsArr[bitsArrLength].push(0);
				else bitsArr[bitsArrLength].push(1);
			}
		}
		startPoint += ((IDENT_BETWEEN_ROWS) * 4);
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


// Working variant
/*
export let calcKey = (imgArr) => {
	const HORIZONTAL_MARGIN = 35;
	const WORK_ROW_WIDTH = 182;
	const VERTICAL_MARGIN = (HORIZONTAL_MARGIN * 2 + WORK_ROW_WIDTH) * 29;
	const IDENT_BETWEEN_ROWS = (HORIZONTAL_MARGIN * 2 + WORK_ROW_WIDTH) * 15;
	let startPoint = (VERTICAL_MARGIN + HORIZONTAL_MARGIN) * 4;
	let step = 12 * 4;

	const bitsArr = [[]];
	let bitsArrLe = 0;

	for (let n = 0; n <= 15; n++) {
		for (let i = startPoint; i <= startPoint + (WORK_ROW_WIDTH * 4); i += step) {
			if (!(bitsArr[bitsArrLe].length % 4) && (bitsArr[bitsArrLe].length !== 0)) {
				bitsArr.push([]);
				bitsArrLe++;
				bitsArr[bitsArrLe].push(`${imgArr[i]} ${imgArr[i + 1]} ${imgArr[i] + 2}`)
				/!*if (imgArr[i] === 0) bitsArr[bitsArrLe].push(0);
				else bitsArr[bitsArrLe].push(1);*!/
			} else {
				bitsArr[bitsArrLe].push(`${imgArr[i]} ${imgArr[i + 1]} ${imgArr[i] + 2}`)
				/!*if (imgArr[i] === 0) bitsArr[bitsArrLe].push(0);
				else bitsArr[bitsArrLe].push(1);*!/
			}
			/!*console.log(`r${imgArr[i]} g${imgArr[i + 1]} b${imgArr[i + 2]}`);
			console.log(i);*!/
			/!*if (i === startPoint + (WORK_ROW_WIDTH - 2) * 4) {
				// console.log(i);
			}*!/
		}
		startPoint += ((IDENT_BETWEEN_ROWS) * 4);
	}

	console.log(bitsArr);
	return "aaa";
};*/
