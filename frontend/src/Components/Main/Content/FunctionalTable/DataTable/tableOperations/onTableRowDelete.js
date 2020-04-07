// Side effects: 0

import updateColumnsLookup from "./updateColumnsLookup";

function onTableRowDelete(setState) {
	return (oldData) => new Promise((resolve) => {
		setTimeout(() => {
			resolve();
			setState((prevState) => {
				let columns = updateColumnsLookup(prevState, null, oldData);
				const data = [...prevState.data];
				data.splice(data.indexOf(oldData), 1);
				return {...prevState, data, columns};
			});
		}, 600)
	})
}

export default onTableRowDelete;