"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//var Sequelize = require('sequelize');
const sequelize_1 = require("sequelize");
//var Model = Sequelize.Model;
var sequelize = new sequelize_1.Sequelize("user_database", "postgres", "postgres", {
    host: "localhost",
    dialect: "postgres"
});
sequelize.authenticate().then(function (resStt) {
    console.log("Connection established");
})
    .catch(function (err) {
    console.log('The error is ', err);
});
//start
//var Users = UsersModel(Sequelize,sequelize,Model);
sequelize.sync({ force: true }).then(function () {
    //console.log("all tables created !")
})
    .catch(function (err) {
    console.log('The error is ', err);
});
//# sourceMappingURL=db.js.map