import { Router } from "express";
import authRoute from "./access/index.js";

const rootRoute = Router();

rootRoute.use("/auth", authRoute);

export default rootRoute;
