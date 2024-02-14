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

import { classNameModifier } from "../../../../helpers/BasicHelper";

const AssetsLiabilitiesOverview = () => {
  const monthlyChartsRef = React.useRef<HTMLDivElement>(null);
  const monthlyChartsTitleRef = React.useRef<HTMLDivElement>(null);
  const yearlyChartsRef = React.useRef<HTMLDivElement>(null);
  const yearlyChartsTitleRef = React.useRef<HTMLDivElement>(null);
  const [chartDisplay, setChartDisplay] = React.useState<number>(0);

  const monthlyData = [
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

  const yearlyData = [
    {
      name: "2019",
      Assets: 4000,
      Liabilities: 2400,
    },
    {
      name: "2020",
      Assets: 3000,
      Liabilities: 1398,
    },
    {
      name: "2021",
      Assets: 2000,
      Liabilities: 9800,
    },
    {
      name: "2022",
      Assets: 2780,
      Liabilities: 3908,
    },
    {
      name: "2023",
      Assets: 1890,
      Liabilities: 4800,
    },
  ]

  const prevClickHandler = () => {
    classNameModifier(
      [monthlyChartsRef],
      "investment-overview-chart-away-prev",
      "add"
    );

    classNameModifier(
      [monthlyChartsTitleRef],
      "investment-overview-chart-title-away-prev",
      "add"
    );

    setTimeout(() => {
      classNameModifier(
        [monthlyChartsRef],
        "investment-overview-chart-away-prev",
        "remove"
      );

      classNameModifier(
        [monthlyChartsTitleRef],
        "investment-overview-chart-title-away-prev",
        "remove"
      );
    }, 1000);
  };

  const nextClickHandler = () => {
    classNameModifier([monthlyChartsRef], "investment-overview-chart-away", "add");

    classNameModifier(
      [monthlyChartsTitleRef],
      "investment-overview-chart-title-away",
      "add"
    );

    setTimeout(() => {
      classNameModifier(
        [monthlyChartsRef],
        "investment-overview-chart-away",
        "remove"
      );

      classNameModifier(
        [monthlyChartsTitleRef],
        "investment-overview-chart-title-away",
        "remove"
      );

      setChartDisplay((chartDisplay + 1) % 2);
    }, 1000);
  };

  const monthlyBarChart = (
    <BarChart data={monthlyData}>
      <XAxis dataKey="name" style={{ fontSize: "var(--font-size-small)" }} />
      <YAxis style={{ fontSize: "var(--font-size-small)" }} />
      <Bar dataKey="Assets" fill="var(--color-success-600)" />
      <Bar dataKey="Liabilities" fill="var(--color-critical-600)" />
    </BarChart>
  );

  const yearlyBarChart = (
    <BarChart data={yearlyData}>
      <XAxis dataKey="name" style={{ fontSize: "var(--font-size-small)" }} />
      <YAxis style={{ fontSize: "var(--font-size-small)" }} />
      <Bar dataKey="Assets" fill="var(--color-success-600)" />
      <Bar dataKey="Liabilities" fill="var(--color-critical-600)" />
    </BarChart>
  );

  return (
    <div className="investment-overview">
      <IconButton
        className="investment-overview-arrow"
        icon={<FontAwesomeIcon icon={faChevronLeft} />}
        onClick={prevClickHandler}
      />
      {chartDisplay === 0 && (
        <div className="investment-monthly-investments">
          <div ref={monthlyChartsTitleRef}>
            <Text variant="label" size="small">
              Monthly&nbsp;
              <span style={{ color: "var(--color-success-600)" }}>
                Assets
              </span>{" "}
              &{" "}
              <span style={{ color: "var(--color-critical-600)" }}>
                Liabilities
              </span>
            </Text>
          </div>
          <ResponsiveContainer
            width="100%"
            height={(window.innerWidth / 100) * 15 - 64}
            className="investment-overview-chart"
            ref={monthlyChartsRef}
          >
            {monthlyBarChart}
          </ResponsiveContainer>
        </div>
      )}
      {chartDisplay === 1 && (
        <div className="investment-monthly-investments">
          <div ref={yearlyChartsTitleRef}>
            <Text variant="label" size="small">
              Yearly&nbsp;
              <span style={{ color: "var(--color-success-600)" }}>
                Assets
              </span>{" "}
              &{" "}
              <span style={{ color: "var(--color-critical-600)" }}>
                Liabilities
              </span>
            </Text>
          </div>
          <ResponsiveContainer
            width="100%"
            height={(window.innerWidth / 100) * 15 - 64}
            className="investment-overview-chart"
            ref={yearlyChartsRef}
          >
            {yearlyBarChart}
          </ResponsiveContainer>
        </div>
      )}
      <IconButton
        className="investment-overview-arrow"
        icon={<FontAwesomeIcon icon={faChevronRight} />}
        onClick={nextClickHandler}
      />
    </div>
  );
};

export default AssetsLiabilitiesOverview;
