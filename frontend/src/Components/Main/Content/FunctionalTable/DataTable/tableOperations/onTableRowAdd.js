function onTableRowAdd(setState) {
	return (newData) => new Promise((resolve) => {
		setTimeout(() => {
			resolve();
			setState((prevState) => {
				const data = [...prevState.data];
				data.push(newData);
				return {...prevState, data};
			});
		}, 600);
	})
}

export default onTableRowAdd;