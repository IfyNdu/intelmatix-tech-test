import { useState } from "react";
import { useQuery } from "react-query";
import { SelectChangeEvent } from "@mui/material/Select";
import * as Api from "../services";
import { ChartUI, Stock } from "../types";
import { chartDataTransformer } from "../utils";

/**
* Helper hook for managing stock requesting stock information from the server.
*/

export const useChartData = () => {
  const [selectedProduct, setSelectedProduct] = useState<Stock[]>([]);
  const [chartData, setChartData] = useState<ChartUI>();

  const { data, isLoading } = useQuery({
    queryKey: ["stock"],
    queryFn: async () => {
      const { data } = await Api.stock.getStock();
      return data;
    }
  });

  const handleChange = (event: SelectChangeEvent) => {
    const { value } = event.target;
    const product = data?.stock.find(({ id }) => id === parseInt(value));

    if (product) {
      setSelectedProduct([product]);

      (async () => {
        const { data } = await Api.stock.getChartData(value);
        setChartData(chartDataTransformer(data));
      })();
    }
  };

  return {
    chartData,
    handleChange,
    isLoading,
    selectedProduct,
    stock: data?.stock,
  };
};
