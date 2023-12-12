import { Router } from "express";
import inventoryActivityController from "../../controllers/inventoryAct.controller.js";
import { asyncHandler } from "../../helpers/asyncHandler.js";
import { checkRole } from "../../middlewares/checkRole.middleware.js";
import { authentication } from "../../auth/authUtils.js";

const inventoryActRoute = Router();

inventoryActRoute.use(authentication);

inventoryActRoute.post(
  "/come",  // Use a distinct path for come voucher
  checkRole(["staff"]),
  asyncHandler(inventoryActivityController.createComeVoucher),
);

inventoryActRoute.post(
  "/delete",  // Use a distinct path for delete voucher
  checkRole(["staff"]),
  asyncHandler(inventoryActivityController.createDeleteVoucher),
);

inventoryActRoute.post(
  "/leave",  // Use a distinct path for leave voucher
  checkRole(["staff"]),
  asyncHandler(inventoryActivityController.createLeaveVoucher),
);

export default inventoryActRoute;
