import { createStore, applyMiddleware, combineReducers, compose } from "redux";
import thunk from "redux-thunk";

import dashboardReducer from "./dashboard/reducer";
import tasksReducer from "./tasks/reducer";
import filterReducer from "./filter/reducer";
import todayTaskReducer from "./today/reducer";

const rootReducer = combineReducers({
  dashboard: dashboardReducer,
  tasks: tasksReducer,
  filterOut: filterReducer,
  todayTasks: todayTaskReducer,
});

const enhancers = [
  applyMiddleware(thunk),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
];

const store = createStore(rootReducer, compose(...enhancers));
export default store;
