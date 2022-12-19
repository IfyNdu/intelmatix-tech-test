import { Cell } from "recharts";
import { ChartItem } from "../../types";


export const BarRenderer = ({ fill, date }: ChartItem) => {

  return (
    <Cell
      fill={fill}
      fillOpacity={0.8}
      key={`cell-${date}`}
      values={date}
    />
  )
};
