import React from "react";
import { Bar as ChartBar, LegendType } from "recharts";
import { BarChartLabelRenderer } from "../../types";

type Props<T> = {
  background?: `#${string}`;
  children?: React.ReactNode;
  data?: any[];
  dataKey: string;
  barRenderer?: (p: T) => React.ReactElement;
  labelRenderer?: BarChartLabelRenderer;
  legendType?: LegendType;
  size?: number;
}

export const Bar = <T extends Record<string, unknown>,>({
  background = "#413ea0",
  barRenderer,
  children,
  data = [],
  dataKey,
  legendType,
  labelRenderer,
  size = 70,
}: Props<T>) => {

  const getRenderer = () => {
    if (children) {
      return children
    }

    return barRenderer ? data.map(barRenderer) : null
  }
  return (
    <ChartBar
      data={data}
      dataKey={dataKey}
      barSize={size}
      legendType={legendType}
      fill={background}
      label={labelRenderer}
    >
      {getRenderer()}
    </ChartBar>
  );
};
