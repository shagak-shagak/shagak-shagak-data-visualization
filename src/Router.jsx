import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Canvas from "./pages/canvas";
import BeginPath from "./pages/canvas/BeginPath";
import FillRect from "./pages/canvas/FillRect";
import Sin from "./pages/canvas/Sin";
import SunriseSunset from "./pages/canvas/SunriseSunset";
import Triangle from "./pages/canvas/Triangle";
import ChartJs from "./pages/chartjs";
import AreaChart from "./pages/chartjs/AreaChart";
import BarChart from "./pages/chartjs/BarChart";
import BubbleChart from "./pages/chartjs/BubbleChart";
import DoughnutPieChart from "./pages/chartjs/DoughnutChart";
import LineChart from "./pages/chartjs/LineChart";
import MBTI from "./pages/chartjs/MBTI";
import MixedChart from "./pages/chartjs/MixedChart";
import PieChart from "./pages/chartjs/PieChart";
import PolarAreaChart from "./pages/chartjs/PolarAreaChart";
import RadarChart from "./pages/chartjs/RadarChart";
import ScatterChart from "./pages/chartjs/ScatterChart";
import D3js from "./pages/d3js";
import SvgEx1 from "./pages/d3js/01";
import SvgEx2 from "./pages/d3js/02/index.jsx";
import SvgEx3 from "./pages/d3js/03/index.jsx";
import Axis from "./pages/d3js/04/index.jsx";
import Color from "./pages/d3js/05/index.jsx";
import Scale from "./pages/d3js/06/index.jsx";
import Transition from "./pages/d3js/07/index.jsx";
import AreaShape from "./pages/d3js/08/index.jsx";
import LineShape from "./pages/d3js/09/index.jsx";
import PieShape from "./pages/d3js/10/index.jsx";
import BarShape from "./pages/d3js/11/index.jsx";
import StackedBarChart from "./pages/d3js/12/index.jsx";
import Map from "./pages/map";
import Map01 from "./pages/map/01";
import Map0101 from "./pages/map/01/01";
import Map0102 from "./pages/map/01/02";
import Map0103 from "./pages/map/01/03";
import Map02 from "./pages/map/02";
import Map0201 from "./pages/map/02/01";
import Map0202 from "./pages/map/02/02";
import Map0203 from "./pages/map/02/03";
import Map03 from "./pages/map/03";
import Map0301 from "./pages/map/03/01";
import Map0302 from "./pages/map/03/02";
import Map04 from "./pages/map/04";
import Dashboard from "./pages/chartjs/Dashboard/index.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "canvas",
        element: <Canvas />,
        children: [
          {
            path: "FillRect",
            element: <FillRect />,
          },
          {
            path: "BeginPath",
            element: <BeginPath />,
          },
          {
            path: "Triangle",
            element: <Triangle />,
          },
          {
            path: "Sin",
            element: <Sin />,
          },
          {
            path: "Sunrise_Sunset",
            element: <SunriseSunset />,
          },
        ],
      },
      {
        path: "chartjs",
        element: <ChartJs />,
        children: [
          {
            path: "areachart",
            element: <AreaChart />,
          },
          {
            path: "barchart",
            element: <BarChart />,
          },
          {
            path: "bubblechart",
            element: <BubbleChart />,
          },
          {
            path: "doughnutpiechart",
            element: <DoughnutPieChart />,
          },
          {
            path: "linechart",
            element: <LineChart />,
          },
          {
            path: "mixedchart",
            element: <MixedChart />,
          },
          {
            path: "piechart",
            element: <PieChart />,
          },
          {
            path: "polarareachart",
            element: <PolarAreaChart />,
          },
          {
            path: "radarchart",
            element: <RadarChart />,
          },
          {
            path: "scatterchart",
            element: <ScatterChart />,
          },
          {
            path: "mbti",
            element: <MBTI />,
          },
          {
            path: "dashboard",
            element: <Dashboard />,
          },
        ],
      },
      {
        path: "d3js",
        element: <D3js />,
        children: [
          {
            path: "svg1",
            element: <SvgEx1 />,
          },
          {
            path: "svg2",
            element: <SvgEx2 />,
          },
          {
            path: "svg3",
            element: <SvgEx3 />,
          },
          {
            path: "axis",
            element: <Axis />,
          },
          {
            path: "color",
            element: <Color />,
          },
          {
            path: "scale",
            element: <Scale />,
          },
          {
            path: "transition",
            element: <Transition />,
          },
          {
            path: "areashape",
            element: <AreaShape />,
          },
          {
            path: "lineshape",
            element: <LineShape />,
          },
          {
            path: "pieshape",
            element: <PieShape />,
          },
          {
            path: "barshape",
            element: <BarShape />,
          },
          {
            path: "stackedbarchart",
            element: <StackedBarChart />,
          },
        ],
      },
      {
        path: "map",
        element: <Map />,
        children: [
          {
            path: "01 Map",
            element: <Map01 />,
            children: [
              { path: "MapContainer", element: <Map0101 /> },
              { path: "TileLayer", element: <Map0102 /> },
              { path: "Custom Hooks", element: <Map0103 /> },
            ],
          },
          {
            path: "02 marker",
            element: <Map02 />,
            children: [
              { path: "Marker", element: <Map0201 /> },
              { path: "Popup & Tooltip", element: <Map0202 /> },
              { path: "Custom Marker", element: <Map0203 /> },
            ],
          },
          {
            path: "03 Vector",
            element: <Map03 />,
            children: [
              { path: "Vector", element: <Map0301 /> },
              { path: "2", element: <Map0302 /> },
            ],
          },
          {
            path: "map with CSV",
            element: <Map04 />,
          },
        ],
      },
    ],
  },
]);

export default router;
