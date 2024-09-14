import React, { useEffect, useRef } from "react";
import * as d3 from "d3";

// 하드코딩된 데이터
const data = [
  { state: "California", age: "0-4", population: 2704659 },
  { state: "California", age: "5-9", population: 4499890 },
  // ... 추가 데이터
];

const StackedBarChart = () => {
  const ref = useRef();

  useEffect(() => {
    // 차트의 크기와 여백 설정
    const width = 928;
    const marginTop = 30;
    const marginRight = 10;
    const marginBottom = 0;
    const marginLeft = 30;

    // 스택해야 할 시리즈 결정
    const series = d3
      .stack()
      .keys(d3.union(data.map((d) => d.age))) // 고유한 시리즈 키
      .value(([, D], key) => D.get(key).population)(
      // 각 시리즈 키에 대한 값 가져오기
      d3.index(
        data,
        (d) => d.state,
        (d) => d.age
      )
    ); // 스택 키와 시리즈 키로 그룹화

    // 스택 수에 따라 높이 계산
    const height = series[0].length * 25 + marginTop + marginBottom;

    // 위치 및 색상 인코딩을 위한 스케일 준비
    const x = d3
      .scaleLinear()
      .domain([0, d3.max(series, (d) => d3.max(d, (d) => d[1]))])
      .range([marginLeft, width - marginRight]);

    const y = d3
      .scaleBand()
      .domain(
        d3.groupSort(
          data,
          (D) => -d3.sum(D, (d) => d.population),
          (d) => d.state
        )
      )
      .range([marginTop, height - marginBottom])
      .padding(0.08);

    const color = d3
      .scaleOrdinal()
      .domain(series.map((d) => d.key))
      .range(d3.schemeSpectral[series.length])
      .unknown("#ccc");

    // 툴팁에 값을 포맷하는 함수
    const formatValue = (x) => (isNaN(x) ? "N/A" : x.toLocaleString("en"));

    // SVG 컨테이너 생성
    const svg = d3
      .select(ref.current)
      .attr("width", width)
      .attr("height", height)
      .attr("viewBox", [0, 0, width, height])
      .attr("style", "max-width: 100%; height: auto;");

    // 각 시리즈에 대한 그룹 추가 및 시리즈 내 각 요소에 대한 rect 추가
    svg
      .append("g")
      .selectAll("g")
      .data(series)
      .join("g")
      .attr("fill", (d) => color(d.key))
      .selectAll("rect")
      .data((D) => D.map((d) => ((d.key = D.key), d)))
      .join("rect")
      .attr("x", (d) => x(d[0]))
      .attr("y", (d) => y(d.data[0]))
      .attr("height", y.bandwidth())
      .attr("width", (d) => x(d[1]) - x(d[0]))
      .append("title")
      .text(
        (d) =>
          `${d.data[0]} ${d.key}\n${formatValue(
            d.data[1].get(d.key).population
          )}`
      );

    // 가로축 추가
    svg
      .append("g")
      .attr("transform", `translate(0,${marginTop})`)
      .call(d3.axisTop(x).ticks(width / 100, "s"))
      .call((g) => g.selectAll(".domain").remove());

    // 세로축 추가
    svg
      .append("g")
      .attr("transform", `translate(${marginLeft},0)`)
      .call(d3.axisLeft(y).tickSizeOuter(0))
      .call((g) => g.selectAll(".domain").remove());
  }, []);

  return <svg ref={ref}></svg>;
};

export default StackedBarChart;
