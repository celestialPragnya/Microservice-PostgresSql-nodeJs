
import  express from "express";
const router = express.Router();
import * as  userController from '../controller/users';
import * as  employeeController from '../controller/employees';

router.post("/SignIn",userController.SignIn);
router.post("/SignUp",userController.SignUp);
router.post("/logIn",employeeController.login);
router.post("/register",employeeController.register);

export default router;