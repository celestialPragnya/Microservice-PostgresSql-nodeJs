'use strict';
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.initialize = exports.Employee = void 0;
const sequelize_1 = require("sequelize");
const password_1 = require("../utils/password");
;
class Employee extends sequelize_1.Model {
    comparePassword(password) {
        return password_1.comparePasswords(password, this.password);
    }
    ;
    // Model associations.
    static associate(models) {
        //User.hasOne(models.UserSocialMediaProfiles)
    }
    ;
}
exports.Employee = Employee;
;
exports.initialize = (sequelize) => {
    Employee.init({
        id: {
            type: sequelize_1.DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: sequelize_1.DataTypes.STRING,
        email: sequelize_1.DataTypes.STRING,
        password: sequelize_1.DataTypes.STRING,
        created_at: sequelize_1.DataTypes.DATE,
        updated_at: sequelize_1.DataTypes.DATE
    }, {
        sequelize,
        modelName: 'Employee',
        underscored: true,
        hooks: {
            beforeCreate: (user, options) => __awaiter(void 0, void 0, void 0, function* () {
                if (user.password) {
                    const hashedPassword = yield password_1.hashPassword(user.password);
                    user.password = hashedPassword;
                }
            })
        }
    });
    return Employee;
};
exports.default = exports.initialize;
//# sourceMappingURL=employee.js.map