import { Schema, model } from "mongoose";

const DOCUMENT_NAME = "inventoryLeaveVoucher";
const COLLECTION_NAME = "inventoryLeaveVouchers";

const inventoryLeaveVoucherSchema = new Schema(
    {
        user_id: {
            type: Schema.Types.ObjectId,
            ref: "user",
            required: true,
        },
        inventoryItem:{
            type: Schema.Types.ObjectId,
            ref: "inventoryItem",
            required: true,
        },
        quantity: {
            type: Number,
            required: true,
        },
        time:{
            type: String,
        }
    },
    {
        timestamps: true,
        collection: COLLECTION_NAME,
    }
);

const inventoryLeaveVoucher = model(DOCUMENT_NAME, inventoryLeaveVoucherSchema);

export default inventoryLeaveVoucher;
