import React from "react";
import "./App.scss";
import NavigationPanel from "./sections/NavigationPanel/NavigationPanel";
import Dashboard from "./pages/Dashboard/Dashboard";
import Transactions from "./pages/Transactions/Transactions";

function App() {
  return (
    <div className="app">
      <NavigationPanel/>
      {/* <Dashboard/> */}
      <Transactions/>
    </div>
  );
}

export default App;
