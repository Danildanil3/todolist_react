import { getDashboardAx, createListAx, deleteListAx } from "../../axios/axios";
import { combineReducers } from "redux";

const Actions = {
  DASHBOARD_LOADED: "DASHBOARD_LOADED",
  ADD_LIST: "ADD_LIST",
  DELETE_LIST: "DELETE_LIST",
  SET_TODAY: "SET_TODAY",
  ADD_COUNTER: "ADD_COUNTER",
  DELETE_COUNTER: "DELETE_COUNTER",
  OPEN_TASK: "OPEN_TASK",
  CLOSE_TASK: "CLOSE_TASK",
};

function openedTasksReducer(state = {}, { type, payload, id }) {
  switch (type) {
    case Actions.DASHBOARD_LOADED:
      let lists = payload.lists.map((list) => [list.id, Number(list.undone)]);
      return Object.fromEntries(lists);
    case Actions.ADD_COUNTER:
      return { ...state, [id]: 0 };
    case Actions.DELETE_COUNTER:
      const { [id]: remove, ...rest } = state;
      return rest;
    case Actions.OPEN_TASK:
      return { ...state, [id]: state[id] + 1 };
    case Actions.CLOSE_TASK:
      return { ...state, [id]: state[id] - 1 };
    default:
      return state;
  }
}

function todayReducer(state = 0, { type, payload }) {
  switch (type) {
    case Actions.DASHBOARD_LOADED:
      return payload.today;
    case Actions.SET_TODAY:
      return payload;
    default:
      return state;
  }
}

function listsReducer(state = [], { type, payload, newList, list_id }) {
  switch (type) {
    case Actions.DASHBOARD_LOADED:
      return payload.lists.map((list) => ({ id: list.id, name: list.name }));
    case Actions.ADD_LIST:
      return [...state, ...newList];
    case Actions.DELETE_LIST:
      return [...state.filter((list) => list.id !== list_id)];
    default:
      return state;
  }
}

//------------------ACTIONS-------------------

export const loadDashboardAction = (dispatch) => {
  getDashboardAx().then((dashboard) =>
    dispatch({
      type: Actions.DASHBOARD_LOADED,
      payload: dashboard,
    })
  );
};

export const addListAction = (list) => (dispatch) => {
  createListAx(list).then((newList) => {
    dispatch(addCounterAction(newList[0].id));
    dispatch({
      type: Actions.ADD_LIST,
      newList,
    });
  });
};

export const deleteListAction = (list_id) => (dispatch) => {
  deleteListAx(list_id).then((_) => {
    dispatch(deleteCounterAction(list_id));
    dispatch({
      type: Actions.DELETE_LIST,
      list_id,
    });
  });
};

export const openTaskAction = (id) => ({ type: Actions.OPEN_TASK, id });

export const closeTaskAction = (id) => ({ type: Actions.CLOSE_TASK, id });

export const addCounterAction = (id) => ({ type: Actions.ADD_COUNTER, id });

export const deleteCounterAction = (id) => ({ type: Actions.DELETE_COUNTER, id });

export const setTodayAction = (payload) => ({ type: Actions.SET_TODAY, payload });

export default combineReducers({
  today: todayReducer,
  lists: listsReducer,
  openedTasks: openedTasksReducer,
});
