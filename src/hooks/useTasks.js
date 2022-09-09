import { useDispatch, useSelector } from "react-redux";
import { loadTasksAction, deleteTaskAction, updateTaskAction, createTaskAction } from "../store/tasks/reducer";
import {selectFilterOut, selectAllTasks} from "../store/selectors"
import { createSelector } from "reselect";


function useTasks(id) {
  const dispatch = useDispatch();

  // const tasks = createSelector(
  //   [selectAllTasks, selectFilterOut],
  //   (allTasks, filter) => {
  //     console.log(allTasks);
  //     if (!filter) {
  //       return allTasks
  //     } else {
  //       return allTasks[id]
  //     }
  //   }
  // )
  
  const tasks = useSelector((state) => state.tasks[id] || []);

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
