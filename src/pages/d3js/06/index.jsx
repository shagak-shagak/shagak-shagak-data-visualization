import { useEffect, useRef } from "react";
import * as d3 from "d3";

const Scale = () => {
  const ref = useRef();

  useEffect(() => {
    // SVG 크기 설정
    const width = 400;
    const height = 200;

    // 데이터 준비
    const data = [10, 30, 50, 70, 90];

    // SVG 요소 선택
    const svg = d3
      .select(ref.current)
      .attr("width", width)
      .attr("height", height);

    // x 스케일 정의 (선형 스케일)
    const xScale = d3
      .scaleLinear()
      .domain([0, d3.max(data)]) // 입력 도메인: 데이터의 최소값과 최대값
      .range([0, width]); // 출력 범위: SVG의 너비

    // y 스케일 정의 (선형 스케일)
    const yScale = d3
      .scaleLinear()
      .domain([0, data.length]) // 입력 도메인: 데이터 인덱스 범위
      .range([0, height]); // 출력 범위: SVG의 높이

    // 원 그리기
    svg
      .selectAll("circle")
      .data(data)
      .enter()
      .append("circle")
      .attr("cx", (d) => xScale(d)) // x 위치에 스케일 적용
      .attr("cy", (d, i) => yScale(i)) // y 위치에 스케일 적용
      .attr("r", 10)
      .attr("fill", "blue");

    // x축 추가
    const xAxis = d3.axisBottom(xScale);
    svg
      .append("g")
      .attr("transform", `translate(0, ${height - 20})`)
      .call(xAxis);
  }, []);

  return (
    <>
      <svg ref={ref}></svg>
    </>
  );
};

export default Scale;
