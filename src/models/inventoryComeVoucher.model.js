import { Schema, model } from "mongoose";

const DOCUMENT_NAME = "inventoryComeVoucher";
const COLLECTION_NAME = "inventoryComeVouchers";

const inventoryComeVoucherSchema = new Schema(
    {
        user_id: {
            type: Schema.Types.ObjectId,
            ref: "user",
            required: true,
        },
        time: {
            type: String,
            required: true,
        },
        come_list: [
            {
                itemName: {
                    type: String,
                    required: true,
                },
                quantity: {
                    type: Number,
                    required: true,
                },
                exp: {
                    type: String,
                    required: true,
                },
                cost: {
                    type: Number,
                    required: true,
                },
            }
        ],
    },
    {
        timestamps: true,
        collection: COLLECTION_NAME,
    }
);

const inventoryComeVoucher = model(DOCUMENT_NAME, inventoryComeVoucherSchema);

export default inventoryComeVoucher;
