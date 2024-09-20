import { createBrowserRouter } from "react-router-dom";
import Canvas from "./pages/canvas";
import App from "./App";
import ChartJs from "./pages/chartjs";
import D3js from "./pages/d3js";
import Map from "./pages/map";
import AreaChart from "./pages/chartjs/01_AreaChart";
import BarChart from "./pages/chartjs/02_BarChart";
import BubbleChart from "./pages/chartjs/03_BubbleChart";
import LineChart from "./pages/chartjs/05_LineChart";
import DoughnutPieChart from "./pages/chartjs/04_DoughnutChart";
import MBTI from "./pages/chartjs/06_MBTI";
import MixedChart from "./pages/chartjs/07_MixedChart";
import Olympic from "./pages/chartjs/08_Olympic";
import PieChart from "./pages/chartjs/09_PieChart";
import PolarAreaChart from "./pages/chartjs/10_PolarAreaChart";
import RadarChart from "./pages/chartjs/11_RadarChart";
import ScatterChart from "./pages/chartjs/12_ScatterChart";
import Map01 from "./pages/map/01_svg_map";
import Map0101 from "./pages/map/01_svg_map/01_map_container";
import Map0102 from "./pages/map/01_svg_map/02_tile_layer";
import Map0103 from "./pages/map/01_svg_map/03_custom_hooks";
import Map0201 from "./pages/map/02_svg_marker/01_marker";
import Map0202 from "./pages/map/02_svg_marker/02_popup_tooltip";
import Map0203 from "./pages/map/02_svg_marker/03_custom_marker";
import Map0301 from "./pages/map/03_svg_vector/01_vector";
import Map0302 from "./pages/map/03_svg_vector/02";
import Map03 from "./pages/map/03_svg_vector";
import Map02 from "./pages/map/02_svg_marker";
import Map04 from "./pages/map/04_map_with_csv";
import FillRect from './pages/canvas/01_FillRect';
import BeginPath from './pages/canvas/02_BeginPath';
import Triangle from './pages/canvas/03_Triangle';
import Sin from './pages/canvas/04_Sin';
import SunriseSunset from './pages/canvas/05_SunriseSunset';
import Svg1 from "./pages/d3js/01_svg1";
import Svg2 from "./pages/d3js/02_svg2/index.jsx";
import Svg3 from "./pages/d3js/03_svg3/index.jsx";
import Axis from "./pages/d3js/05_axis/index.jsx";
import Color from "./pages/d3js/07_color/index.jsx";
import Scale from "./pages/d3js/06_scale/index.jsx";
import Transition from "./pages/d3js/08_transition/index.jsx";
import AreaShape from "./pages/d3js/11_area_shape/index.jsx";
import LineShape from "./pages/d3js/09_line_shape/index.jsx";
import PieShape from "./pages/d3js/12_pie_shape/index.jsx";
import BarShape from "./pages/d3js/10_bar_shape/index.jsx";
import Selection from "./pages/d3js/04_selection/index.jsx";
import ActualEx1 from "./pages/d3js/13_actual_ex/index.jsx";


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: 'canvas',
        element: <Canvas />,
        children: [
          {
            path: 'FillRect',
            element: <FillRect />,
          },
          {
            path: 'BeginPath',
            element: <BeginPath />,
          },
          {
            path: 'Triangle',
            element: <Triangle />,
          },
          {
            path: 'Sin',
            element: <Sin />,
          },
          {
            path: 'Sunrise_Sunset',
            element: <SunriseSunset />,
          },
        ],
      },
      {
        path: 'chartjs',
        element: <ChartJs />,
        children: [
          {
            path: 'areachart',
            element: <AreaChart />,
          },
          {
            path: 'barchart',
            element: <BarChart />,
          },
          {
            path: 'bubblechart',
            element: <BubbleChart />,
          },
          {
            path: 'doughnutpiechart',
            element: <DoughnutPieChart />,
          },
          {
            path: 'linechart',
            element: <LineChart />,
          },
          {
            path: 'mbti',
            element: <MBTI />,
          },
          {
            path: 'mixedchart',
            element: <MixedChart />,
          },
          {
            path: 'olympic',
            element: <Olympic />,
          },
          {
            path: 'piechart',
            element: <PieChart />,
          },
          {
            path: 'polarareachart',
            element: <PolarAreaChart />,
          },
          {
            path: 'radarchart',
            element: <RadarChart />,
          },
          {
            path: 'scatterchart',
            element: <ScatterChart />,
          },
        ],
      },
      {
        path: 'd3js',
        element: <D3js />,
        children: [
          {
            path: 'svg1',
            element: <Svg1/>
          },
          {
            path: 'svg2',
            element: <Svg2/>
          },
          {
            path: 'svg3',
            element: <Svg3/>
          },
          {
            path: 'selection',
            element: <Selection/>
          },
          {
            path: 'axis',
            element: <Axis/>
          },
          {
            path: 'scale',
            element: <Scale/>
          },
          {
            path: 'color',
            element: <Color/>
          },
          {
            path: 'transition',
            element: <Transition/>
          },
          {
            path:'lineshape',
            element: <LineShape/>
          },
          {
            path: 'barshape',
            element: <BarShape/>
          },
          {
            path: 'areashape',
            element: <AreaShape/>
          },

          {
            path: 'pieshape',
            element: <PieShape/>
          },
          {
            path: 'actual-ex1',
            element: <ActualEx1/>
          },
        ],
      },
      {
        path: 'map',
        element: <Map />,
        children: [
          {
            path: "01_svg1 Map",
            element: <Map01 />,
            children: [
              { path: "MapContainer", element: <Map0101 /> },
              { path: "TileLayer", element: <Map0102 /> },
              { path: "Custom Hooks", element: <Map0103 /> },
            ],
          },
          {
            path: "02_svg2 marker",
            element: <Map02 />,
            children: [
              { path: "Marker", element: <Map0201 /> },
              { path: "Popup & Tooltip", element: <Map0202 /> },
              { path: "Custom Marker", element: <Map0203 /> },
            ],
          },
          {
            path: "03_svg3 Vector",
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
