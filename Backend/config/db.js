import mongoose from "mongoose";

export const connectDB = async () => {
  await mongoose.connect("mongodb+srv://aaliyandev:558849623845@cluster0.penkudb.mongodb.net/food-del").then(() => console.log("db connected"))
}