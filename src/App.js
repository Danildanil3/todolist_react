import "./assets/App.css";
import { Outlet } from "react-router-dom";
import Dashboard from "../src/components/Dashboard/Dashboard";
import Form from '../src/components/Form/Form'

function App() {
  return (
    <div className="App">
      <Dashboard />
      <Form />
      <Outlet />
    </div>
  );
}

export default App;
