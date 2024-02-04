import React from "react";

import './Transactions.scss';
import MainPanelTransaction from "../Transactions/MainPanel/MainPanelTransaction";

const Transactions = () => {
  return (
    <div className="transactions">
      <MainPanelTransaction/>
    </div>
  )
}

export default Transactions;