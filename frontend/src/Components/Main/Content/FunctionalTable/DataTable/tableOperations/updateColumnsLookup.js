// Side effects: 0

function updateColumnsLookup(prevState, newData, oldData) {
	const columns = [...prevState.columns];
	let lookup = null;
	columns.forEach((item) => {
		if (item.hasOwnProperty("lookup")) lookup = {...item.lookup};
	});
	if (!lookup) return;
	if (newData) {
		const newTag = newData.tag;
		lookup = oldData
			? removeUnusedTags(lookup, prevState.data, newData)
			: lookup;
		lookup = {...lookup, [newTag]: newTag};
	} else {
		lookup = removeDeletedTag(lookup, prevState.data, oldData);
	}
	columns.forEach((item, id) => {
		if (item.hasOwnProperty("lookup")) columns[id].lookup = lookup;
	});
	return columns;
}

function removeUnusedTags(dirtyLookup, usedData, currentEntry) {
	const lookup = {...dirtyLookup};
	const data = [...usedData].map((item) => {
		return item.id === currentEntry.id
			? {...item, tag: currentEntry.tag}
			: {...item}
	});
	const usedTags = new Set(data.map((value) => value.tag));
	Object.values(lookup).forEach((tag) => {
		if (!usedTags.has(tag)) delete lookup[tag];
	});
	return lookup;
}

function removeDeletedTag(dirtyLookup, usedData, currentEntry) {
	let lookup = {...dirtyLookup};
	let counter = usedData.filter((item) => item.tag === currentEntry.tag).length;
	if (counter <= 1) delete lookup[currentEntry.tag];
	return lookup;
}

export default updateColumnsLookup;