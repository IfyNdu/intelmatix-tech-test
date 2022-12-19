import { Payload } from "recharts/types/component/DefaultLegendContent";
import { StockLevel } from "./stock";

export type BarChartLabelRenderProps = {
  height: number;
  values: string;
  width: number;
  x: number;
  y: number;
};
export type BarChartLabelRenderer = (props: BarChartLabelRenderProps) => React.ReactElement<SVGElement>;
export type AxisTickRendererProps = {
  payload: { value: string };
  x: number;
  y: number;
};
export type AxisTickRenderer = (props: AxisTickRendererProps) => React.ReactElement<SVGElement>;

export type ChartItem = Omit<StockLevel, "demandStock"> & {
  demandStockFuture?: number;
  demandStockPast?: number;
  demandStockToday?: number;
  fill: `#${string}`;
};

export type BarChartConfig = {
  key: string;
  size: number;
}

export type ChartConfig = {
  label: string;
  key?: string;
  ticks?: number[];
};

export type ChartDataServer = {
  barConfig: BarChartConfig;
  legendConfig: Payload[];
  stockLevel: StockLevel[],
  yAxisConfig: ChartConfig;
  xAxisConfig: ChartConfig;
}

export type ChartUI = Pick<ChartDataServer, "xAxisConfig" | "yAxisConfig" | "legendConfig" | "barConfig"> & {
  stockLevel: ChartItem[];
};
