"use client";
import { useAppStore } from "@/stores/AppStore";
import React from "react";
import BarChartBaseComponent from "../../baseCharts/BarChartBaseComponent";

function BarChartComponent() {
  const barChartData = useAppStore((s) => s.categoryChartData);

  return <BarChartBaseComponent data={barChartData} />;
}

export default BarChartComponent;
