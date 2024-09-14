import { useEffect, useRef } from "react";
import * as d3 from "d3";
const data = [
  { date: new Date(2023, 0, 1), close: 150 },
  { date: new Date(2023, 0, 2), close: 200 },
  { date: new Date(2023, 0, 3), close: 250 },
  { date: new Date(2023, 0, 4), close: 300 },
  { date: new Date(2023, 0, 5), close: 350 },
];
const AreaShape = () => {
  const ref = useRef();

  useEffect(() => {
    const width = 928;
    const height = 500;
    const marginTop = 20;
    const marginRight = 30;
    const marginBottom = 30;
    const marginLeft = 40;

    const x = d3
      .scaleUtc()
      .domain(d3.extent(data, (d) => d.date))
      .range([marginLeft, width - marginRight]);

    const y = d3
      .scaleLinear()
      .domain([0, d3.max(data, (d) => d.close)])
      .range([height - marginBottom, marginTop]);

    const area = d3
      .area()
      .x((d) => x(d.date))
      .y0(y(0))
      .y1((d) => y(d.close));

    const svg = d3
      .select(ref.current)
      .attr("width", width)
      .attr("height", height)
      .attr("viewBox", [0, 0, width, height])
      .attr("style", "max-width: 100%; height: auto;");

    svg.append("path").attr("fill", "steelblue").attr("d", area(data));

    svg
      .append("g")
      .attr("transform", `translate(0,${height - marginBottom})`)
      .call(
        d3
          .axisBottom(x)
          .ticks(width / 80)
          .tickSizeOuter(0)
      );

    svg
      .append("g")
      .attr("transform", `translate(${marginLeft},0)`)
      .call(d3.axisLeft(y).ticks(height / 40))
      .call((g) => g.select(".domain").remove())
      .call((g) =>
        g
          .selectAll(".tick line")
          .clone()
          .attr("x2", width - marginLeft - marginRight)
          .attr("stroke-opacity", 0.1)
      )
      .call((g) =>
        g
          .append("text")
          .attr("x", -marginLeft)
          .attr("y", 10)
          .attr("fill", "currentColor")
          .attr("text-anchor", "start")
          .text("↑ Daily close ($)")
      );
  }, [data]);

  return <svg ref={ref}></svg>;
};

export default AreaShape;
