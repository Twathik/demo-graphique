/* eslint-disable @typescript-eslint/ban-ts-comment */
"use client";
import React, { useState } from "react";
import { CategoriesChartMessageInterface } from "../Websockets/interfaces/CategoriesChartMessageInterface";
import { useEffect, useRef } from "react";
import debounce from "lodash/debounce";
import * as d3 from "d3";

function BarChartBaseComponent({
  data,
}: {
  data: CategoriesChartMessageInterface["data"];
}) {
  const chartRef = useRef<SVGSVGElement | null>(null);
  const [width, setWidth] = useState(1066);
  const height = 400;
  const marginTop = 20;
  const marginRight = 0;
  const marginBottom = 30;
  const marginLeft = 40;
  const [svg, setSvg] = useState<d3.Selection<
    SVGSVGElement | null,
    unknown,
    null,
    undefined
  > | null>(null);

  useEffect(() => {
    if (!svg) {
      setSvg(d3.select(chartRef.current));
    } else {
      svg.selectAll("*").remove();
      // Declare the x (horizontal position) scale and the corresponding axis generator.
      const x = d3
        .scaleBand()
        .domain(data.map((d) => d.framework))
        .range([marginLeft, width - marginRight])
        .padding(0.1);

      const xAxis = d3.axisBottom(x).tickSizeOuter(0);
      // Declare the y (vertical position) scale.
      const y = d3
        .scaleLinear()
        .domain([0, d3.max(data, (d) => d.rate) ?? 100])
        .nice()
        .range([height - marginBottom, marginTop]);

      // Create the SVG container.

      svg
        .append("svg")
        .attr("viewBox", [0, 0, width, height])
        .attr(
          "style",
          `max-width: ${width}px; height: auto; font: 10px sans-serif; overflow: visible;`
        );

      // Create a bar for each framwork.
      const bar = svg
        .append("g")
        .attr("fill", "steelblue")
        .selectAll("rect")
        .data(data)
        .join("rect")
        .style("mix-blend-mode", "multiply") // Darker color when bars overlap during the transition.
        .attr("x", (d) => x(d.framework) ?? "unknown")
        .attr("y", (d) => y(d.rate))
        .attr("height", (d) => y(0) - y(d.rate))
        .attr("width", x.bandwidth());

      // Create the axes.
      const gx = svg
        .append("g")
        .attr("transform", `translate(0,${height - marginBottom})`)
        .call(xAxis);

      svg
        .append("g")
        .attr("transform", `translate(${marginLeft},0)`)
        .call(d3.axisLeft(y).tickFormat((y) => y.toString()))
        .call((g) => g.select(".domain").remove());

      x.domain(
        [...data].sort((a, b) => b.rate - a.rate).map((d) => d.framework)
      );

      const t = svg.transition().duration(750);

      bar
        .data(data, (d) => d.framework)
        .order()
        // @ts-ignore
        .transition(t)
        .delay((d, i) => i * 20)
        // @ts-ignore
        .attr("x", (d) => x(d.framework));

      // @ts-ignore
      gx.transition(t)
        .call(xAxis)
        .selectAll(".tick")
        .delay((d, i) => i * 20);

      /*  */
    }
  }, [svg, height, width, data]);

  useEffect(() => {
    function updateWidth() {
      setWidth(chartRef.current?.clientWidth ?? width);
    }
    const handleResize = debounce(updateWidth, 500);
    updateWidth();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [width]);

  return (
    <div className="w-full">
      <div className=" flex flex-row justify-center">
        <div className="text-center underline text-2xl">
          Representation dynamique des framworks selon leur frequence (5 sec
          refresh)
        </div>
      </div>
      <svg ref={chartRef} width={width} height={height}></svg>
    </div>
  );
}

export default BarChartBaseComponent;
