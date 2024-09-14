const LineShape = () => {
    const data = [100, 10, 30, 50, 10, 70, 200, 90];
    const barWidth = 50;
    const svgWidth = 500;
    const svgHeight = 500;

    return (
        <svg width={svgWidth} height={svgHeight}>
            {data.map((value, index) => (
                //추가적 설명은 코드 아래 글 참고
                <rect
                    key={index}
                    x={60*index}
                    y={svgHeight - value}
                    width={barWidth}
                    height={value}
                    fill="blue"
                />
            ))}
        </svg>
    );
};

export default LineShape;