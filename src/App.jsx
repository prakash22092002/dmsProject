import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeCompo from "./components/HomeCompo";
import DepartmentCompo from "./components/DepartmentCompo";
import EmployeesCompo from "./components/EmployeesCompo";
import NavBarCompo from "./components/NavBarCompo";
const App = () => {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-50">
        {/* nav bar  */}
        <NavBarCompo />

        {/* Routing */}
        <Routes>
          <Route path="/" element={<HomeCompo />} />
          <Route path="/department" element={<DepartmentCompo />} />
          <Route path="/employees" element={<EmployeesCompo />} />
          {/* <Route path="/employee/:id" element={<EmployeeDetailCompo />} /> */}
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
