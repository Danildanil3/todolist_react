import React, { useEffect } from "react";
import Content from "../components/Content/Content";
import Task from "../components/Task/Task";
import useTasks from "../hooks/useTasks";

function Today() {
  const baseURL = "http://localhost:3000/api/collection/today";
  const { tasks, getTasks, updateTask, deleteTask } = useTasks(baseURL);

  useEffect(() => {
    getTasks(baseURL);
  }, []);

  const onTaskToggle = (task) => {
    updateTask(task);
  };

  const onDeleteTask = (id) => {
    deleteTask(id);
  };

  return (
    <Content>
      {tasks?.map((t) => (
        <Task key={t.id} task={t} onToggle={onTaskToggle} onDelete={onDeleteTask} today />
      ))}
    </Content>
  );
}
export default Today;
