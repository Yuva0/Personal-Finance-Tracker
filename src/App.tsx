import React from "react";
import "./App.scss";
import Button from "./components/Button/Button";
import IconButton from "./components/IconButton/IconButton";
import NavList from "./components/NavList/NavList";
import NavListItem from "./components/NavList/NavListItem/NavListItem";
import Dashboard from "./pages/Dashboard/Dashboard";

function App() {
  return (
    <div className="app">
      <Dashboard/>
    </div>
  );
}

export default App;
