import { Router } from "express";
import { stock } from "./stock/stock";

export const routes = (router: Router) => {

  router.use("/stock", stock(router));

  return router;
}