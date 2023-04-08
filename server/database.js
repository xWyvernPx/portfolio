
import mongoose from "mongoose";

await mongoose.connect(
  "mongodb+srv://sa:WyvernP2506@portfolio.8r13bx1.mongodb.net/portfolio?retryWrites=true&w=majority",
  { dbName: "portfolio" }
);

console.log(" db connected successfully");
