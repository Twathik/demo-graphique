"use client";
import PieChartBaseComponent from "@/components/baseCharts/PieChartBaseComponent";
import { useAppStore } from "@/stores/AppStore";
import React from "react";

function PieChartComponent() {
  const barChartData = useAppStore((s) => s.categoryChartData);

  return (
    <PieChartBaseComponent
      data={barChartData}
      width={500}
      height={500}
      innerRadius={230 * 0.67}
      outerRadius={230}
    />
  );
}

export default PieChartComponent;
