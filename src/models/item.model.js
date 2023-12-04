import { Schema, model } from "mongoose";

const DOCUMENT_NAME = "item";
const COLLECTION_NAME = "items";

const itemSchema = new Schema(
  {
    item_name: {
      type: String,
      required: true,
    },
    item_description: {
      type: String,
    },
    item_type: {
      type: String,
      required: true,
      enum: ["main", "beverage", "other"],
    },
    item_price: {
      type: Number,
      required: true,
    },
    item_quantity: {
      type: Number,
      required: true,
    },
    // The cost to make item
    item_cost: {
      type: Number,
      default: 25000,
    },
  },
  {
    timestamps: true,
    collection: COLLECTION_NAME,
  }
);

const item = model(DOCUMENT_NAME, itemSchema);

export default item;
