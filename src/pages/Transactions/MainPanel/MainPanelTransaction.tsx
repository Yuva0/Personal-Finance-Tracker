import React from "react";

import "./MainPanelTransaction.scss";
import Card from "../../../components/Card/Card";
import RecentTransaction from "./sections/RecentTransaction/RecentTransaction";
import Text from "../../../components/Text/Text";

import {
  ResponsiveContainer,
  BarChart,
  XAxis,
  YAxis,
  Tooltip,
  Bar,
} from "recharts";
import IncomeAnalysisBar from "./sections/IncomeAnalysisBar/IncomeAnalysisBar";

const MainPanelTransaction = () => {

  const data = [
    {
      name: "2012",
      Income: 4000,
    },
    {
      name: "2013",
      Income: 3000,
    },
    {
      name: "2014",
      Income: 2000,
    },
    {
      name: "2015",
      Income: 2780,
    },
    {
      name: "2016",
      Income: 1890,
    },

    {
      name: "2017",
      Income: 4000,
    },
    {
      name: "2018",
      Income: 3000,
    },
    {
      name: "2019",
      Income: 2000
    },
    {
      name: "2020",
      Income: 2780
    },
    {
      name: "2021",
      Income: 1890
    },
    {
      name: "2022",
      Income: 2000
    },
    {
      name: "2023",
      Income: 2780
    },
  ];

  return (
    <div className="main-panel-transaction">
      <RecentTransaction />
      <IncomeAnalysisBar/>
    </div>
  );
};

export default MainPanelTransaction;
