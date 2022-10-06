
import React from "react";
import Dashboard from "./dashboard/Dashboard";
import Sidebar from "./shared/components/Sidebar";


function App() {  
  return (
    <div className="flex font-poppins">
      <Sidebar />
      <Dashboard />
    </div>
  );
}

export default App;
