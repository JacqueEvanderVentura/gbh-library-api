import { model, Schema } from "mongoose";
import { IBook } from "./interface";
export const bookSchema = new Schema<IBook>(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
    bookPage: [
      {
        type: Schema.Types.ObjectId,
        ref: "BookPages",
      },
    ],
  },
  {
    timestamps: true,
  }
);
export const Book = model<IBook>("Books", bookSchema);
