import React from "react";
import "./App.scss";
import NavigationPanel from "./sections/NavigationPanel/NavigationPanel";
import Dashboard from "./pages/Dashboard/Dashboard";

function App() {
  return (
    <div className="app">
      <NavigationPanel/>
      <Dashboard/>
      {/* <Transactions/> */}
    </div>
  );
}

export default App;
