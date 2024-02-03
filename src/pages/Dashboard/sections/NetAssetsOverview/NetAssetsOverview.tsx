import React from "react";

import "./NetAssetsOverview.scss";
import Text from "../../../../components/Text/Text";
import IconButton from "../../../../components/IconButton/IconButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import Button from "../../../../components/Button/Button";

const NetAssetsOverview = () => {
  const data = [
    {
      name: "Jan",
      uv: 2000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "Feb",
      uv: 4000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "Mar",
      uv: 7000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: "Apr",
      uv: 13000,
      pv: 3908,
      amt: 2000,
    },
    {
      name: "May",
      uv: 14000,
      pv: 4800,
      amt: 2181,
    },
    {
      name: "Jun",
      uv: 18000,
      pv: 3800,
      amt: 2500,
    },
    {
      name: "Jul",
      uv: 19000,
      pv: 4300,
      amt: 2100,
    },
    {
      name: "Aug",
      uv: 24500,
      pv: 4800,
      amt: 2181,
    },
    {
      name: "Sep",
      uv: 27000,
      pv: 3800,
      amt: 2500,
    },
    {
      name: "Oct",
      uv: 30000,
      pv: 4300,
      amt: 2100,
    },
    {
      name: "Nov",
      uv: 32000,
      pv: 4800,
      amt: 2181,
    },
    {
      name: "Dec",
      uv: 38000,
      pv: 3800,
      amt: 2500,
    },
  ];

  return (
    <div className="net-assets-overview">
      <IconButton
        className="investment-portfolio-overview-arrow"
        icon={<FontAwesomeIcon icon={faChevronLeft} />}
      />
      <div className="net-assets-overview-chart">
        <div className="net-assets-overview-chart-asset-heading">
          <div>
            <Text variant="label" size="medium">
              Net Assets
            </Text>
          </div>
          <div className="net-assets-overview-chart-asset-buttons">
            <div className=""></div>
            <div></div>
          </div>
        </div>
        <ResponsiveContainer
          width="100%"
          height={(window.innerWidth / 100) * 20 - 72}
        >
          <AreaChart
            width={500}
            height={400}
            data={data}
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            <defs>
              <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
              </linearGradient>
            </defs>
            {/* <CartesianGrid strokeDasharray="3 3" /> */}
            <XAxis dataKey="name" />
            <YAxis />
            {/* <Tooltip /> */}
            <Area
              type="monotone"
              dataKey="uv"
              stroke="#8884d8"
              fill="url(#colorUv)"
              label={{ fill: "white", fontSize: "12px" }}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
      <IconButton
        className="investment-portfolio-overview-arrow"
        icon={<FontAwesomeIcon icon={faChevronRight} />}
      />
    </div>
  );
};

export default NetAssetsOverview;
