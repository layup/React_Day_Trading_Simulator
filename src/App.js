
import React, {useState} from "react";
import StockContext from "./context/StockContext";
import Dashboard from "./dashboard/Dashboard";
import Sidebar from "./shared/components/Sidebar";


function App() {  
  
  const [stockSymbol, setStockSymbol] = useState("AAPL");

  return (
    <div className="flex font-poppins">
      <Sidebar />
      <StockContext.Provider value={{ stockSymbol, setStockSymbol}} >
        <Dashboard />
      </StockContext.Provider>
    </div>
  );
}

export default App;
