import React from "react";
import "./App.scss";
import Button from "./components/Button/Button";
import IconButton from "./components/IconButton/IconButton";
import NavList from "./components/NavList/NavList";
import NavListItem from "./components/NavList/NavListItem/NavListItem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTableColumns,
  faArrowRightArrowLeft,
  faCreditCard,
  faGear,
  faCashRegister,
  faShareNodes,
  faDownload,
  faEllipsisVertical,
} from "@fortawesome/free-solid-svg-icons";

function App() {
  return (
    <div className="app">
      {/* <NavList>
        <NavListItem title="Dashboard" leadingIcon={<FontAwesomeIcon icon={faTableColumns}/>} selected/>
        <NavListItem title="Transactions" leadingIcon={<FontAwesomeIcon icon={faArrowRightArrowLeft}/>}/>
        <NavListItem title="Payment" leadingIcon={<FontAwesomeIcon icon={faCashRegister}/>}/>
        <NavListItem title="Cards" leadingIcon={<FontAwesomeIcon icon={faCreditCard}/>}/>
        <NavListItem title="Settings" leadingIcon={<FontAwesomeIcon icon={faGear}/>}/>
      </NavList> */}
      <IconButton
        icon={<FontAwesomeIcon icon={faShareNodes} />}
        onClick={() => console.log("clicked")}
      />
      <IconButton
        icon={<FontAwesomeIcon icon={faDownload} />}
        onClick={() => console.log("clicked")}
      />
      <IconButton
        icon={<FontAwesomeIcon icon={faEllipsisVertical} />}
        onClick={() => console.log("clicked")}
      />
      <Button>Click me</Button>
    </div>
  );
}

export default App;
