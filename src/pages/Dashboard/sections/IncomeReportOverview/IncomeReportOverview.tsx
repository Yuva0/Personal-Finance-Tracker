import React from "react";
import "./IncomeReportOverview.scss";
import Text from "../../../../components/Text/Text";
import IconButton from "../../../../components/IconButton/IconButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

const IncomeReportOverview = () => {
  const total_Income = 20000;
  const total_Expense = 5000;

  return (
    <div className="income-report-overview">
      <IconButton
        className="income-report-overview-arrow"
        icon={<FontAwesomeIcon icon={faChevronLeft} />}
      />
      <div  className="income-report-overview-income-expense">
        <div className="income-report-overview-total-income">
          <div>
            <Text variant="label" size="small">
              Total Income
            </Text>
          </div>
          <div>
            <Text variant="label" size="vlarge">
              <span style={{color:"#2dc653"}}>Rs. {total_Income}</span>
            </Text>
          </div>
        </div>
        <div className="income-report-overview-total-expense">
          <div>
            <Text variant="label" size="small">
              Total Expense
            </Text>
          </div>
          <div>
            <Text variant="label" size="vlarge">
            <span style={{color:"#ff4d6d"}}>Rs. {total_Expense}</span>
            </Text>
          </div>
        </div>
      </div>
      <IconButton
        className="income-report-overview-arrow"
        icon={<FontAwesomeIcon icon={faChevronRight} />}
      />
    </div>
  );
};

export default IncomeReportOverview;
