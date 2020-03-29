import {ADD_TRACKER, SORT_BY_PRIORITY, SORT_BY_NAME} from '../actions'

const defaultState = {
    trackers: []
};


const rootReducer = (state = defaultState, action) => {
    switch (action.type) {
        case ADD_TRACKER:{
            return {
                ...state,
                trackers: state.trackers.concat([action.payload])
            };
        }

        case SORT_BY_NAME:{
            const newState = { ...state, trackers: [...state.trackers]};
            newState.trackers.sort((a, b) => a.name.toUpperCase() > b.name.toUpperCase() ? 1 : -1);
            return newState;
        }

        case SORT_BY_PRIORITY:{
            const newState = { ...state, trackers: [...state.trackers]};
            newState.trackers.sort((a, b) => a.priority - b.priority);
            return newState;
        }

        default:
            return state;

    }
};

export default rootReducer;