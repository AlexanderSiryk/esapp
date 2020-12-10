import {createSelector} from "reselect";

export const getUserEmail = state => state.layers.userEmail;
export const getUserLogin = state => state.layers.userLogin;
export const getUserToken = state => state.layers.userToken;
export const getUserImageURL = state => state.layers.userImageURL;
export const getIsDecrypted = state => state.layers.isDecrypted;
export const getIsSignedIn = state => state.layers.isSignedIn;
export const getIsFetching = state => state.layers.isFetching;
export const getKey = state => state.layers.key;
export const getFetchError = state => state.layers.fetchError;
export const getFirstSignIn = state => state.layers.firstSignIn;
export const getTableEntries = state => state.layers.tableEntries;
export const getDeletedTableEntries = state => state.layers.deletedTableEntries;
export const getIsKeyWindowShown = state => state.layers.getKeyWindowShown;
export const getIsSidebarShown = state => state.layers.isSidebarShown;
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
