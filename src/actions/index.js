export const ADD_TRACKER = "ADD_TRACKER";
export const addTracker = (tracker) =>({
    type: ADD_TRACKER,
    payload: tracker
});

export const SORT_BY_NAME = "SORT_BY_NAME";
export const sortByName = {
    type: SORT_BY_NAME
};

export const SORT_BY_PRIORITY = "SORT_BY_PRIORITY";
export const sortByPriority = {
    type: SORT_BY_PRIORITY
};