// Side effects: 0

function updateColumnsLookup(newData, prevState) {
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
	return columns;
}

export default updateColumnsLookup;