import React from "react";
import {
  ResponsiveContainer,
  BarChart,
  XAxis,
  YAxis,
  Tooltip,
  Bar,
} from "recharts";

import Card from "../../../../../components/Card/Card";
import Text from "../../../../../components/Text/Text";

import "./IncomeAnalysisBar.scss";
import ContentSwitcher from "../../../../../components/ContentSwitcher/ContentSwitcher";
import ContentSwitcherItem from "../../../../../components/ContentSwitcher/ContentSwitcherItem/ContentSwitcherItem";

const IncomeAnalysisBar = () => {
  const data = [
    {
      name: "2012",
      Income: 20000,
      Expense: 8000,
    },
    {
      name: "2013",
      Income: 22000,
      Expense: 12000,
    },
    {
      name: "2014",
      Income: 23000,
      Expense: 18000,
    },
    {
      name: "2015",
      Income: 24000,
      Expense: 20000,
    },
    {
      name: "2016",
      Income: 30000,
      Expense: 23000,
    },

    {
      name: "2017",
      Income: 32000,
      Expense: 28000,
    },
    {
      name: "2018",
      Income: 40000,
      Expense: 30000,
    },
    {
      name: "2019",
      Income: 41000,
      Expense: 31000,
    },
    {
      name: "2020",
      Income: 42000,
      Expense: 31000,
    },
    {
      name: "2021",
      Income: 44000,
      Expense: 34000,
    },
    {
      name: "2022",
      Income: 50000,
      Expense: 34000,
    },
    {
      name: "2023",
      Income: 52000,
      Expense: 40000,
    },
  ];

  return (
    <Card className="income-analysis-bar">
      <div className="income-analysis-bar-header">
        <div className="income-analysis-bar-start">
          <Text variant="label" size="large">
            Annual <span style={{ color: "#2dc653" }}>Income</span> vs{" "}
            <span style={{ color: "#ff4d6d" }}>Expense</span>
          </Text>
        </div>
        <div className="income-analysis-bar-end">
          <ContentSwitcher className="income-analysis-bar-content-switcher">
            <ContentSwitcherItem
              label="Yearly"
              className="income-analysis-bar-content-switcher-item"
              selected
            />
            <ContentSwitcherItem
              label="Monthly"
              className="income-analysis-bar-content-switcher-item"
            />
            <ContentSwitcherItem
              label="Weekly"
              className="income-analysis-bar-content-switcher-item"
            />
          </ContentSwitcher>
        </div>
      </div>
      <div className="main-panel-transaction-analysis-bar">
        <ResponsiveContainer
          width="95%"
          height={(window.innerWidth / 100) * 18 - 32}
          className="investment-overview-chart"
        >
          <BarChart data={data}>
            {/* <CartesianGrid strokeDasharray="3 3" /> */}
            <XAxis dataKey="name" style={{ fontSize: "14px" }} />
            <YAxis style={{ fontSize: "14px" }} />
            <Tooltip cursor={{ fill: "transparent" }} />
            {/* <Legend  wrapperStyle={{fontSize:"14px"}}/> */}
            <Bar dataKey="Income" fill="#2dc653" barSize={10} />
            <Bar dataKey="Expense" fill="#ff4d6d" barSize={10} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
};

export default IncomeAnalysisBar;
