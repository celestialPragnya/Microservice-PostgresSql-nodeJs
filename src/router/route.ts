
import  express from "express";
const router = express.Router();
import * as  userController from '../controller/users';

router.post("/SignIn",userController.SignIn);
router.post("/SignUp",userController.SignUp);

export default router;