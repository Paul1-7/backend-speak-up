import { Router } from "express";
import { newSubscription } from "~/controllers/subscriptions.controller";
import { validateScheme } from "~/middlewares";
import { subscriptionSchema } from "~/schemas";

const routeSuscriptions = Router();

routeSuscriptions.post("/", newSubscription);

export default routeSuscriptions;
