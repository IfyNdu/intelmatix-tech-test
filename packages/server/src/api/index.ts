import express, { Router } from "express";
import { routes } from "./routes";

const app = express(),
  router = Router();
const PORT = process.env.APP_PORT;
const whiteListedDomains = ["http://localhost:2345"];

export const Api = {

  init: () => {

    app.use((_, res, next) => {
      res.set("Access-Control-Allow-Origin", whiteListedDomains);
      res.set("Access-Control-Allow-Method", "GET");
      next();
    });
    app.use("/api", routes(router));

    app.listen(PORT, () => {
      console.info(`server is listening on ${PORT}`);
    });
  }
}