// Side effects: 0

import updateColumnsLookup from "./updateColumnsLookup";

function onTableRowAdd(setState) {
	return (newData) => new Promise((resolve) => {
		setTimeout(() => {
			setState((prevState) => {
				const columns = updateColumnsLookup(newData, prevState);
				const data = [...prevState.data];
				data.push(newData);
				return {...prevState, data, columns};
			});
			resolve();
		}, 600);
	})
}

export default onTableRowAdd;