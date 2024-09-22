import { TimeSeries } from "@/stores/AppStoreType";
import React, { useEffect, useRef } from "react";
import * as d3 from "d3";

function LineChartComponent({ data }: { data: TimeSeries[] }) {
  const ref = useRef<SVGSVGElement | null>(null);
  const width = 928;
  const height = 400;
  const marginTop = 30;
  const marginRight = 50;
  const marginBottom = 60;
  const marginLeft = 30;

  useEffect(() => {
    const x = d3
      .scaleUtc()
      .domain([
        d3.min(data, (d) => d.Date) as Date,
        d3.max(data, (d) => d.Date) as Date,
      ])
      .range([marginLeft, width - marginRight]);

    const y = d3
      .scaleLinear()
      .domain([20, d3.max(data, (d) => d.rate) as number])
      .range([height - marginBottom, marginTop]);

    const svg = d3.select(ref.current);
    svg.selectAll("*").remove();
    svg
      .attr("width", width)
      .attr("height", height)
      .attr("viewBox", [0, 0, width, height])
      .attr("style", "max-width: 100%; height: auto; font: 10px sans-serif;");

    svg
      .append("g")
      .attr("transform", `translate(0,${height - marginBottom})`)
      .call(
        d3
          .axisBottom(x)
          .ticks(width / 80)
          .tickSizeOuter(20)
      )
      .selectAll("text")
      .style("text-anchor", "end")
      .attr("dx", "-.8em")
      .attr("dy", ".40em")
      .attr("transform", "rotate(-65)");

    // Add a container for each series.
    const serie = svg.append("g").selectAll().data(data).join("g");

    // Draw the lines.
    serie
      .append("path")
      .attr("fill", "none")
      .attr("stroke", () => d3.color("steelblue")?.toString() as string)
      .attr("stroke-width", 3)
      .attr("d", () =>
        d3
          .line<TimeSeries>()
          .x((d) => x(d.Date))
          .y((d) => y(d.rate))(data)
      );

    serie
      .append("g")
      .attr("stroke-linecap", "round")
      .attr("stroke-linejoin", "round")
      .attr("text-anchor", "middle")
      .selectAll()
      .data(data)
      .join("text")
      .text((d) => d3.format("($.0f")(d.rate))
      .attr("font-size", "16px")
      .attr("dy", "0.5em")
      .attr("x", (d) => x(d.Date))
      .attr("y", (d) => y(d.rate))
      .call((text) =>
        text
          .filter((d, i, data) => i === data.length - 1)
          .append("tspan")
          .attr("font-weight", "bold")
          .attr("font-size", "16px")
          .text(() => "Price")
      )
      .clone(true)
      .lower()
      .attr("fill", "none")
      .attr("stroke", "white")
      .attr("stroke-width", 9);
  }, [data, width]);

  return (
    <div className="w-full">
      <div className=" flex flex-row justify-center">
        <div className="text-center underline text-2xl">
          Time serie (manual update, no sync)
        </div>
      </div>
      <div className="flex flex-row justify-center">
        <svg ref={ref}></svg>
      </div>
    </div>
  );
}

export default LineChartComponent;
