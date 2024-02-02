import React from "react";

import "./NavigationPanel.scss";
import NavList from "../../components/NavList/NavList";
import NavListItem from "../../components/NavList/NavListItem/NavListItem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTableColumns,
  faArrowRightArrowLeft,
  faCreditCard,
  faGear,
  faCashRegister,
} from "@fortawesome/free-solid-svg-icons";

const NavigationPanel = () => {
  return (
    <div className="navigation-panel">
      <div className="navigation-panel-mainnavlinks">
        <NavList>
          <NavListItem title="Dashboard" leadingIcon={<FontAwesomeIcon icon={faTableColumns}/>} selected/>
          <NavListItem title="Transactions" leadingIcon={<FontAwesomeIcon icon={faArrowRightArrowLeft}/>} notificationCount={2}/>
          <NavListItem title="Cards" leadingIcon={<FontAwesomeIcon icon={faCreditCard}/>}/>
          <NavListItem title="Payments" leadingIcon={<FontAwesomeIcon icon={faCashRegister}/>}/>
          <NavListItem title="Settings" leadingIcon={<FontAwesomeIcon icon={faGear}/>}/>
        </NavList>
      </div>
      <div className="navigation-panel-sidenavlinks">
        <NavList>
          <NavListItem title="Dashboard" leadingIcon={<FontAwesomeIcon icon={faArrowRightArrowLeft}/>} selected/>
          <NavListItem title="Dashboard" leadingIcon={<FontAwesomeIcon icon={faArrowRightArrowLeft}/>}/>
        </NavList>
      </div>
      <div className="navigation-panel-portfoliolink">Portfolio Image</div>
    </div>
  );
};

export default NavigationPanel;
