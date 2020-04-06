// Side effects: 0

// TODO remove unused tags from lookup

import updateColumnsLookup from "./updateColumnsLookup";

function onTableRowUpdate(setState) {
	return (newData, oldData) => new Promise((resolve) => {
		setTimeout(() => {
			if (oldData) {
				setState((prevState) => {
					const columns = updateColumnsLookup(newData, prevState);
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