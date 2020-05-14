export const ADD_TRACKER = "ADD_TRACKER";
export const addTracker = (tracker) =>({
    type: ADD_TRACKER,
    payload: tracker
});

export const SORT_BY_NAME = "SORT_BY_NAME";
export const sortByName = (id) => ({
    type: SORT_BY_NAME,
    payload: id
});

export const SORT_BY_PRIORITY = "SORT_BY_PRIORITY";
export const sortByPriority = (id) => ({
    type: SORT_BY_PRIORITY,
    payload: id
});

export const CREATE_PROJECT = 'CREATE_PROJECT';
export const createProject = (project) => ({
    type: CREATE_PROJECT,
    payload: project
});

export const SET_PROJECTS = 'SET_PROJECTS';
export const setProjects = (projects) => ({
   type: SET_PROJECTS,
   payload: projects
});

export const SET_TASKS = 'SET_TASKS';
export const setTasks = (tasks) => ({
    type: SET_TASKS,
    payload: tasks
});

export const REMOVE_PROJECT = 'REMOVE_PROJECT';
export const removeProject = (project) => ({
    type: REMOVE_PROJECT,
    payload: project
});

export const LOGIN = 'LOGIN';
export const login = (token) => ({
    type: LOGIN,
    payload: token
});