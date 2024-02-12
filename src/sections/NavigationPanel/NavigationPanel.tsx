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
  faList,
  faGift
} from "@fortawesome/free-solid-svg-icons";
import Card from '../../components/Card/Card';
import Button from "../../components/Button/Button";

const NavigationPanel = () => {
  return (
    <div className="navigation-panel">
      <Card className="navigation-panel-mainnavlinks">
        <NavList>
          <NavListItem title="Dashboard" leadingIcon={<FontAwesomeIcon icon={faTableColumns}/>} />
          <NavListItem title="Transactions" leadingIcon={<FontAwesomeIcon icon={faArrowRightArrowLeft}/>} notificationCount={2} selected/>
          <NavListItem title="Cards" leadingIcon={<FontAwesomeIcon icon={faCreditCard}/>} />
          <NavListItem title="Payments" leadingIcon={<FontAwesomeIcon icon={faCashRegister}/>}/>
          <NavListItem title="Settings" leadingIcon={<FontAwesomeIcon icon={faGear}/>}/>
        </NavList>
      </Card>
      <Card className="navigation-panel-sidenavlinks">
        <NavList>
          <NavListItem title="To-Do List" leadingIcon={<FontAwesomeIcon icon={faList}/>}/>
          <NavListItem title="Gits" leadingIcon={<FontAwesomeIcon icon={faGift}/>}/>
        </NavList>
      </Card>
      <Card className="navigation-panel-portfoliolink">Portfolio Image</Card>
    </div>
  );
};

export default NavigationPanel;
