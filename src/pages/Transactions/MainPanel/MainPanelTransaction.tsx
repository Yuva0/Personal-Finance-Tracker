import React from "react";

import "./MainPanelTransaction.scss";
import RecentTransaction from "./sections/RecentTransaction/RecentTransaction";
import IncomeAnalysisBar from "./sections/IncomeAnalysisBar/IncomeAnalysisBar";
import ExpenseCategoryChart from "./sections/ExpenseCategoryChart/ExpenseCategoryChart";

const MainPanelTransaction = () => {

  return (
    <div className="main-panel-transaction">
      <RecentTransaction />
      <div className="main-panel-income-expense-chart">
        <IncomeAnalysisBar/>
        <ExpenseCategoryChart/>
      </div>
    </div>
  );
};

export default MainPanelTransaction;
