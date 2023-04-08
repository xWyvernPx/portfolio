import { Router } from "express";
import { getMe } from "../../controllers/account.controller.js";

const AccountRouter = Router();
AccountRouter.route("/auth").get(getMe);

export default AccountRouter;
