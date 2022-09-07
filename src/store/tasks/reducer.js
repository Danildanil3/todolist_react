const tasksReducer = (state = {}, action) => {
    switch (action.type) {
        case "UPDATE_TASKS":
            return {...state.tasks, [action.payload.id] : action.payload.body}
        default:
            return state;
    } 
}

export default tasksReducer;