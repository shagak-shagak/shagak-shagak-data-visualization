import { useEffect, useRef } from "react";
import * as d3 from "d3";

// 데이터 정의
const data = [
  { letter: "A", frequency: 0.08167 },
  { letter: "B", frequency: 0.01492 },
  { letter: "C", frequency: 0.02782 },
  { letter: "D", frequency: 0.04253 },
  { letter: "E", frequency: 0.12702 },
  { letter: "F", frequency: 0.02288 },
  { letter: "G", frequency: 0.02015 },
  { letter: "H", frequency: 0.06094 },
  { letter: "I", frequency: 0.06966 },
  { letter: "J", frequency: 0.00153 },
  { letter: "K", frequency: 0.00772 },
  { letter: "L", frequency: 0.04025 },
  { letter: "M", frequency: 0.02406 },
  { letter: "N", frequency: 0.06749 },
  { letter: "O", frequency: 0.07507 },
  { letter: "P", frequency: 0.01929 },
  { letter: "Q", frequency: 0.00095 },
  { letter: "R", frequency: 0.05987 },
  { letter: "S", frequency: 0.06327 },
  { letter: "T", frequency: 0.09056 },
  { letter: "U", frequency: 0.02758 },
  { letter: "V", frequency: 0.00978 },
  { letter: "W", frequency: 0.0236 },
  { letter: "X", frequency: 0.0015 },
  { letter: "Y", frequency: 0.01974 },
  { letter: "Z", frequency: 0.00074 },
];

const BarShape = () => {
  const ref = useRef();

  useEffect(() => {
    const width = 928;
    const height = 500;
    const marginTop = 30;
    const marginRight = 0;
    const marginBottom = 30;
    const marginLeft = 40;

    const x = d3
      .scaleBand()
      .domain(
        d3.groupSort(
          data,
          ([d]) => -d.frequency,
          (d) => d.letter
        )
      )
      .range([marginLeft, width - marginRight])
      .padding(0.1);

    const y = d3
      .scaleLinear()
      .domain([0, d3.max(data, (d) => d.frequency)])
      .range([height - marginBottom, marginTop]);

    // SVG 컨테이너 생성
    const svg = d3
      .select(ref.current)
      .attr("width", width)
      .attr("height", height)
      .attr("viewBox", [0, 0, width, height])
      .attr("style", "max-width: 100%; height: auto;");

    // 막대 추가
    svg
      .append("g")
      .attr("fill", "steelblue")
      .selectAll("rect")
      .data(data)
      .join("rect")
      .attr("x", (d) => x(d.letter))
      .attr("y", (d) => y(d.frequency))
      .attr("height", (d) => y(0) - y(d.frequency))
      .attr("width", x.bandwidth());

    svg
      .append("g")
      .attr("transform", `translate(0,${height - marginBottom})`)
      .call(d3.axisBottom(x).tickSizeOuter(0));

    // x축 및 y축 추가
    svg
      .append("g")
      .attr("transform", `translate(${marginLeft},0)`)
      .call(d3.axisLeft(y).tickFormat((y) => (y * 100).toFixed()))
      .call((g) => g.select(".domain").remove())
      .call((g) =>
        g
          .append("text")
          .attr("x", -marginLeft)
          .attr("y", 10)
          .attr("fill", "currentColor")
          .attr("text-anchor", "start")
          .text("↑ Frequency (%)")
      );
  }, []);

  return <svg ref={ref}></svg>;
};

export default BarShape;
