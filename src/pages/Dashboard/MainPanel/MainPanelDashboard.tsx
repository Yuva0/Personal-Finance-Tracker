import React from "react";

import "./MainPanelDashboard.scss";
import TransactionsOverview from "../sections/TransactionsOverview/TransactionsOverview";
import CreditCardOverview from "../sections/CreditCardOverview/CreditCardOverview";
import Card from "../../../components/Card/Card";
import IncomeReportOverview from "../sections/IncomeReportOverview/IncomeReportOverview";
import AssetsLiabilitiesOverview from "../sections/AssetsLiabilitiesOverview/AssetsLiabilitiesOverview";
import InvestmentPortfolioOverview from "../sections/InvestmentPortfolioOverview/InvestmentPortfolioOverview";
import QuickTransferOverview from "../sections/QuickTransferOverview/QuickTransferOverview";
import NetAssetsOverview from "../sections/NetAssetsOverview/NetAssetsOverview";
import MainPanelTransaction from "../../Transactions/MainPanel/MainPanelTransaction";
import RecentTransaction from "../../Transactions/MainPanel/sections/RecentTransaction/RecentTransaction";

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
      <Card className="main-panel-dashboard-transactions main-panel-dashboard-card">
        <RecentTransaction/>
      </Card>
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
