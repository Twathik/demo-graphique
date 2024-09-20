"use client";
import React, { useEffect, useRef } from "react";
import * as d3 from "d3";
import { TimeSeries } from "@/stores/AppStoreType";

function TimeSeriesChartBaseComponent({ data }: { data: TimeSeries[] }) {
  const ref = useRef(null);
  const width = 1000;
  const height = 600;
  const marginTop = 20;
  const marginRight = 30;
  const marginBottom = 30;
  const marginLeft = 50;
  const basis = 100;

  useEffect(() => {
    // Specify the horizontal (time) axis.
    const x = d3
      .scaleUtc()

      .domain(d3.extent(data, (d) => d.Date) as Date[])
      .range([marginLeft, width - marginRight]);

    // Specify the vertical axis.
    const y = d3
      .scaleLog()
      .domain(
        [
          d3.min(data, (d) => (d.rate / basis) * 0.9) as number,
          d3.max(data, (d) => d.rate / basis / 0.9) as number,
        ] ?? [0, 100]
      )
      .rangeRound([height - marginBottom, marginTop]);

    // A format function that transforms 1.2 into "+20%", etc.
    const f = d3.format("+.0%");
    const format = (x: d3.NumberValue) =>
      x === 1 ? "0%" : f((x as number) - 1);
    // Create the SVG container.
    const svg = d3.select(ref.current).attr("viewBox", [0, 0, width, height]);

    // Create the horizontal (date) axis.
    svg
      .append("g")
      .attr("transform", `translate(0,${y(1)})`)
      .call(
        d3
          .axisBottom(x)
          .ticks(width / 80)
          .tickSizeOuter(0)
      )
      .call((g) => g.select(".domain").remove());

    // Create the vertical axis, with grid lines.
    svg
      .append("g")
      .attr("transform", `translate(${marginLeft},0)`)
      .call(
        d3
          .axisLeft(y)
          // @ts-expect-error
          .tickValues(d3.ticks(...y.domain(), 10))
          .tickFormat(format)
      )
      .call((g) =>
        g
          .selectAll(".tick line")
          .clone()
          .attr("stroke-opacity", (d) => (d === 1 ? null : 0.2))
          .attr("x2", width - marginLeft - marginRight)
      )
      .call((g) => g.select(".domain").remove());

    // Create a line path that normalizes the value with respect to the base.
    const line = d3
      .line<TimeSeries>()
      .x((d) => x(d.Date))
      .y((d) => y(d.rate / basis));

    svg
      .append("path")
      .datum(data)
      .attr("fill", "none")
      .attr("stroke", "steelblue")
      .attr("stroke-width", 1.5)
      .attr("stroke-linejoin", "round")
      .attr("stroke-linecap", "round")
      .attr("d", line);
  }, [data]);

  return (
    <div className="w-full">
      <div className=" flex flex-row justify-center">
        <div className="text-center underline text-2xl">
          Time serie statique (statique)
        </div>
      </div>
      <div className="flex flex-row justify-center">
        <svg ref={ref} width={width} height={height}></svg>
      </div>
    </div>
  );
}

export default TimeSeriesChartBaseComponent;
