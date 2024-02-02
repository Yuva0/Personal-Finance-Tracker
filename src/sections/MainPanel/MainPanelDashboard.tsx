import React from "react";

import './MainPanelDashboard.scss';

const MainPanelDashboard = () => {
  return (
    <div className="main-panel-dashboard">
      <div className="main-panel-dashboard-card-balance main-panel-dashboard-card"></div>
      <div className="main-panel-dashboard-total-income main-panel-dashboard-card"></div>
      <div className="main-panel-dashboard-total-expense main-panel-dashboard-card"></div>
      <div className="main-panel-dashboard-transactions main-panel-dashboard-card"></div>
      <div className="main-panel-dashboard-analytics main-panel-dashboard-card"></div>
      <div className="main-panel-dashboard-activities main-panel-dashboard-card"></div>
      <div className="main-panel-dashboard-quick-transfer main-panel-dashboard-card"></div>
    </div>
  );
}

export default MainPanelDashboard;