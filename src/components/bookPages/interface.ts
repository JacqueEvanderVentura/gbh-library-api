import { Types } from "mongoose";

interface IText {
	type: String,
	require: boolean
}

export interface IBookPage {
  text: IText;
  page: number;
  book: Types.ObjectId;
}