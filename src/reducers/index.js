import {
    ADD_TRACKER,
    SORT_BY_PRIORITY,
    SORT_BY_NAME,
    CREATE_PROJECT,
    REMOVE_PROJECT,
    LOGIN,
    SET_PROJECTS, SET_TASKS
} from '../actions'

const defaultState = {
    projects: [],
    trackers: [],
    token: null,
    isAuth: false,
    URL: "http://valerystatinov.me"
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

        case CREATE_PROJECT:{
            return {
                ...state,
                projects: state.projects.concat([action.payload]),
            }
        }

        case SET_PROJECTS:{
            return {
                ...state,
                projects: action.payload
            }
        }

        case SET_TASKS:{
            return {
                ...state,
                trackers: action.payload
            }
        }

        case REMOVE_PROJECT:{
            const newState = {...state, projects: [...state.projects]};
            newState.projects = newState.projects.filter(item => (item.id !== action.payload));
            delete newState.trackers[action.payload];
            return newState;
        }

        case LOGIN:{
            return {
                ...state,
                isAuth: true,
                token: action.payload
            }
        }

        default:
            return state;
    }
};

export default rootReducer;