import React from "react";

import "./ExpenseCategoryChart.scss";
import Text from "../../../../../components/Text/Text";
import Card from "../../../../../components/Card/Card";

import { ResponsiveContainer, PieChart, Cell, Pie, Tooltip } from "recharts";

const data = [
  { name: "Bills", value: 10000 },
  { name: "Travel", value: 20000 },
  { name: "Shopping", value: 30000 },
  { name: "Rent", value: 22000 },
];
const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];
type customizedLabelProps = {
  cx: number;
  cy: number;
  midAngle: number;
  innerRadius: number;
  outerRadius: number;
  percent: number;
  index: number;
};

const ExpenseCategoryChart = () => {
  const RADIAN = Math.PI / 180;
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
  return (
    <Card className="expense-category-chart">
      <Text variant="label" size="medium">
        Expense Category Chart
      </Text>
      <ResponsiveContainer
        width="100%"
        height={(window.innerWidth / 100) * 18}
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
    </Card>
  );
};

export default ExpenseCategoryChart;
