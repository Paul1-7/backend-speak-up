import express, { Router, Application } from "express";
import routeAuth from "./auth.route";
import routePlan from "./plans.route";
import routeRoom from "./rooms.route";
import routeSuscriptions from "./subscriptions.route";
import routeUser from "./users.route";
// import fs from "fs";

// const router: Router = express.Router();

// const PATH_ROUTES: string = __dirname;

// const removeExtension = (filename: string): string => {
//   return filename.split(".").shift()!;
// };

function routerApi(app: Application): void {
  app.use("/api/v1/auth", routeAuth);
  app.use("/api/v1/plans", routePlan);
  app.use("/api/v1/rooms", routeRoom);
  app.use("/api/v1/subscription", routeSuscriptions);
  app.use("/api/v1/users", routeUser);
  // fs.readdirSync(PATH_ROUTES).filter((file: string) => {
  //   const name: string = removeExtension(file);
  //   if (name !== "index") {
  //     const routeModule = require(`./${file}`);
  //     if (typeof routeModule === "function") {
  //       router.use(`/${name}`, routeModule);
  //     }
  //   }
  // });
}

export default routerApi;
