import { Router } from "express";
import { getPlans, getPlansById } from "~/controllers/plans.controller";

const routePlan = Router();

routePlan.get("/", getPlans);
routePlan.get("/:id", getPlansById);

export default routePlan;
