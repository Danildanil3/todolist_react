import { DASHBOARD_LOADED } from "./actions";
import { createStore, applyMiddleware, combineReducers, compose } from "redux";

function openedTasksReducer(state = {}, action) {
  if (action.type === DASHBOARD_LOADED) {
    let lists = action.payload.lists.map((list) => [list.id, Number(list.undone)]);
    return Object.fromEntries(lists);
  } else {
    return state;
  }
}

export default combineReducers({
  today: (today = 0, { type, payload }) => (type === DASHBOARD_LOADED ? payload.today : today),
  lists: (lists = [], { type, payload }) => (type === DASHBOARD_LOADED ? payload.lists : lists),
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
