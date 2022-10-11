const accountService = require("../service/account.service");
const { SuccessResponse, FailResponse } = require("../helpers/JSend");
module.exports = {
  getMe: async (req, res, next) => {
    const { access_token } = req.body;
    const account = await accountService.getMe(access_token || "");

    return account
      ? res.json(SuccessResponse({ ...account, password: "********" }))
      : res.json(FailResponse(null, "Auth failed"));
  },
};
