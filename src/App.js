import "./assets/App.css";
import Sidebar from "./components/Sidebar/Sidebar";
import Container from "./components/Container/Container";
import { useEffect, useState } from "react";
import Content from "./components/Container/Content/Content";
import Form from "./components/Container/Form/Form";
import Filter from "./components/ui/Filter/Filter";

function App() {
  const [lists, setLists] = useState([
    { name: "heap", id: 1 },
    { name: "work", id: 2 },
    { name: "study", id: 3 },
  ]);

  const [allTasks, setTasks] = useState([
    { id: 1, name: "garbage", description: "bags", done: false, due_date: "2022-09-01", list_id: 1 },
    { id: 2, name: "table", description: "create table", done: true, due_date: "2022-09-01", list_id: 1 },
    { id: 3, name: "bed", description: "make a bad", done: true, due_date: "2022-02-01", list_id: 1 },
    { id: 4, name: "english", description: "podcast", done: false, due_date: "", list_id: 1 },
    { id: 5, name: "lunch", description: "prepare food", done: false, due_date: "2022-09-01", list_id: 1 },
    { id: 6, name: "grades", description: "calculate avg.", done: true, due_date: "2022-09-01", list_id: 1 },
    { id: 7, name: "teacher", description: "make the surprise", done: false, due_date: "2022-09-18", list_id: 1 },
    { id: 8, name: "clean", description: "mouse & keyboard", done: true, due_date: "2022-08-01", list_id: 1 },
    { id: 9, name: "loundry", description: "wash black closes", done: false, due_date: "2022-09-04", list_id: 1 },
  ]);

  let [showDone, setView] = useState(false);
  let [currentList, setCurrentList] = useState(null);
  let [taskOnEdit, setTaskOnChange] = useState(null);

  let tasks = allTasks
    .filter((task) => task.list_id === currentList)
    .filter((task) => {
      if (showDone) return task.done !== showDone;
      return true;
    });

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem("tasks"));
    const storedLists = JSON.parse(localStorage.getItem("lists"));
    if (storedLists) setLists(storedLists);
    if (storedTodos) setTasks(storedTodos);
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(allTasks));
  }, [allTasks]);

  useEffect(() => {
    localStorage.setItem("lists", JSON.stringify(lists));
  }, [lists]);

  const chooseList = (id) => {
    setCurrentList(id);
  };

  const onCreateList = (name) => {
    setLists((prevState) => [...prevState, { name, id: lists.length + 1 }]);
  };

  const onDeleteList = (id) => {
    setLists(lists.filter((list) => list.id != id));
    setTasks(allTasks.filter((task) => task.list_id != id));
  };

  const toggleTaskDone = (id) => {
    setTasks(
      allTasks.map((obj) => {
        if (obj.id == id) obj.done = !obj.done;
        return obj;
      })
    );
  };

  const onFormSubmit = (newTask) => {
    if (newTask.id) {
      newTask.id = allTasks.length + 1;
      setTasks((prevState) => [...prevState, newTask]);
      // do to Edit Task
      // after first update the second update does not work
    } else {
      newTask.id = allTasks.length + 1;
      setTasks((prevState) => [...prevState, newTask]);
    }
  };

  const onDeleteTask = (id) => {
    setTasks(allTasks.filter((task) => task.id != id));
  };

  const addFilter = (_) => {
    setView(!showDone);
  };

  const editTask = (task) => {
    console.log('App', task);
    setTaskOnChange(task);
  };

  return (
    <div className="App">
      <Sidebar lists={lists} onClick={chooseList} onDelete={onDeleteList} onSubmit={onCreateList} />
      <Container>
        <Content tasks={tasks} onChange={toggleTaskDone} onClick={onDeleteTask} onEdit={editTask} />
        <Form onSubmit={onFormSubmit} list_id={currentList} taskOnEdit={taskOnEdit} />
      </Container>
      <Filter onClick={addFilter} />
    </div>
  );
}

export default App;
