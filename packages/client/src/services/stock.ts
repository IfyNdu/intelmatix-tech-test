import axios from "axios";
import { ChartDataServer, Stock } from "../types";

/**
* Gets all stock from the server
*/

export const getStock = async () => {
  return axios
    .get<{ stock: Stock[] }>("http://localhost:1234/api/stock");
};

/**
* Gets data for a particular product
*/

export const getChartData = async (id: string) => {
  return axios
    .get<ChartDataServer>(`http://localhost:1234/api/stock/${id}`);
};
