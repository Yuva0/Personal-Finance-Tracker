import React from "react";

import './Dashboard.scss';
import MainPanelDashboard from "./MainPanel/MainPanelDashboard";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <MainPanelDashboard/>
    </div>
  )
}

export default Dashboard;