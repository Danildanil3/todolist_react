import { useDispatch, useSelector } from "react-redux";
import { loadTasksAction, deleteTaskAction, updateTaskAction, createTaskAction } from "../store/tasks/reducer";
import { selectFilterOut, selectAllTasks } from "../store/selectors";
import { createSelector } from "reselect";

function useTasks(id) {
  const dispatch = useDispatch();

  const filtedTasks = createSelector([selectAllTasks, selectFilterOut], (allTasks, filter) => {
    if (filter) {
      return allTasks[id]?.filter((task) => task.done !== true);
    } else {
      return allTasks[id];
    }
  });

  const tasks = useSelector(filtedTasks);

  const getTasks = () => {
    dispatch(loadTasksAction(id));
  };

  const deleteTask = (task) => {
    dispatch(deleteTaskAction(task));
  };

  const createTask = (task) => {
    dispatch(createTaskAction(task));
  };

  const updateTask = (task) => {
    dispatch(updateTaskAction(task));
  };

  return { tasks, getTasks, createTask, updateTask, deleteTask };
}

export default useTasks;
