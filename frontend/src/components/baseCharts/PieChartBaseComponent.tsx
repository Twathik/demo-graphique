/* eslint-disable @typescript-eslint/ban-ts-comment */
import React, { useEffect, useRef } from "react";
import * as d3 from "d3";
import { CategoriesChartMessageInterface } from "../Websockets/interfaces/CategoriesChartMessageInterface";
type DATA = CategoriesChartMessageInterface["data"][0];

const PieChartBaseComponent = (props: {
  data: CategoriesChartMessageInterface["data"];
}) => {
  const ref = useRef(null);
  const cache = useRef(props.data);

  const width = 500;
  const height = Math.min(500, width / 2);
  const outerRadius = height / 2 - 10;
  const innerRadius = outerRadius * 0.5;

  const createPie = d3
    .pie<DATA>()
    .value((d) => d.rate)
    .sort(null);
  const createArc = d3
    .arc<d3.PieArcDatum<DATA>>()
    .innerRadius(innerRadius)
    .outerRadius(outerRadius);
  const colors = d3.scaleOrdinal(d3.schemeCategory10);

  useEffect(() => {
    const data = createPie(props.data);
    const prevData = createPie(cache.current);
    const group = d3.select(ref.current);
    const groupWithData = group.selectAll("g.arc").data(data);

    groupWithData.exit().remove();

    const groupWithUpdate = groupWithData
      .enter()
      .append("g")
      .attr("class", "arc");

    const path = groupWithUpdate
      .append("path")
      .merge(groupWithData.select("path.arc"));

    const arcTween = (d: DATA, i: number) => {
      const interpolator = d3.interpolate(prevData[i], d);
      // @ts-expect-error
      return (t) => createArc(interpolator(t));
    };

    path
      .attr("class", "arc")
      // @ts-expect-error
      .attr("fill", (d, i) => colors(i))
      .transition()
      // @ts-expect-error
      .attrTween("d", arcTween);

    const text = groupWithUpdate
      .append("text")
      .merge(groupWithData.select("text"));

    text
      .attr("text-anchor", "middle")
      .attr("alignment-baseline", "middle")
      .style("fill", "white")
      .style("font-size", height / 20)
      .join("text")

      .attr("transform", (d) => `translate(${createArc.centroid(d)})`)

      .transition()
      .attr("transform", (d) => `translate(${createArc.centroid(d)})`)
      .tween("text", (d, i, nodes) => {
        const interpolator = d3.interpolate(prevData[i], d);

        return (t) => d3.select(nodes[i]).text(interpolator(t).data.framework);
      });

    cache.current = props.data;
  }, [colors, createArc, createPie, height, props.data]);

  return (
    <div className="w-full">
      <div className=" flex flex-row justify-center">
        <div className="text-center underline md:text-2xl m-4">
          Representation dynamique des framworks selon leur frequence (5 sec
          refresh)
        </div>
      </div>
      <div className="flex flex-row w-full justify-center items-center">
        <svg viewBox={`0 0 ${width} ${height}`} style={{ maxWidth: "70vw" }}>
          <g
            ref={ref}
            transform={`translate(${outerRadius + width / 4} ${outerRadius})`}
          />
        </svg>
      </div>
    </div>
  );
};

export default PieChartBaseComponent;
