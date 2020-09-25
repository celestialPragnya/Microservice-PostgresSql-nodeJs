"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const env = process.env.NODE_ENV || 'development';
const CONFIG_OBJ = require('../config/config.json');
const config = CONFIG_OBJ[env];
const db = {};
let sequelize;
sequelize = new sequelize_1.Sequelize(config.database, config.username, config.password, config);
fs_1.default
    .readdirSync(__dirname)
    .filter(function (file) {
    return (file.indexOf(".") !== 0) && (file !== "index.ts") && (file !== 'index.js');
})
    .forEach(function (file) {
    const modelInstance = require(path_1.default.join(__dirname, file));
    const model = modelInstance.initialize(sequelize);
    db[model.name] = model;
});
Object.keys(db).forEach((modelName) => {
    if (db[modelName].associate) {
        db[modelName].associate(db);
    }
});
db.sequelize = sequelize;
db.Sequelize = sequelize_1.Sequelize;
module.exports = db;
exports.default = db;
//# sourceMappingURL=index.js.map