const mongoose = require("mongoose");

const accountSchema = new mongoose.Schema(
  {
    email: String,
    password: String,
  },
  {
    timestamps: true,
  }
);
const Account = mongoose.model("Account", accountSchema);
accountSchema.method("passwordEncrypt", function () {
  this.password = this.password + "WyvernP";
});
accountSchema.method("c");
