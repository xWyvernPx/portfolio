const AccountRouter = require("express").Router();
const { getMe } = require("../../controllers/account.controller");
AccountRouter.route("/auth").get(getMe);

module.exports = AccountRouter;
