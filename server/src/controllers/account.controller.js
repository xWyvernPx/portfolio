import accountService from "../service/account.service.js";
import { SuccessResponse, FailResponse } from "../helpers/JSend.js";
export default {
  getMe: async (req, res, next) => {
    const { access_token } = req.body;
    const account = await accountService.getMe(access_token || "");

    return account
      ? res.json(SuccessResponse({ ...account, password: "********" }))
      : res.json(FailResponse(null, "Auth failed"));
  },
};
