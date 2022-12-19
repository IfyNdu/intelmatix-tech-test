import React from "react";
import { XAxis as ChartXAxis } from "recharts";
import { BaseAxis } from "./types";
import { AxisTickRenderer } from "../../types";

type Props = BaseAxis & {
  tickRenderer: AxisTickRenderer;
  ticks?: number[];
};

export const XAxis: React.FC<Props> = ({
  dataKey,
  label,
  line = false,
  tickLine = false,
  tickRenderer,
  ticks,
}: Props) => {
  return (
    <ChartXAxis
      axisLine={line}
      dataKey={dataKey}
      tickLine={tickLine}
      label={label}
      tick={tickRenderer}
      ticks={ticks}
    />
  );
};
