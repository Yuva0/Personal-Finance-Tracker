import React from "react";
import Text from "../../../../components/Text/Text";
import IconButton from "../../../../components/IconButton/IconButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import "./InvestmentPortfolioOverview.scss";

import { ResponsiveContainer, PieChart, Cell, Pie } from "recharts";

const data = [
  { name: "Group A", value: 400 },
  { name: "Group B", value: 300 },
  { name: "Group C", value: 300 },
  { name: "Group D", value: 200 },
];
const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

const InvestmentPortfolioOverview = () => {
  return (
    <div className="investment-portfolio-overview">
      <IconButton
        className="investment-portfolio-overview-arrow"
        icon={<FontAwesomeIcon icon={faChevronLeft} />}
      />
      <div className="investment-portfolio-overview-investments">
        <div>
          <Text variant="label" size="small">
            Investment Portfolio
          </Text>
        </div>
        <ResponsiveContainer
          width="100%"
          height={(window.innerWidth / 100) * 20 - 72}
          className="investment-overview-chart"
        >
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              labelLine={false}
              // label={renderCustomizedLabel}
              outerRadius={80}
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
          </PieChart>
        </ResponsiveContainer>
      </div>
      <IconButton
        className="investment-overview-arrow"
        icon={<FontAwesomeIcon icon={faChevronRight} />}
      />
    </div>
  );
};

export default InvestmentPortfolioOverview;
