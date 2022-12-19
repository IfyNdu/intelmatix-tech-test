import React from "react";
import {
  ComposedChart,
  CartesianGrid,
  Tooltip,
} from "recharts";
import { Payload } from "recharts/types/component/DefaultLegendContent";
import { BarChartConfig, ChartConfig, ChartItem, COLOURS } from "../../types";
import { Line } from "../line/line";
import { XAxis } from "../axis/x-axis";
import { YAxis } from "../axis/y-axis";
import { Bar } from "../bar/bar";
import { TickRenderer } from "./tick-renderer";
import { LabelRenderer } from "./label-renderer";
import { Legend } from "../legend/legend";
import { BarRenderer } from "./bar-renderer";


type Props<T> = {
  barConfig: BarChartConfig;
  data: T[];
  legendData: Payload[];
  xAxisConfig: ChartConfig;
  yAxisConfig: ChartConfig;
}

export const Chart = <T,>({
  barConfig,
  data,
  legendData,
  xAxisConfig,
  yAxisConfig,
}: Props<T>) => {

  return (
    <ComposedChart
      width={1080}
      height={580}
      data={data}
      margin={{ bottom: 40 }}>
      <CartesianGrid
        strokeDasharray={"2 2"}
        vertical={false}
        stroke={COLOURS.lighterGray} />
      {XAxis({
        dataKey: xAxisConfig.key,
        label: { value: xAxisConfig.label, position: "insideBottom", offset: -36 },
        tickRenderer: TickRenderer
      })}
      {YAxis({
        label: { value: yAxisConfig.label, angle: -90, position: "insideLeft" },
        ticks: yAxisConfig.ticks
      })}
      <Tooltip />
      {Legend({ data: legendData })}
      {Bar<ChartItem>({
        barRenderer: BarRenderer,
        data,
        dataKey: barConfig.key,
        labelRenderer: LabelRenderer,
        size: barConfig.size
      })}
      {Line({ key: "demandStockPast" })}
      {Line({ key: "demandStockToday" })}
      {Line({ key: "demandStockFuture", strokeDasharray: "2 2" })}
    </ComposedChart>
  );
}
