function onTableRowUpdate(setState) {
	return (newData, oldData) => new Promise((resolve) => {
		setTimeout(() => {
			resolve();
			if (oldData) {
				setState((prevState) => {
					const data = [...prevState.data];
					data[data.indexOf(oldData)] = newData;
					return {...prevState, data};
				});
			}
		}, 600);
	})
}

export default onTableRowUpdate;