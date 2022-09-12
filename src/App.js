import "./assets/App.css";
import { Outlet } from "react-router-dom";
import Dashboard from "../src/components/Dashboard/Dashboard";
import Content from "./components/Content/Content";
import Form from "../src/components/Form/Form";
import Filter from "./components/ui/Filter/Filter";

function App() {
  return (
    <div className="App">
      <Dashboard />
      <Form />
      <Filter />
      <Content>
        <Outlet />
      </Content>
    </div>
  );
}

export default App;
