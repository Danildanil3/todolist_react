import "./App.css";
import Sidebar from "./components/Sidebar/Sidebar";
import Container from "./components/Container/Container";
import { useState } from "react";
import Content from "./components/Content/Content";
import Form from "./components/Form/Form";
import Filter from "./components/Filter/Filter";

function App() {
  const [lists, setList] = useState([
    { name: "heap", id: 1 },
    { name: "work", id: 2 },
    { name: "study", id: 3 },
  ]);

  const [allTasks, setTasks] = useState([
    { id: 1, name: "garbage", description: "bags", done: false, due_date: "2022-09-01", list_id: 1 },
    { id: 2, name: "table", description: "create table", done: true, due_date: "2022-09-01", list_id: 2 },
    { id: 3, name: "bed", description: "make a bad", done: true, due_date: "2022-02-01", list_id: 1 },
    { id: 4, name: "english", description: "podcast", done: false, due_date: "", list_id: 3 },
    { id: 5, name: "lunch", description: "prepare food", done: false, due_date: "2022-09-01", list_id: 2 },
    { id: 6, name: "grades", description: "calculate avg.", done: true, due_date: "2022-09-01", list_id: 3 },
    { id: 7, name: "teacher", description: "make the surprise", done: false, due_date: "2022-09-18", list_id: 3 },
    { id: 8, name: "clean", description: "mouse & keyboard", done: true, due_date: "2022-08-01", list_id: 2 },
    { id: 9, name: "loundry", description: "wash black closes", done: false, due_date: "2022-09-04", list_id: 1 },
  ]);

  let [showDone, setView] = useState(false);
  let [selectedList, setCurrentList] = useState(0);

  let tasks = allTasks
    .filter((task) => task.list_id == selectedList)
    .filter((task) => {
      if (showDone) return task.done == showDone;
      return true;
    });

  const handlerChooseList = (id) => {
    setCurrentList(id);
    lists.forEach((list) => document.querySelector(`.menu_item:nth-child(${list.id})`).classList.remove("active"));
    document.querySelector(`.menu_item:nth-child(${id})`).classList.add("active");
  };

  const hadleOnDeleteList = (id) => {
    setList(lists.filter((list) => list.id != id));
    setTasks(allTasks.filter((task) => task.list_id != id));
  };

  const handleDoneChange = (id) => {
    setTasks(
      allTasks.map((obj) => {
        if (obj.id == id) obj.done = !obj.done;
        return obj;
      })
    );
  };

  const hadleOnDeleteTask = (id) => {
    setTasks(allTasks.filter((task) => task.id != id));
  };

  return (
    <div className="App">
      <Sidebar lists={lists} onClick={handlerChooseList} onDelete={hadleOnDeleteList} />
      <Container>
        <Content tasks={tasks} onChange={handleDoneChange} onClick={hadleOnDeleteTask} />
        <Form />
      </Container>
      <Filter />
    </div>
  );
}

export default App;
