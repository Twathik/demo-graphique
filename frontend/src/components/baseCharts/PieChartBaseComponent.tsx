import React, { useEffect, useRef } from "react";
import * as d3 from "d3";
import { CategoriesChartMessageInterface } from "../Websockets/interfaces/CategoriesChartMessageInterface";
type DATA = CategoriesChartMessageInterface["data"][0];

const PieChartBaseComponent = (props: {
  data: CategoriesChartMessageInterface["data"];
  width: number;
  height: number;
  innerRadius: number;
  outerRadius: number;
}) => {
  const ref = useRef(null);
  const cache = useRef(props.data);
  const createPie = d3
    .pie<DATA>()
    .value((d) => d.rate)
    .sort(null);
  const createArc = d3
    .arc<d3.PieArcDatum<DATA>>()
    .innerRadius(props.innerRadius)
    .outerRadius(props.outerRadius);
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
      .style("font-size", 16)
      .join("text")

      .attr("transform", (d) => `translate(${createArc.centroid(d)})`)

      .transition()
      .attr("transform", (d) => `translate(${createArc.centroid(d)})`)
      .tween("text", (d, i, nodes) => {
        const interpolator = d3.interpolate(prevData[i], d);

        return (t) => d3.select(nodes[i]).text(interpolator(t).data.framework);
      });

    cache.current = props.data;
  }, [props.data]);

  return (
    <div className="w-full">
      <div className=" flex flex-row justify-center">
        <div className="text-center underline text-2xl m-4">
          Representation dynamique des framworks selon leur frequence (5 sec
          refresh)
        </div>
      </div>
      <div className="flex flex-row w-full justify-center m-h-[60vh] items-center">
        <svg width={props.width} height={props.height}>
          <g
            ref={ref}
            transform={`translate(${props.outerRadius} ${props.outerRadius})`}
          />
        </svg>
      </div>
    </div>
  );
};

export default PieChartBaseComponent;
