const jwt = require("jsonwebtoken");
const Account = require("../models/account.model");
export const accountService = {
  getMe: (token) => {
    const user = jwt.verify(token, process.env.SK);
    const account = Account.find({ username: user?.username });
    return account ? account : null;
  },
  auth: async (user, pass) => {
    const account = await Account.find({ username: user });
    //TODO  : encrypt
    return account;
  },
};
