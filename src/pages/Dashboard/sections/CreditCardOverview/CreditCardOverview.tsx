import React from "react";
import { CreditCardOverviewProps } from "./CreditCardOverview.types";

import creditCard1 from "../../../../assets/images/creditCard1.png";
import creditCard2 from "../../../../assets/images/creditCard2.png";
import Visa_Logo from "../../../../assets/images/Visa_Logo.png";

import "./CreditCardOverview.scss";
import Text from "../../../../components/Text/Text";
import IconButton from "../../../../components/IconButton/IconButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons"; 

const CreditCardOverview = ({}: CreditCardOverviewProps) => {
  const hasMultipleCreditCards = true;
  const cardBalance = 20000;

  return (
    <div className="credit-card-overview">
      <div className="credit-card-overview-amount">
        {hasMultipleCreditCards && <IconButton className="credit-card-overview-arrow" icon={<FontAwesomeIcon icon={faChevronLeft}/>}/>}
        <div className="credit-card-overview-amount-balance">
          <Text variant="label" size="small">
            Card Balance
          </Text>
          <div className="credit-card-card-balance-amount">
            <Text variant="label" size="vlarge">Rs. {cardBalance}</Text>
          </div>
        </div>
        {hasMultipleCreditCards && <IconButton className="credit-card-overview-arrow" icon={<FontAwesomeIcon icon={faChevronRight}/>}/>}
      </div>
      <div className="credit-card-card-display">
        <img src={creditCard2} alt="Credit Card" />
        <div className="credit-card-card-details">
          <div className="credit-card-card-number"><Text variant="number" size="large">1234 5678 9101</Text></div>
          <div className="credit-card-card-validity-logo">
            <span className="credit-card-card-validity"><Text variant="number" size="small">Exp: 04/29</Text></span>
            <span className="credit-card-card-logo">
              <img src={Visa_Logo} alt="Visa"></img>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreditCardOverview;
