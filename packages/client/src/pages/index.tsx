import { Chart, Header } from "../component";
import { useChartData } from "../hooks";

import styles from "../../styles/home.module.scss";


export default function Home() {
  const {
    chartData,
    handleChange,
    isLoading,
    stock,
    selectedProduct,
  } = useChartData();

  if (isLoading) return "Loading...";

  return (
    <main className={styles.root}>
      <Header
        onChange={handleChange}
        selectedProduct={selectedProduct}
        stock={stock}
      />
      {chartData?.stockLevel && (
        <div className={styles.chart}>
          <Chart
            barConfig={chartData.barConfig}
            legendData={chartData.legendConfig}
            xAxisConfig={chartData.xAxisConfig}
            yAxisConfig={chartData.yAxisConfig}
            data={chartData.stockLevel}
          />
        </div>
      )}
    </main>
  );
};
