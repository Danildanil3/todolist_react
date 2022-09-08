import { DASHBOARD_LOADED } from "./actions";
import { createStore, applyMiddleware, combineReducers, compose } from "redux";

const ADD_LIST = "ADD_LIST";
const DELETE_LIST = "DELETE_LIST";
const SET_TODAY = "SET_TODAY";

function openedTasksReducer(state = {}, action) {
  switch (action.type) {
    case DASHBOARD_LOADED:
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
    case DASHBOARD_LOADED:
      return payload.today;
    case SET_TODAY:
      return payload;
    default:
      return state;
  }
}

function listsReducer(state = [], { type, payload }) {
  switch (type) {
    case DASHBOARD_LOADED:
      return payload.lists;
    case ADD_LIST:
      return [...state, payload];
    case DELETE_LIST:
      return [...state.filter((list) => list.id !== payload)];
    default:
      return state;
  }
}

// export default combineReducers({
//   today: (today = 0, { type, payload }) => (type === DASHBOARD_LOADED ? payload.today : today),
//   lists: (lists = [], { type, payload }) => (type === DASHBOARD_LOADED ? payload.lists : lists),
//   openedTasks: openedTasksReducer,
// });

export default combineReducers({
  today: todayReducer,
  lists: listsReducer,
  openedTasks: openedTasksReducer,
});

// const dashboardReducer = (state = {}, action) => {
//     switch (action.type) {
//         case "SET_TODAY":
//             return {...state.dashboard, today : action.payload}
//         case "ADD_LIST":
//                 return {...state.dashboard, lists : [ ...state.dashboard.lists, action.payload]}
//         case "REMOVE_LIST":
//             return  {...state.dashboard, lists: [...state.dashboard.lists.filter(list => list.id !== action.payload)]}
//         case "SET_OPENEDTASKS":
//             return {...state.dashboard, openedTasks: {...action.payload}}
//         default:
//             return state;
//     }
// }

// export default dashboardReducer;
