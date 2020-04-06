// Side effects: 0

function onTableRowUpdate(setState) {
	return (newData, oldData) => new Promise((resolve) => {
		setTimeout(() => {
			if (oldData) {
				setState((prevState) => {
					const newTag = newData.tag;
					const columns = [...prevState.columns];
					const lookup = {...columns[columns.length - 1]?.lookup};
					if (lookup) {
						const tags = Object.values(lookup);
						if (!tags.includes(newTag)) {
							lookup[newTag] = newTag;
							columns[columns.length - 1].lookup = lookup;
						}
					}
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