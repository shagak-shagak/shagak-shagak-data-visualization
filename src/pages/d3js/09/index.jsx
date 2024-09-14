import { useEffect, useRef } from "react";
import * as d3 from "d3";

// 2023년 12개월 데이터 (예시 데이터)
const data = [
    { date: new Date(2023, 0, 1), close: 100 },
    { date: new Date(2023, 1, 1), close: 120 },
    { date: new Date(2023, 2, 1), close: 85 },
    { date: new Date(2023, 3, 1), close: 110 },
    { date: new Date(2023, 4, 1), close: 150 },
    { date: new Date(2023, 5, 1), close: 130 },
    { date: new Date(2023, 6, 1), close: 140 },
    { date: new Date(2023, 7, 1), close: 160 },
    { date: new Date(2023, 8, 1), close: 180 },
    { date: new Date(2023, 9, 1), close: 170 },
    { date: new Date(2023, 10, 1), close: 190 },
    { date: new Date(2023, 11, 1), close: 200 }
];

const LineShape = () => {
    const ref = useRef();

    useEffect(() => {
        // 차트의 크기와 여백 설정
        const width = 928;
        const height = 500;
        const marginTop = 20;
        const marginRight = 30;
        const marginBottom = 30;
        const marginLeft = 40;

        // x축 스케일 설정
        const x = d3.scaleUtc()
            .domain([new Date(2023, 0, 1), new Date(2023, 11, 31)]) // 명시적으로 도메인 설정
            .range([marginLeft, width - marginRight]);

        // y축 스케일 설정
        const y = d3.scaleLinear()
            .domain([0, d3.max(data, d => d.close)])
            .range([height - marginBottom, marginTop]);

        // 라인 생성기 설정
        const line = d3.line()
            .x(d => x(d.date))
            .y(d => y(d.close));

        // SVG 컨테이너 생성
        const svg = d3.select(ref.current)
            .attr("width", width)
            .attr("height", height)
            .attr("viewBox", [0, 0, width, height])
            .attr("style", "max-width: 100%; height: auto; height: intrinsic;");

        // x축 추가 (월 표시)
        svg.append("g")
            .attr("transform", `translate(0,${height - marginBottom})`)
            .call(d3.axisBottom(x)
                .ticks(d3.utcMonth.every(1)) // 매 달에 하나씩 눈금을 추가
                .tickFormat(d3.timeFormat("%b")) // 월 이름 (Jan, Feb 등) 형식으로 표시
            )
            .call(g => g.select(".domain").remove()); // 축의 기본 도메인 라인 제거

        // y축 추가, 도메인 라인 제거, 그리드 라인 및 레이블 추가
        svg.append("g")
            .attr("transform", `translate(${marginLeft},0)`)
            .call(d3.axisLeft(y).ticks(height / 40))
            .call(g => g.select(".domain").remove())
            .call(g => g.selectAll(".tick line").clone()
                .attr("x2", width - marginLeft - marginRight)
                .attr("stroke-opacity", 0.1))
            .call(g => g.append("text")
                .attr("x", -marginLeft)
                .attr("y", 10)
                .attr("fill", "currentColor")
                .attr("text-anchor", "start")
                .text("↑ Daily close ($)"));

        // 라인 경로 추가
        svg.append("path")
            .attr("fill", "none")
            .attr("stroke", "steelblue")
            .attr("stroke-width", 1.5)
            .attr("d", line(data));
    }, []);

    return <svg ref={ref}></svg>;
};

export default LineShape;
