

import React, {useState} from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from 'react-router-dom'
import StockContext from "./context/StockContext";
import Dashboard from "./dashboard/Dashboard";
import Portfolio from "./portfolio/Portfolio";
import Sidebar from "./shared/components/Sidebar";


function App() {  
  
  const [stockSymbol, setStockSymbol] = useState("AAPL");

  return (  
      <StockContext.Provider value={{ stockSymbol, setStockSymbol}} >
      <BrowserRouter>
         <div className="flex font-poppins"> 
          <Sidebar />
            <Routes>
              <Route path="/" element={<Dashboard/>} />        
              <Route path="/portfolio" element={<Portfolio/>} />      
              <Route
                path="*"
                element={<Navigate to="/" />}
              />       
            </Routes>
           </div>
    </BrowserRouter>  
    </StockContext.Provider>
  );
}

export default App;
