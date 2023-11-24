import { model, Schema } from "mongoose";

const DOCUMENT_NAME = "user";
const COLLECTION_NAME = "users";

const userSchema = new Schema(
  {
    email: {
      type: String,
      trim: true,
      unique: true,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      enum: ["admin", "user", "employee"],
      default: "user",
    },
    attributes: {
      type: Schema.Types.Mixed,
    },
  },
  {
    timestamps: true,
    collection: COLLECTION_NAME,
  }
);

const User = model(DOCUMENT_NAME, userSchema);

export default User;
