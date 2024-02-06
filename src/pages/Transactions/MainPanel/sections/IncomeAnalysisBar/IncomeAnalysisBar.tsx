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

const IncomeAnalysisBar = () => {
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
    <Card className="main-panel-transaction-analysis">
        <div>
          <div className="main-panel-transaction-analysis-header">
            <Text variant="label" size="large">
              Annual Income
            </Text>
          </div>
          <div className="main-panel-transaction-analysis-bar">
            <ResponsiveContainer
              width="80%"
              height={300}
              className="investment-overview-chart"
            >
              <BarChart data={data}>
                {/* <CartesianGrid strokeDasharray="3 3" /> */}
                <XAxis dataKey="name" style={{ fontSize: "14px" }} />
                <YAxis style={{ fontSize: "14px" }} />
                <Tooltip cursor={{fill: 'transparent'}}/>
                {/* <Legend  wrapperStyle={{fontSize:"14px"}}/> */}
                <Bar dataKey="Income" fill="#2dc653" barSize={30}/>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </Card>
  );
};

export default IncomeAnalysisBar;
