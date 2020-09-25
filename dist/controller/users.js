"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SignUp = exports.SignIn = void 0;
const models_1 = __importDefault(require("../models"));
// User.findByLogin = async login => {
//     let user = await User.findOne({
//       where: { username: login },
//     });
exports.SignIn = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    // console.log("print user@@@@@@@@@@@@ ",req.body.email);
    //console.log("print password%%%%%%%%%%%% ",req.body.password);
    try {
        // console.log("print model@@@@@@@@@@@@ ",models);
        const user = yield models_1.default.User.findOne({
            where: {
                email: req.body.email
            }
        });
        if (!user) {
            return res.status(200).json({ 'message': "User not present" });
            // console.log("User not present")
            //return done(null, false, { message: 'Incorrect username' });
        }
        if (!(yield user.comparePassword(req.body.password))) {
            return res.status(200).json({ 'message': "password doesnot match" });
            // console.log("password doesnot match")
            // return done(null, false, { message: "Incorrect password" });
        }
        //console.log("login success ");
        return res.status(200).json({ 'message': "Login Success" });
        //return (user);
    }
    catch (error) {
        console.log("print error ***** ", error);
        return res.status(200).json({ 'message-Error': error });
    }
});
// export const SignIn = (req:any,res:any,next:any) =>{
//     console.log("Print inside block");
//     const requestEmail = req.body.email
//     console.log("Print request email",requestEmail);
//     pool.query("SELECT * FROM users WHERE email=$1",[requestEmail])
//     .then(resp => {  
//         console.log("Print inside then block");     
//         bcrypt.compare(req.body.password, resp.rows[0].password, function(err:any, isMatch:Boolean) {
//             if (err) {
//               throw err
//             } else if (!isMatch) {
//                 res.json({
//                     status : 201,
//                     message : "Password Doesnot match"
//                 })
//             } else {
//                 res.json({
//                     status : 200,
//                     message : "Login Success!",
//                     Data : resp.rows
//                 })
//             }
//           })
//     })
//     .catch(error => {
//         res.json({
//             status : 201,
//             message : "Email Is Nt Present!!!"
//         })
//     })
// };
exports.SignUp = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userDetails = req.body;
        const newUser = yield models_1.default.User.create(userDetails);
        return res.status(200).json({ 'message': "SignUp Success" });
    }
    catch (error) {
        console.log("print error ***** ", error);
        return res.status(200).json({ 'message-Error': error });
    }
    //     console.log("Print inside block");
    //     var requestEmail = req.body.email;
    //     console.log("Print email ***",requestEmail);
    //     pool.query("SELECT * FROM users WHERE email=$1",[requestEmail])
    //     //pool.query("SELECT * FROM users WHERE email=$1",[requestEmail])
    //     .then(userResult=> {
    //         console.log("Inside then");
    //         if(userResult.rows.length){
    //             res.json({
    //                 status : 201,
    //                 message : "Email Id is already present"
    //             })
    //         }else{
    //             const { name,email,password} = req.body;
    //             const hashpwd =  bcrypt.hashSync(req.body.password, 10);
    //             pool.query("insert into users (name,email,password) values ($1,$2,$3)", [name,email,hashpwd], function (err:any, result:any) {
    //                 if (err) {
    //                     throw new Error(err);
    //                 }else{
    //                     res.json({
    //                         status: 200,
    //                         message: "Registration Successful"
    //                     })
    //                 }
    //             })
    //         }
    //     })
    //     .catch(err => {
    //         console.log("Inside catch");
    //         res.json({
    //             status : true,
    //             message : err
    //         })
    //     })
});
//# sourceMappingURL=users.js.map