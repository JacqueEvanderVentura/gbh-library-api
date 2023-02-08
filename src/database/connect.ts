import mongoose from "mongoose";

export const db = async () => {
  try {
    mongoose.set("strictQuery", false);
    mongoose.connect("mongodb://localhost:27017/library");
    console.log("MongoDB Connected");
  } catch (error) {
    console.error(error);
  }
};

db();
