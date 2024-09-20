"use client";

import TimeSeriesChartBaseComponent from "@/components/baseCharts/TimeSeriesChartBaseComponent";
import { useAppStore } from "@/stores/AppStore";
import React, { useEffect } from "react";

function TimeSeriesChart() {
  const data = useAppStore((s) => s.timeSeriesData);
  useEffect(() => {
    console.log({ data });
  }, [data]);

  return <TimeSeriesChartBaseComponent data={data} />;
}

export default TimeSeriesChart;
