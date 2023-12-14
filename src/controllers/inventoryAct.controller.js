import SuccessResponse from "../core/success.response.js";
import inventoryActivityService from "../services/inventoryActivity.service.js";

class inventoryActivityController{
    static async createComeVoucher(req, res){
        const data = await inventoryActivityService.createComeVoucher(req.body);
        new SuccessResponse({
            message: "Created Come Voucher successfully!",
            data: data,
          }).send(res);
    }
    static async createLeaveVoucher(req, res){
        const data = await inventoryActivityService.createLeaveVoucher(req.body);
        new SuccessResponse({
            message: "Created Come Voucher successfully!",
            data: data,
          }).send(res);
    }
    static async createDeleteVoucher(req, res){
        const data = await inventoryActivityService.createDeleteVoucher(req.body);
        new SuccessResponse({
            message: "Created Come Voucher successfully!",
            data: data,
          }).send(res);
    }
}
export default inventoryActivityController;