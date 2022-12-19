import React from "react";
import { YAxis as ChartYAxis } from "recharts";
import { BaseAxis } from "./types";

type Props = BaseAxis & {
  ticks?: number[];
}

export const YAxis: React.FC<Props> = ({
  label,
  line = false,
  tickLine = false,
  ticks = []
}: Props) => {
  return (
    <ChartYAxis
      axisLine={line}
      tickLine={tickLine}
      label={label}
      ticks={ticks}
    />
  );
};
