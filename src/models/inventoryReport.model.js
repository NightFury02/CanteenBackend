import { ObjectId } from "mongodb";
import { Schema, model } from "mongoose";

const DOCUMENT_NAME = "inventoryReport";
const COLLECTION_NAME = "inventoryReports";

const inventoryReportSchema = new Schema(
    {
        user_id: {
            type: Schema.Types.ObjectId,
            ref: "user",
        },
        time: {
            type: String,
        },
        list_item: [{
            type: Schema.Types.ObjectId,
            ref: "reportItem",
        }],
        deleted_item:[{
            type:Schema.Types.ObjectId,
            ref:"inventoryDeleteVoucher"
        }]
    },
    {
        timestamps: true,
        collection: COLLECTION_NAME,
    }
);

const inventoryReport = model(DOCUMENT_NAME, inventoryReportSchema);

export default inventoryReport;