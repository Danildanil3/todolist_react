const dashboardReducer = (state = {}, action) => {
    switch (action.type) {
        case "SET_TODAY":
            return {...state.dashboard, today : action.payload}
        case "ADD_LIST":
                return {...state.dashboard, lists : [ ...state.dashboard.lists, action.payload]}
        case "REMOVE_LIST":
            return  {...state.dashboard, lists: [...state.dashboard.lists.filter(list => list.id !== action.payload)]}
        case "SET_OPENEDTASKS":
            return {...state.dashboard, openedTasks: {...action.payload}}
        default:
            return state;
    } 
}

export default dashboardReducer;