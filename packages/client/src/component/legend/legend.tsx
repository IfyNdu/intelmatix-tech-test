import React from "react";
import { Legend as ChartLegend } from "recharts";
import { HorizontalAlignmentType, Payload, VerticalAlignmentType } from "recharts/types/component/DefaultLegendContent";

type Props = {
  align?: HorizontalAlignmentType;
  data: Payload[]
  height?: number;
  iconSize?: number;
  verticalAlignment?: VerticalAlignmentType;
}

export const Legend: React.FC<Props> = ({
  align = "right",
  data,
  height = 36,
  iconSize = 14,
  verticalAlignment = "top"
}: Props) => {
  return (
    <ChartLegend
      verticalAlign={verticalAlignment}
      height={height}
      iconSize={iconSize}
      align={align}
      payload={data}
    />
  );
};
