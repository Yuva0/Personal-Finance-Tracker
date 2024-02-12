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
  const chartsRef = React.useRef<HTMLDivElement>(null);
  const chartsTitleRef = React.useRef<HTMLDivElement>(null);

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

  const prevClickHandler = () => {
    classNameModifier(
      [chartsRef],
      "investment-overview-chart-away-prev",
      "add"
    );

    classNameModifier(
      [chartsTitleRef],
      "investment-overview-chart-title-away-prev",
      "add"
    );

    setTimeout(() => {
      classNameModifier(
        [chartsRef],
        "investment-overview-chart-away-prev",
        "remove"
      );

      classNameModifier(
        [chartsTitleRef],
        "investment-overview-chart-title-away-prev",
        "remove"
      );
    }, 1000);
  };

  const nextClickHandler = () => {
    classNameModifier(
      [chartsRef],
      "investment-overview-chart-away",
      "add"
    );

    classNameModifier(
      [chartsTitleRef],
      "investment-overview-chart-title-away",
      "add"
    );

    setTimeout(() => {
      classNameModifier(
        [chartsRef],
        "investment-overview-chart-away",
        "remove"
      );

      classNameModifier(
        [chartsTitleRef],
        "investment-overview-chart-title-away",
        "remove"
      );
    }, 1000);
  }

  const barChart = (
    <BarChart data={data}>
      <XAxis dataKey="name" style={{ fontSize: "14px" }} />
      <YAxis style={{ fontSize: "14px" }} />
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
      <div className="investment-monthly-investments">
        <div ref={chartsTitleRef}>
          <Text variant="label" size="small">
            Monthly&nbsp;
            <span style={{ color: "var(--color-success-600)" }}>Assets</span> &{" "}
            <span style={{ color: "var(--color-critical-600)" }}>Liabilities</span>
          </Text>
        </div>
        <ResponsiveContainer
          width="100%"
          height={(window.innerWidth / 100) * 15 - 64}
          className="investment-overview-chart"
          ref={chartsRef}
        >
          {barChart}
        </ResponsiveContainer>
      </div>
      <IconButton
        className="investment-overview-arrow"
        icon={<FontAwesomeIcon icon={faChevronRight} />}
        onClick={nextClickHandler}
      />
    </div>
  );
};

export default AssetsLiabilitiesOverview;
