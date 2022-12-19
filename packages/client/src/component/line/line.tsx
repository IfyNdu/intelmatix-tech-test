import React from "react";
import { Line as ChartLine } from "recharts";
import { CurveType } from "recharts/types/shape/Curve";

type Props = {
  dot?: boolean;
  key: string;
  stroke?: `#${string}`;
  strokeDasharray?: `${number} ${number}`;
  strokeWidth?: number;
  type?: CurveType;
}

export const Line = ({
  dot = false,
  key,
  stroke = "#ff7300",
  strokeDasharray,
  strokeWidth = 1,
  type = "stepAfter",
}: Props) => {

  return (
    <ChartLine
      dot={dot}
      dataKey={key}
      stroke={stroke}
      strokeDasharray={strokeDasharray}
      strokeWidth={strokeWidth}
      type={type}
    />
  );
};
