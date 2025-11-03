import mongoose from "mongoose";

export const connectDB = async () => {
  await mongoose.connect("your-mongo-url").then(() => console.log("db connected"))
}
