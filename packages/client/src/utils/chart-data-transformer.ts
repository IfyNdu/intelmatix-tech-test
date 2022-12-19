import { dateUtils } from "../utils";
import { ChartDataServer, ChartUI } from "../types";
import { getFillColour } from "./get-fill-colour";

/**
* Transforms server data into a format that can be consumed by the UI
*/

export const chartDataTransformer = ({
  barConfig,
  legendConfig,
  stockLevel,
  xAxisConfig,
  yAxisConfig
}: ChartDataServer): ChartUI => {

  return {
    barConfig,
    legendConfig,
    stockLevel: stockLevel.map(({ demandStock, date, ...rest }) => {
      return {
        ...rest,
        ...dateUtils.isInThePast(date)
          ? { demandStockPast: demandStock }
          : { demandStockFuture: demandStock },
        ...dateUtils.isInThePast(date) || dateUtils.isToday(date) ? { demandStockToday: demandStock } : {},
        date,
        fill: getFillColour(date),
      }
    }),
    xAxisConfig,
    yAxisConfig
  }
};
