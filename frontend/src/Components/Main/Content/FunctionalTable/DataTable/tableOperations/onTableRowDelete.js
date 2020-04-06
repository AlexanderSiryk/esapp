// Side effects: 0

function onTableRowDelete(setState) {
	return (oldData) => new Promise((resolve) => {
		setTimeout(() => {
			resolve();
			setState((prevState) => {
				const data = [...prevState.data];
				data.splice(data.indexOf(oldData), 1);
				return {...prevState, data};
			});
		}, 600)
	})
}

export default onTableRowDelete;