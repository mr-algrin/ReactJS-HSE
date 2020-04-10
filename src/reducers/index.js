import {ADD_TRACKER, SORT_BY_PRIORITY, SORT_BY_NAME, CREATE_PROJECT, REMOVE_PROJECT} from '../actions'

const defaultState = {
    projects: [],
    trackers: {}
};


const rootReducer = (state = defaultState, action) => {
    switch (action.type) {
        case ADD_TRACKER:{
            const trackers = {...state.trackers};
            trackers[action.payload.project_id] = trackers[action.payload.project_id].concat([action.payload.tracker]);
            return {
                ...state,
                trackers: trackers
            }
        }

        case SORT_BY_NAME:{
            const trackers = {...state.trackers};
            trackers[action.payload].sort((a, b) => a.name.toUpperCase() > b.name.toUpperCase() ? 1 : -1);
            return {
                ...state,
                trackers: trackers
            };
        }

        case SORT_BY_PRIORITY:{
            const trackers = {...state.trackers};
            trackers[action.payload].sort((a, b) => a.priority - b.priority);
            return {
                ...state,
                trackers: trackers
            };
        }

        case CREATE_PROJECT:{
            let trackers = state.trackers;
            trackers[action.payload.id] = [];
            return {
                ...state,
                projects: state.projects.concat([action.payload]),
                trackers: trackers
            }
        }

        case REMOVE_PROJECT:{
            const newState = {...state, projects: [...state.projects]};
            newState.projects = newState.projects.filter(item => (item.id !== action.payload));
            delete newState.trackers[action.payload];
            return newState;
        }

        default:
            return state;
    }
};

export default rootReducer;