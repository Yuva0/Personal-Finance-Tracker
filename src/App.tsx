import React from "react";
import "./App.scss";
import Button from "./components/Button/Button";
import IconButton from "./components/IconButton/IconButton";
import NavList from "./components/NavList/NavList";
import NavListItem from "./components/NavList/NavListItem/NavListItem";
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
