import { useEffect, useRef } from "react";
import * as d3 from "d3";

const Axis = () => {
  const height = 300;
  const width = 300;
  const marginBottom = 50;
  const marginLeft = 50;
  const marginRight = 50;

  // d3.scaleLinear 선언
  const x = d3
    .scaleLinear()
    .domain([0, 10])
    .range([marginLeft, width - marginRight]);

  const ref = useRef();
  useEffect(() => {
    const svgElement = d3
      .select(ref.current)
      .attr("width", width)
      .attr("height", height);

    svgElement
      .append("g")
      .attr("transform", `translate(0,${height - marginBottom})`) //추가된 그룹 요소에 transform 속성을 설정하여 아래 여백만큼 이동
      .call(d3.axisBottom(x)); // d3 의 축 생성 함수인 `d3.axisBottom(x)` 를 호출하여 하단 축을 생성합니다. 축 생성 시에는 앞서 정의한 `x` 스케일을 전달
  }, []);

  return (
    <>
      <svg ref={ref} />
    </>
  );
};

export default Axis;
