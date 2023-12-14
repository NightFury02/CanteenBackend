import { Schema, model } from "mongoose";

const DOCUMENT_NAME = "reportItem";
const COLLECTION_NAME = "reportItems";

const reportItemSchema = new Schema(
    {
      user_id:{
        type: Schema.Types.ObjectId,
        ref: "user"
      },
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
    },
    {
      timestamps: true,
      collection: COLLECTION_NAME,
    }
  );
  