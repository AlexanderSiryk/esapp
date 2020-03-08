import {createSelector} from "reselect"

export const getTable = state => state.content.tableEntries;

export const getTagSelected = state => state.content.tagSelected;

export const getSearchBarText = state => state.content.searchBarText;

export const getUniqueTags = createSelector(
	getTable,
	(table) => {
		let t = table.map(item => {
			return item.tag;
		});
		return t.filter((item, index, arr) => {
			return arr.indexOf(item) === index;
		});
	}
);

export const getSortedTable = createSelector(
	getTable,
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
			t = t.filter((item) => {
				return item.name.toLowerCase().indexOf(text.toLowerCase()) !== -1;
			});
		}
		return t;
	});