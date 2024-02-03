import React from "react";

import "./MainPanelDashboard.scss";
import TransactionsOverview from "../../pages/Dashboard/sections/TransactionsOverview/TransactionsOverview";
import CreditCardOverview from "../../pages/Dashboard/sections/CreditCardOverview/CreditCardOverview";
import Card from "../../components/Card/Card";
import IncomeReportOverview from "../../pages/Dashboard/sections/IncomeReportOverview/IncomeReportOverview";
import AssetsLiabilitiesOverview from "../../pages/Dashboard/sections/AssetsLiabilitiesOverview/AssetsLiabilitiesOverview";
import InvestmentPortfolioOverview from "../../pages/Dashboard/sections/InvestmentPortfolioOverview/InvestmentPortfolioOverview";
import QuickTransferOverview from "../../pages/Dashboard/sections/QuickTransferOverview/QuickTransferOverview";
import NetAssetsOverview from "../../pages/Dashboard/sections/NetAssetsOverview/NetAssetsOverview";

const MainPanelDashboard = () => {
  return (
    <div className="main-panel-dashboard">
      <Card className="main-panel-dashboard-credit-card main-panel-dashboard-card">
        <CreditCardOverview/>
      </Card>
      <Card className="main-panel-dashboard-income main-panel-dashboard-card">
        <AssetsLiabilitiesOverview/>
      </Card>
      <Card className="main-panel-dashboard-total-expense main-panel-dashboard-card">
        <IncomeReportOverview />
      </Card>
      <Card className="main-panel-dashboard-transactions main-panel-dashboard-card"></Card>
      <Card className="main-panel-dashboard-analytics main-panel-dashboard-card">
        <InvestmentPortfolioOverview/>
      </Card>
      <Card className="main-panel-dashboard-activities main-panel-dashboard-card">
        <NetAssetsOverview/>
      </Card>
      <Card className="main-panel-dashboard-quick-transfer main-panel-dashboard-card">
        <QuickTransferOverview/>
      </Card>
    </div>
  );
};

export default MainPanelDashboard;
