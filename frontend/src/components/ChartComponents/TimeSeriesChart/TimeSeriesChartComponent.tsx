"use client";

import AddEntryForm from "@/components/AddEntryForm/AddEntryForm";
import LineChartComponent from "@/components/baseCharts/TimeSeries/LineChartComponent";
import { useAppStore } from "@/stores/AppStore";
import React from "react";

function TimeSeriesChartComponent() {
  const data = useAppStore((s) => s.timeSeriesData);

  return (
    <div className="grid md:grid-cols-3 gap-4">
      <div className="md:col-span-1">
        <AddEntryForm />
      </div>
      <div className="shadow-xl rounded-md border-2 border-slate-400 border-solid md:col-span-2">
        <LineChartComponent data={data} />
      </div>
    </div>
  );
}

export default TimeSeriesChartComponent;
