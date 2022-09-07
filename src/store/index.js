import { createStore, applyMiddleware, combineReducers, compose } from "redux";
import thunk from "redux-thunk";

import dashboardReducer from "./dashboard/reducer";
import tasksReducer from "./tasks/reducer";

// const rootReducer = combineReducers({
//   dashboard: dashboardReducer,
//   tasks: tasksReducer,
// });

const enhancers = [
  applyMiddleware(thunk),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
];

const store = createStore(dashboardReducer, compose(...enhancers));
export default store;
