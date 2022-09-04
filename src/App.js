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

  const LOCAL_STORAGE_TODO = "todoApp.todos";
  const LOCAL_STORAGE_LIST = "todoApp.lists";

  let tasks = allTasks
    .filter((task) => task.list_id === currentList)
    .filter((task) => {
      if (showDone) return task.done !== showDone;
      return true;
    });

  // useEffect(() => {
  //   const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_TODO));
  //   const storedLists = JSON.parse(localStorage.getItem(LOCAL_STORAGE_LIST));
  //   setTasks(storedTodos);
  //   setLists(storedLists);
  // }, []);

  // useEffect(() => {
  //   localStorage.setItem(LOCAL_STORAGE_TODO, JSON.stringify(allTasks));
  // }, [allTasks]);

  // useEffect(() => {
  //   localStorage.setItem(LOCAL_STORAGE_LIST, JSON.stringify(lists));
  //   console.log(lists);
  // }, [lists]);

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

  const onCreateTask = (task) => {
    task.id = allTasks.length + 1;
    setTasks((prevState) => [...prevState, task]);
  };

  const onDeleteTask = (id) => {
    setTasks(allTasks.filter((task) => task.id != id));
  };

  const addFilter = (_) => {
    setView(!showDone);
  };

  return (
    <div className="App">
      <Sidebar lists={lists} onClick={chooseList} onDelete={onDeleteList} onSubmit={onCreateList} />
      <Container>
        <Content tasks={tasks} onChange={toggleTaskDone} onClick={onDeleteTask} />
        <Form onSubmit={onCreateTask} list_id={currentList} />
      </Container>
      <Filter onClick={addFilter} />
    </div>
  );
}

export default App;
