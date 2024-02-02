import React from "react";

import './Dashboard.scss';
import NavigationPanel from "../../sections/NavigationPanel/NavigationPanel";
import MainPanelDashboard from "../../sections/MainPanel/MainPanelDashboard";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <NavigationPanel/>
      <MainPanelDashboard/>
    </div>
  )
}

export default Dashboard;