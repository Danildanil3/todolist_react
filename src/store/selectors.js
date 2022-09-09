export const selectAllLists = (state) => state.dashboard.lists;
export const selectAllTasks = (state) => state.tasks;
export const selectTodayCount = (store) => store.dashboard.today;
export const selectOpenedTasks = (state) => state.dashboard.openedTasks;
export const selectFilterOut = (state) => state.filterOut;