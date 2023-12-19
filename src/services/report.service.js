import ErrorResponse from "../core/error.response.js";
import inventoryLeaveVoucher from "../models/inventoryLeaveVoucher.model.js";
import inventoryComeVoucher from '../models/inventoryComeVoucher.model.js';
import inventoryItem from "../models/inventoryItem.model.js";
import inventoryDeleteVoucher from "../models/inventoryDeleteVoucher.model.js";
import order from "../models/order.model.js"
import report from "../models/report.model.js"

import {findReportByTime, findReportByUser} from "../models/repositories/report.repo.js"
class ReportService {
    static async createOrder(Report) {

    }
    static async getAllReport() {
        return await report.find();
    }
    static async getReportDetail(Time) {
        return await findReportByTime(Time)
    }
}
export default ReportService;
