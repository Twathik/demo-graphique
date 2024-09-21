"use client";
import PieChartBaseComponent from "@/components/baseCharts/PieChartBaseComponent";
import { useAppStore } from "@/stores/AppStore";
import React from "react";

function PieChartComponent() {
  const barChartData = useAppStore((s) => s.categoryChartData);

  return <PieChartBaseComponent data={barChartData} />;
}

export default PieChartComponent;
