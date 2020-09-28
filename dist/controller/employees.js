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
exports.register = exports.login = void 0;
const models_1 = __importDefault(require("../models"));
exports.login = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield models_1.default.Employee.findOne({
            where: {
                email: req.body.email
            }
        });
        if (!user) {
            return res.status(200).json({ 'message': "User not present" });
        }
        if (!(yield user.comparePassword(req.body.password))) {
            return res.status(200).json({ 'message': "password doesnot match" });
        }
        return res.status(200).json({ 'message': "Login Success" });
    }
    catch (error) {
        return res.status(200).json({ 'message-Error': error });
    }
});
exports.register = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield models_1.default.Employee.findOne({
            where: {
                email: req.body.email
            }
        });
        if (user) {
            return res.status(200).json({ 'message': "User present" });
        }
        else {
            const userDetails = req.body;
            const newUser = yield models_1.default.Employee.create(userDetails);
            return res.status(200).json({ 'message': "SignUp Success" });
        }
    }
    catch (error) {
        return res.status(200).json({ 'message-Error': error });
    }
});
//# sourceMappingURL=employees.js.map