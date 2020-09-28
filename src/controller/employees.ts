import {Employee, UserRequestAttributes} from '../models/employee';
import { Request, Response }  from "express";
import models from '../models';

export const login  =  async (req:Request , res:Response , next:any) => {
    try {
        const user = await models.Employee.findOne({
            where: {
                email: req.body.email
            }
        });
        if (!user) {
            return res.status(200).json({ 'message' :"User not present" });
        }
        if (!await user.comparePassword(req.body.password)) {
            return res.status(200).json({ 'message' :"password doesnot match" });
        }
        return res.status(200).json({ 'message' :"Login Success" });
    } catch (error) {
        return res.status(200).json({ 'message-Error' : error});
    }
};

export const register = async (req:Request,res:Response,next:any) =>{ 
    try {
          const user = await models.Employee.findOne({
            where: {
                email: req.body.email
            }
          });
          if (user) {
            return res.status(200).json({ 'message' :"User present" });
          }else{
            const userDetails: UserRequestAttributes = req.body;
            const newUser: Employee = await models.Employee.create(userDetails);
            return res.status(200).json({ 'message' :"SignUp Success" });
          } 
      } catch (error) {
        return res.status(200).json({ 'message-Error' : error});
      } 
};