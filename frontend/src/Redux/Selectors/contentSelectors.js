import {createSelector} from "reselect"

export const getTableEntries = state => state.content.tableEntries;
export const getTagSelected = state => state.content.tagSelected;
export const getSearchBarText = state => state.content.searchBarText;
export const getEditingEntryId = state => state.content.editingEntryId;
export const getEditWindowShown = state => state.content.editWindowShown;
export const getAddWindowShown = state => state.content.addWindowShown;

export const getUniqueTags = createSelector(
	getTableEntries,
	(table) => {
		let t = table.map(item => {
			return item.tag;
		});
		return t.filter((item, index, arr) => {
			return arr.indexOf(item) === index;
		});
	});

export const getFilteredTable = createSelector(
	getTableEntries,
	getTagSelected,
	getSearchBarText,
	(table, tag, text) => {
		let t;
		if (tag !== "blank") {
			t = table.filter((item) => {
				return item.tag === tag;
			});
		}
		t = t === undefined ? table : t;
		if (text !== "") {
			t = t.filter((item) => item.name.toLowerCase().indexOf(text.toLowerCase()) !== -1);
		}
		return t;
	});

export const getFilteredTableLength = (state) => getFilteredTable(state).length;