import { Router } from "express";
import { HttpStatusCode } from "intel-types"

const calculateDay = (offset: number) => {

  const date = new Date(new Date().setDate(new Date().getDate() + offset));

  const year = new Intl.DateTimeFormat("en", { year: "numeric" }).format(date);
  const month = new Intl.DateTimeFormat("en", { month: "2-digit" }).format(date);
  const day = new Intl.DateTimeFormat("en", { day: "2-digit" }).format(date);

  return `${year}-${month}-${day}`;
};

const barConfig = {
  key: "currentStock",
  size: 70,
};

const legendConfig = [
  { value: "Actual Stock", type: "rect", color: "#818589" },
  { value: "Projected Stock", type: "rect", color: "#D3D3D3" },
  { value: "Demand", type: "plainline", color: "#FFA500", payload: { strokeDasharray: "50 50" } },
];

const yAxisConfig = {
  label: "KG",
  ticks: [0, 10, 20, 30, 40, 50, 60]
};

const xAxisConfig = {
  key: "date",
  label: "Days",
};

const products = {
  1234: {
    barConfig,
    legendConfig,
    stockLevel: [{
      currentStock: 52,
      date: calculateDay(-3),
      demandStock: 20
    }, {
      currentStock: 43,
      date: calculateDay(-2),
      demandStock: 16
    }, {
      currentStock: 35,
      date: calculateDay(-1),
      demandStock: 11
    }, {
      currentStock: 25,
      date: calculateDay(0),
      demandStock: 9
    }, {
      currentStock: 19,
      date: calculateDay(1),
      demandStock: 12
    }, {
      currentStock: 17,
      date: calculateDay(2),
      demandStock: 9
    }, {
      currentStock: 6,
      date: calculateDay(3),
      demandStock: 4
    }, {
      currentStock: 52,
      date: calculateDay(4),
      demandStock: 19
    }, {
      currentStock: 33,
      date: calculateDay(5),
      demandStock: 12
    }, {
      currentStock: 25,
      date: calculateDay(6),
      demandStock: 19
    }, {
      currentStock: 16,
      date: calculateDay(7),
      demandStock: 11
    }, {
      currentStock: 12,
      date: calculateDay(8),
      demandStock: 7
    }, {
      currentStock: 6,
      date: calculateDay(9),
      demandStock: 5
    }, {
      currentStock: 4,
      date: calculateDay(10),
      demandStock: 2
    }],
    xAxisConfig,
    yAxisConfig,
    name: "Pickle",
    id: 1234,
    icon: "https://img.icons8.com/dotty/80/null/cucumber.png",
    currentStock: 60,
    maximumStock: 150
  }
};

export const stock = (router: Router) => {

  router.get("/stock", (_, res) => {

    const stock = [];
    for (const product in products) {
      const { currentStock, icon, id, maximumStock, name } = products[product];

      stock.push({
        currentStock,
        icon,
        id,
        maximumStock,
        name
      });
    }

    res.status(HttpStatusCode.OK).json({ stock });
  });

  router.get("/stock/:id", (req, res) => {

    const {
      barConfig,
      legendConfig,
      stockLevel,
      xAxisConfig,
      yAxisConfig
    } = products[req.params.id];
    res.status(HttpStatusCode.OK).json({ barConfig, legendConfig, stockLevel, xAxisConfig, yAxisConfig });
  });

  return router;
}
