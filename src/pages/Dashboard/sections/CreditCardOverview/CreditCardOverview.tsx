import React, { useEffect, useRef, useState } from "react";
// import { CreditCardOverviewProps } from "./CreditCardOverview.types";

import creditCard1 from "../../../../assets/images/creditCard1.png";
import creditCard2 from "../../../../assets/images/creditCard2.png";
import Visa_Logo from "../../../../assets/images/Visa_Logo.png";

import "./CreditCardOverview.scss";
import Text from "../../../../components/Text/Text";
import IconButton from "../../../../components/IconButton/IconButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { classNameModifier } from "../../../../helpers/BasicHelper";

const CREDIT_CARDS = [
  {
    cardNumber: "1234 5678 9101",
    cardValidity: "04/29",
    cardType: "Visa",
    amount: "20000",
    cardImg: creditCard1,
  },
  {
    cardNumber: "1234 5678 9102",
    cardValidity: "04/30",
    cardType: "Masterard",
    amount: "30000",
    cardImg: creditCard2,
  },
  {
    cardNumber: "1111 1111 1111",
    cardValidity: "02/21",
    cardType: "VISA",
    amount: "300000",
    cardImg: creditCard2,
  },
];

const CreditCardOverview = () => {
  const hasMultipleCreditCards = CREDIT_CARDS.length > 1;
  const creditCardHolderRef = useRef<HTMLDivElement>(null);
  const creditCardHeadingTextRef = useRef<HTMLDivElement>(null);
  const creditCardHeadingAmtRef = useRef<HTMLDivElement>(null);

  const [cardIndex, setCardIndex] = useState(0);

  useEffect(() => {
    classNameModifier(
      [creditCardHolderRef, creditCardHeadingTextRef, creditCardHeadingAmtRef],
      "credit-card-card-display-current-prev",
      "add"
    );

    setTimeout(() => {
      classNameModifier(
        [
          creditCardHolderRef,
          creditCardHeadingTextRef,
          creditCardHeadingAmtRef,
        ],
        "credit-card-card-display-current-prev",
        "remove"
      );
    }, 1000);
  }, []);

  const nextCardHandler = async () => {
    classNameModifier(
      [creditCardHolderRef, creditCardHeadingTextRef, creditCardHeadingAmtRef],
      "credit-card-card-display-away",
      "add"
    );

    setTimeout(() => {
      classNameModifier(
        [
          creditCardHolderRef,
          creditCardHeadingTextRef,
          creditCardHeadingAmtRef,
        ],
        "credit-card-card-display-away",
        "remove"
      );

      setCardIndex((cardIndex + 1) % CREDIT_CARDS.length);
      classNameModifier(
        [
          creditCardHolderRef,
          creditCardHeadingTextRef,
          creditCardHeadingAmtRef,
        ],
        "credit-card-card-display-current",
        "add"
      );

      setTimeout(() => {
        classNameModifier(
          [
            creditCardHolderRef,
            creditCardHeadingTextRef,
            creditCardHeadingAmtRef,
          ],
          "credit-card-card-display-current",
          "remove"
        );
      }, 1000);
    }, 1000);
  };

  const prevCardHandler = async () => {
    classNameModifier(
      [creditCardHolderRef, creditCardHeadingTextRef, creditCardHeadingAmtRef],
      "credit-card-card-display-away-prev",
      "add"
    );
    setTimeout(() => {
      classNameModifier(
        [
          creditCardHolderRef,
          creditCardHeadingTextRef,
          creditCardHeadingAmtRef,
        ],
        "credit-card-card-display-away-prev",
        "remove"
      );

      setCardIndex((CREDIT_CARDS.length + cardIndex + 1) % CREDIT_CARDS.length);
      classNameModifier(
        [
          creditCardHolderRef,
          creditCardHeadingTextRef,
          creditCardHeadingAmtRef,
        ],
        "credit-card-card-display-current-prev",
        "add"
      );

      setTimeout(() => {
        classNameModifier(
          [
            creditCardHolderRef,
            creditCardHeadingTextRef,
            creditCardHeadingAmtRef,
          ],
          "credit-card-card-display-current-prev",
          "remove"
        );
      }, 1000);
    }, 1000);
  };

  console.log("CreditCardOverview rendered");

  return (
    <div className="credit-card-overview">
      <div className="credit-card-overview-amount">
        {hasMultipleCreditCards && (
          <IconButton
            className="credit-card-overview-arrow"
            icon={<FontAwesomeIcon icon={faChevronLeft} />}
            onClick={prevCardHandler}
          />
        )}
        <div className="credit-card-overview-amount-balance">
          <div
            ref={creditCardHeadingTextRef}
            className="credit-card-card-balance-title"
          >
            <Text variant="label" size="small">
              Card Balance
            </Text>
          </div>
          <div
            className="credit-card-card-balance-amount"
            ref={creditCardHeadingAmtRef}
          >
            <Text variant="label" size="vlarge">
              Rs. {CREDIT_CARDS[cardIndex].amount}
            </Text>
          </div>
        </div>
        {hasMultipleCreditCards && (
          <IconButton
            className="credit-card-overview-arrow"
            icon={<FontAwesomeIcon icon={faChevronRight} />}
            onClick={nextCardHandler}
          />
        )}
      </div>
      <div className={`credit-card-card-display`} ref={creditCardHolderRef}>
        <img src={CREDIT_CARDS[cardIndex].cardImg} alt="Credit Card" />
        <div className="credit-card-card-details">
          <div className="credit-card-card-number">
            <Text variant="number" size="large">
              {CREDIT_CARDS[cardIndex].cardNumber}
            </Text>
          </div>
          <div className="credit-card-card-validity-logo">
            <span className="credit-card-card-validity">
              <Text variant="number" size="small">
                Exp: {CREDIT_CARDS[cardIndex].cardValidity}
              </Text>
            </span>
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
