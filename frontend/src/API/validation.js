const isInputValueValid = (type, value) => {
	let r;
	switch (type) {
		case "name":
			r = new RegExp(/^\w[\w.]{0,24}((?<=\w)[\s](?=\w))?[\w.]{0,24}$(?<=\w)/);
			return r.test(value);
		case 'login':
			r = new RegExp(/^\w[\w.]{0,23}@?\w{0,10}\.?[a-zA-Z]{0,6}$(?<=\w)/);
			return r.test(value);
		case 'password':
			r = new RegExp(/^..{0,64}/);
			return r.test(value);
		case 'tag':
			r = new RegExp(/^\w\w{0,23}$(?<=\w)/);
			return r.test(value);
		default:
			return false;
	}
}

export default isInputValueValid;
