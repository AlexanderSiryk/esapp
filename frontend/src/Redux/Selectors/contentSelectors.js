import {createSelector} from "reselect"

export const getTableEntries = state => state.content.tableEntries;
export const getIsKeyWindowShown = state => state.content.getKeyWindowShown;

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
