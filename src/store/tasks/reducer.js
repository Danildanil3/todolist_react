import { getListAx, createTaskAx, updateTaskAx, deleteTaskAx } from "../../axios/axios";

const baseURL = "http://localhost:3000/api/lists/";

const Actions = {
  TASKS_LOADED: "TASKS_LOADED",
  ADD_TASK: "ADD_TASK",
  UPDATE_TASK: "UPDATE_TASK",
  DELETE_TASK: "DELETE_TASK",
};

export default function listsReducer(state = {}, { type, tasks, task, listId }) {
  switch (type) {
    case Actions.TASKS_LOADED:
      return { ...state, [listId]: tasks };
    case Actions.ADD_TASK:
      return { ...state, [task.listId]: [...state.task.listId, ...task] };
    case Actions.UPDATE_TASK:
      return { ...state, [task.listId]: [state.task.listId.map((t) => (t.id === task.id ? { ...t, ...task } : t))] };
    case Actions.DELETE_TASK:
        return { ...state, [task.listId]: [state.task.listId.filter(t => t.id !== task.id)] };
    default:
      return state;
  }
}

//------------------ACTIONS-------------------

export const loadTasksAction = (listId) => (dispatch) => {
  console.log('reducer:', listId);
  getListAx(`${baseURL}${listId}?all=true`).then((tasks) =>
    dispatch({
      type: Actions.TASKS_LOADED,
      listId,
      tasks,
    })
  );
};

export const createTaskAction = (task) => (dispatch) => {
  createTaskAx(task).then((task) =>
    dispatch({
      type: Actions.ADD_TASK,
      task,
    })
  );
};

export const updateTaskAction = (task) => (dispatch) => {
  updateTaskAx(task.id, task).then((task) =>
    dispatch({
      type: Actions.UPDATE_TASK,
      task,
    })
  );
};

export const deleteTaskAction = (task) => (dispatch) => {
  deleteTaskAx(task.id).then((_) =>
    dispatch({
      type: Actions.DELETE_TASK,
      task,
    })
  );
};
