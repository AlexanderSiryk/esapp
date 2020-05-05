// Side effects: 0

import updateColumnsLookup from "./updateColumnsLookup";

function onTableRowUpdate(setState) {
	return (newData, oldData) => new Promise((resolve) => {
		setTimeout(() => {
			if (oldData) {
				setState((prevState) => {
					let columns = updateColumnsLookup(prevState, newData, oldData);
					const data = [...prevState.data];
					data[data.indexOf(oldData)] = newData;
					return {...prevState, data, columns};
				});
			}
			resolve();
		}, 600);
	})
}

export default onTableRowUpdate;