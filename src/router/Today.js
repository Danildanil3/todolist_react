import React, { useState, useEffect } from 'react';
import Content from '../components/Content/Content';
import Task from '../components/Task/Task';
import axios from "axios";



function Today() {
  const baseURL = "http://localhost:3000/api/collection/today";
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    axios
    .get(baseURL)
    .then((res) => setTasks(res.data))
    .catch(err => console.error(err));
  }, []);

  const onTaskToggle = () => {
    console.log();
  }

  const onDeleteTask = () => {
    console.log();
  }

  return (
    <Content>
      {tasks?.map((t) => (
        <Task key={t.id} task={t} onToggle={onTaskToggle} onDelete={onDeleteTask} today />
      ))}
    </Content>
  );
} 
export default Today;
