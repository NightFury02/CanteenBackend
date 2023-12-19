import { Schema, model } from "mongoose";

const DOCUMENT_NAME = "report";
const COLLECTION_NAME = "reports";

const reportItemSchema = new Schema(
    {
      user_id:{
        type: Schema.Types.ObjectId,
        ref: "user",
        required: true,
      },
      time:{
        type: String,
        required: true,
      },
      sale_quantity:{
        type: Number,
        required: true,
      },
      loss_quantity:{
        type: Number,
        required: true,
      },
      profit:{
        type: Number,
        required: true,
      },
      loss_money:{
        type: Number,
        required: true,
      },
      inventory_list: [{
        item_id: {
          type: Schema.Types.ObjectId,
          ref: "inventoryItem",
        },
        init: {
          type: Number,
        },
        leave:{
          type: Number,
        },
        come:{
          type: Number,
        },
        quantity: {
          type: Schema.Types.Number,
          ref: "inventoryItem"
        },
      }],
      delete_list:[{
        type: Schema.Types.ObjectId,
        ref: "inventoryDeleteVouchers"
      }]
    },  
    {
      timestamps: true,
      collection: COLLECTION_NAME,
    }
  );
  const report = model(DOCUMENT_NAME, reportItemSchema);

export default report;