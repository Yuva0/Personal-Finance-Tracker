import React from "react";
import "./AssetsLiabilitiesOverview.scss";

import Text from "../../../../components/Text/Text";
import IconButton from "../../../../components/IconButton/IconButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

import {
  ResponsiveContainer,
  BarChart,
  XAxis,
  YAxis,
  // Tooltip,
  Bar,
} from "recharts";

const AssetsLiabilitiesOverview = () => {
  const data = [
    {
      name: "Jan",
      Assets: 4000,
      Liabilities: 2400,
    },
    {
      name: "Feb",
      Assets: 3000,
      Liabilities: 1398,
    },
    {
      name: "Mar",
      Assets: 2000,
      Liabilities: 9800,
    },
    {
      name: "Apr",
      Assets: 2780,
      Liabilities: 3908,
    },
    {
      name: "May",
      Assets: 1890,
      Liabilities: 4800,
    },
  ];

  return (
    <div className="investment-overview">
      <IconButton
        className="investment-overview-arrow"
        icon={<FontAwesomeIcon icon={faChevronLeft} />}
      />
      <div className="investment-monthly-investments">
        <div>
          <Text variant="label" size="small">
            Monthly&nbsp;
            <span style={{color:"#2dc653"}}>Assets</span> & <span style={{color:"#ff4d6d"}}>Liabilities</span>
          </Text>
        </div>
        <ResponsiveContainer
          width="100%"
          height={(window.innerWidth / 100) * 15 - 64}
          className="investment-overview-chart"
        >
          <BarChart data={data}>
            {/* <CartesianGrid strokeDasharray="3 3" /> */}
            <XAxis dataKey="name" style={{ fontSize: "14px" }} />
            <YAxis style={{ fontSize: "14px" }} />
            {/* <Tooltip /> */}
            {/* <Legend  wrapperStyle={{fontSize:"14px"}}/> */}
            <Bar dataKey="Assets" fill="#2dc653" />
            <Bar dataKey="Liabilities" fill="#ff4d6d" />
          </BarChart>
        </ResponsiveContainer>
      </div>
      <IconButton
        className="investment-overview-arrow"
        icon={<FontAwesomeIcon icon={faChevronRight} />}
      />
    </div>
  );
};

export default AssetsLiabilitiesOverview;
