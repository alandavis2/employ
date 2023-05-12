import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { Routes, Route } from "react-router-dom";
import EmployeeDashboard from "./pages/EmployeeDashboard/EmployeeDashboard.js";
import EmployeeForm from "./pages/EmployeeForm/EmployeeForm.js";

function App() {
  return (
    <div className="App bg-neutral-200">
      <Navbar />
      <Routes>
        <Route index element={<EmployeeDashboard />} />
        <Route path="/form" element={<EmployeeForm />} />
      </Routes>
    </div>
  );
}

export default App;
