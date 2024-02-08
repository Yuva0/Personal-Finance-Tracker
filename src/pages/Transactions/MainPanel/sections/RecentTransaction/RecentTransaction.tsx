import React, {useState} from "react";
import './RecentTransaction.scss'

import Card from "../../../../../components/Card/Card";
import Text from "../../../../../components/Text/Text";
import ContentSwitcher from "../../../../../components/ContentSwitcher/ContentSwitcher";
import ContentSwitcherItem from "../../../../../components/ContentSwitcher/ContentSwitcherItem/ContentSwitcherItem";
import IconButton from "../../../../../components/IconButton/IconButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faSearch, faFilter, faGear } from "@fortawesome/free-solid-svg-icons";
import Table from "../../../../../components/Table/Table";
import Input from "../../../../../components/Input/Input";
import Pagination from "../../../../../components/Pagination/Pagination";

const RecentTransaction = () => {

  const [showInput, setShowInput] = useState<boolean>(false);

  const toggleInputHandler = (e:React.MouseEvent) => {
    // e.preventDefault();
    setShowInput(!showInput);
  };

  return (
    <Card className="main-panel-transaction-table-container">
        <div className="main-panel-transaction-table-top">
          <div className="main-panel-transaction-table-start">
            <Text variant="label" size="large">Recent Transactions</Text>
          </div>
          <div className="main-panel-transaction-table-filters">
            <ContentSwitcher className="main-panel-transaction-table-filters-content-switcher">
              <ContentSwitcherItem label="Yearly" className="main-panel-transaction-table-content-switcher-item" selected/>
              <ContentSwitcherItem label="Monthly" className="main-panel-transaction-table-content-switcher-item"/>
              <ContentSwitcherItem label="Weekly" className="main-panel-transaction-table-content-switcher-item"/>
            </ContentSwitcher>
            <span className={`main-panel-transaction-table-filters-input ${showInput ? "filters-show-input":"filters-hide-input"}`}><Input value=""/></span>
            <span><IconButton icon={<FontAwesomeIcon icon={faSearch}/>} onClick={toggleInputHandler}/></span>
            <span><IconButton icon={<FontAwesomeIcon icon={faPlus}/>}/></span>
            <span><IconButton icon={<FontAwesomeIcon icon={faFilter}/>}/></span>
            <span><IconButton icon={<FontAwesomeIcon icon={faGear}/>}/></span>
          </div>
        </div>
        <Table
          className="main-panel-transaction-table"
          headers={["Sr.", "Vendor", "Date", "Category", "Amount"]}
          data={[
            ["Amazon", "12th Oct", <Text variant="label" size="medium" className="main-panel-transaction-table-bills">Bills</Text>,  <Text variant="number" size="medium" weight="bold">- $100</Text>],
            ["Facebook", "20th Oct", <Text variant="label" size="medium" className="main-panel-transaction-table-travel">Travel</Text>, <Text variant="number" size="medium" weight="bold">- $120</Text>],
            ["Google", "16th Oct", <Text variant="label" size="medium" className="main-panel-transaction-table-shopping">Shopping</Text>, <Text variant="number" size="medium" weight="bold">- $160</Text>],
            ["Amazon", "12th Oct", <Text variant="label" size="medium" className="main-panel-transaction-table-investments">Investments</Text>, <Text variant="number" size="medium" weight="bold">- $180</Text>],
            ["Facebook", "20th Oct", <Text variant="label" size="medium" className="main-panel-transaction-table-rent">Rent</Text>, <Text variant="number" size="medium" weight="bold">- $240</Text>],
            ["Google", "16th Oct", <Text variant="label" size="medium" className="main-panel-transaction-table-salary">Salary</Text>, <Text variant="number" size="medium" weight="bold">+ $1600</Text>],
            ["Amazon", "12th Oct", <Text variant="label" size="medium" className="main-panel-transaction-table-salary">Salary</Text>, <Text variant="number" size="medium" weight="bold">+ $3200</Text>],
            ["Facebook", "20th Oct", <Text variant="label" size="medium" className="main-panel-transaction-table-investments">Investments</Text>, <Text variant="number" size="medium" weight="bold">-$ 200</Text>],
            ["Google", "16th Oct", <Text variant="label" size="medium" className="main-panel-transaction-table-shopping">Shopping</Text>, <Text variant="number" size="medium" weight="bold">-$ 160</Text>],
          ]}
          headerWidth={[5, 30, 25, 20, 20]}
        />
        <div className="main-panel-transaction-pagination">
          <Pagination selectedPage={4} totalPages={7}/>
        </div>
      </Card>
  )
};

export default RecentTransaction;