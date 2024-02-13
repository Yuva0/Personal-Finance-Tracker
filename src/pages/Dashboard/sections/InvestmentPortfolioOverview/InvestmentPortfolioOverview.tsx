import React, { useRef } from "react";
import Text from "../../../../components/Text/Text";
import IconButton from "../../../../components/IconButton/IconButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import "./InvestmentPortfolioOverview.scss";
import { classNameModifier } from "../../../../helpers/BasicHelper";

import { ResponsiveContainer, PieChart, Cell, Pie,Tooltip } from "recharts";

const data = [
  { name: "Mutual Funds", value: 400 },
  { name: "Gold", value: 300 },
  { name: "Bonds", value: 300 },
  { name: "Life Insurance", value: 200 },
];
const COLORS = ["var(--color-info-400)", "var(--color-crimson-400)", "var(--color-orange-400)", "var(--color-critical-400)"];

type customizedLabelProps = {
  cx: number;
  cy: number;
  midAngle: number;
  innerRadius: number;
  outerRadius: number;
  percent: number;
  index: number;
};

const InvestmentPortfolioOverview = () => {
  const RADIAN = Math.PI / 180;
  const investmentHeader = useRef<HTMLDivElement>(null);
  const investmentChart = useRef<HTMLDivElement>(null);


  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
    index,
  }: customizedLabelProps) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  const prevClickHandler = () => {
    classNameModifier([investmentHeader, investmentChart], "investment-portfolio-overview-away-prev", "add");

    setTimeout(() => {
      classNameModifier([investmentHeader, investmentChart], "investment-portfolio-overview-away-prev", "remove");
    }, 1000);
  }

  const nextClickHandler = () => {
    classNameModifier([investmentHeader, investmentChart], "investment-portfolio-overview-away-next", "add");

    setTimeout(() => {
      classNameModifier([investmentHeader, investmentChart], "investment-portfolio-overview-away-next", "remove");
    }, 1000);
  }

  return (
    <div className="investment-portfolio-overview">
      <IconButton
        className="investment-portfolio-overview-arrow"
        icon={<FontAwesomeIcon icon={faChevronLeft} />}
        onClick={prevClickHandler}
      />
      <div className="investment-portfolio-overview-investments">
        <div ref={investmentHeader}>
          <Text variant="label" size="small">
            Investment Portfolio
          </Text>
        </div>
        <ResponsiveContainer
          width="100%"
          height={(window.innerWidth / 100) * 20 - 72}
          className="investment-portfolio-overview-chart"
          ref={investmentChart}
        >
          <PieChart>
            <Pie
              stroke="none"
              data={data}
              cx="50%"
              cy="50%"
              label={renderCustomizedLabel}
              labelLine={false}
              fill="#8884d8"
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>
      <IconButton
        className="investment-portfolio-overview-arrow"
        icon={<FontAwesomeIcon icon={faChevronRight} />}
        onClick={nextClickHandler}
      />
    </div>
  );
};

export default InvestmentPortfolioOverview;
