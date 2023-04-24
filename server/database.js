
import mongoose from "mongoose";

await mongoose.connect(
  process.env.MG_URL,
  { dbName: "portfolio" }
);

console.log(" db connected successfully");
