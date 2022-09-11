import { getListAx, createTaskAx, updateTaskAx, deleteTaskAx } from "../../axios/axios";
import { openTaskAction } from "../dashboard/reducer";

const baseURL = "http://localhost:3000/api/lists/";

const Actions = {
  TASKS_LOADED: "TASKS_LOADED",
  DELETE_TASKS: "DELETE_TASKS",
  ADD_TASK: "ADD_TASK",
  UPDATE_TASK: "UPDATE_TASK",
  DELETE_TASK: "DELETE_TASK",
};

export default function tasksReducer(state = {}, { type, tasks, task, list_id }) {
  switch (type) {
    case Actions.TASKS_LOADED:
      return { ...state, [list_id]: tasks };
    case Actions.DELETE_TASKS:
      const { [list_id]: remove, ...rest } = state;
      return rest;
    case Actions.ADD_TASK:
      console.log(task);
      return { ...state, [task[0].list_id]: [...state[task[0].list_id], task[0]] };
    case Actions.UPDATE_TASK:
      return {
        ...state,
        [task.list_id]: state[task.list_id].map((t) => (t.id === task.id ? { ...t, ...task } : t)),
      };
    case Actions.DELETE_TASK:
      return { ...state, [task.list_id]: state[task.list_id].filter((t) => t.id !== task.id) };
    default:
      return state;
  }
}

//------------------ACTIONS-------------------

export const loadTasksAction = (list_id) => (dispatch) => {
  getListAx(`${baseURL}${list_id}?all=true`).then((tasks) =>
    dispatch({
      type: Actions.TASKS_LOADED,
      list_id,
      tasks,
    })
  );
};

export const deleteTasksAction = (list_id) => ({ type: Actions.DELETE_TASKS, list_id });

export const createTaskAction = (oldTask) => (dispatch) => {
  createTaskAx(oldTask).then((task) => {
    dispatch(openTaskAction(oldTask.list_id));
    dispatch({
      type: Actions.ADD_TASK,
      task,
    });
  });
};

export const updateTaskAction = (task) => (dispatch) => {
  updateTaskAx(task.id, task).then((_) =>
    dispatch({
      type: Actions.UPDATE_TASK,
      task,
    })
  );
};

export const deleteTaskAction = (task) => (dispatch) => {
  dispatch({ type: Actions.DELETE_TASK, task });
  deleteTaskAx(task.id);
};
