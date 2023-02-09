import { model, Schema } from "mongoose";
import { IBookPage } from "./interface";

const bookPageSchema = new Schema<IBookPage>(
  {
    text: {
      type: String,
      require: true,
			
    },
    page: {
      type: Number,
      require: true,
    },
    book: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: "Books",
    },
  },
  {
    timestamps: true,
  }
);

export const BookPage = model<IBookPage>("BookPages", bookPageSchema);
