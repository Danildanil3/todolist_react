import { getListsAx, createListAx, deleteListAx} from "../../axios/axios";
import { combineReducers } from "redux";

const Actions = {
  DASHBOARD_LOADED : "DASHBOARD_LOADED",
  ADD_LIST: "ADD_LIST",
  DELETE_LIST: "DELETE_LIST",
  SET_TODAY: "SET_TODAY"
}

function openedTasksReducer(state = {}, action) {
  switch (action.type) {
    case Actions.DASHBOARD_LOADED:
      let lists = action.payload.lists.map((list) => [list.id, Number(list.undone)]);
      return Object.fromEntries(lists);
    case "SET_TODAY":
      return 1;
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

function listsReducer(state = [], { type, payload, newList, listid}) {
  switch (type) {
    case Actions.DASHBOARD_LOADED:
      return payload.lists;
    case Actions.ADD_LIST:
      return [...state, ...newList];
    case Actions.DELETE_LIST:
      return [...state.filter((list) => list.id !== listid)];
    default:
      return state;
  }
}

//------------------ACTIONS-------------------

export const loadDashboardAction = (dispatch) => {
  getListsAx().then((dashboard) =>
    dispatch({
      type: Actions.DASHBOARD_LOADED,
      payload: dashboard,
    })
  );
};

export const addListAction = (list) => (dispatch) => {
  createListAx(list).then((newList) =>
    dispatch({
      type: Actions.ADD_LIST,
      newList,
    })
  );
};

export const deleteListAction = (listid) => (dispatch) => {
  deleteListAx(listid).then((_) =>
    dispatch({
      type: Actions.DELETE_LIST,
      listid,
    })
  );
};

export const setTodayAction = (payload) => ({type: Actions.SET_TODAY, payload});

//--------------------------------------------------

export default combineReducers({
  today: todayReducer,
  lists: listsReducer,
  openedTasks: openedTasksReducer,
});

