// 필요한 Chart.js 컴포넌트와 모듈을 가져온다.
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Chart.js에 사용할 컴포넌트들을 등록한다.
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const MBTI = () => {
  // MBTI 데이터를 정의한다. 각 항목은 좌우 특성과 점수를 가진다.
  const mbtiData = [
    { left: "E", right: "I", leftScore: 65, rightScore: 35 },
    { left: "S", right: "N", leftScore: 55, rightScore: 45 },
    { left: "T", right: "F", leftScore: 70, rightScore: 30 },
    { left: "J", right: "P", leftScore: 40, rightScore: 60 },
  ];

  // Chart.js에 전달할 데이터 객체를 생성한다.
  const data = {
    labels: mbtiData.map(() => ""), // 빈 레이블을 사용한다.
    datasets: [
      {
        label: "첫 번째 요소",
        data: mbtiData.map((item) => item.leftScore),
        backgroundColor: "rgba(75, 192, 192, 0.8)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
      {
        label: "두 번째 요소",
        data: mbtiData.map((item) => item.rightScore),
        backgroundColor: "rgba(255, 99, 132, 0.8)",
        borderColor: "rgba(255, 99, 132, 1)",
        borderWidth: 1,
      },
    ],
  };

  // Chart.js 옵션을 설정한다.
  const options = {
    indexAxis: "y", // 가로 방향 차트로 설정
    responsive: true,
    scales: {
      x: {
        stacked: true,
        max: 100,
      },
      y: {
        stacked: true,
      },
    },
    plugins: {
      legend: {
        display: false, // 범례를 숨김
      },
      title: {
        display: true,
        text: "MBTI 유형 분석",
      },
      tooltip: {
        callbacks: {
          // 툴팁 커스터마이징
          label: function (context) {
            const dataIndex = context.dataIndex;
            const datasetIndex = context.datasetIndex;
            const score = context.parsed.x;
            const item = mbtiData[dataIndex];
            const label = datasetIndex === 0 ? item.left : item.right;
            return `${label}: ${score}%`;
          },
        },
      },
    },
  };

  return (
    <div
      style={{
        position: "relative",
        height: "500px",
        width: "fit-content",
        marginBottom: "20px",
        padding: "20px",
      }}
    >
      {/* Bar 컴포넌트를 사용하여 차트를 렌더링한다. */}
      <Bar data={data} options={options} />

      {/* MBTI 레이블을 차트 위에 오버레이로 표시한다. */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          pointerEvents: "none",
        }}
      >
        {mbtiData.map((item, index) => (
          <div
            key={index}
            style={{
              position: "absolute",
              left: 0,
              right: 0,
              top: `${index * 20 + 8}%`,
              height: "25%",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "0 10px",
              fontSize: "14px",
              fontWeight: "bold",
            }}
          >
            <span>{item.left}</span>
            <span>{item.right}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MBTI;
