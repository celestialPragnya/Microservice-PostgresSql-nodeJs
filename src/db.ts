//var Sequelize = require('sequelize');
import {Sequelize,DataTypes} from 'sequelize';
import * as UsersModel from './models/user.model';
//var Model = Sequelize.Model;

var sequelize = new Sequelize("user_database","postgres","postgres",{
    host : "localhost",
    dialect : "postgres"
})
sequelize.authenticate().then(function(resStt:any){
console.log("Connection established")
})
.catch(function(err:any){
    console.log('The error is ',err);
})

//start


//var Users = UsersModel(Sequelize,sequelize,Model);

sequelize.sync({force : true}).then(function(){
//console.log("all tables created !")
})
.catch(function(err:any){
    console.log('The error is ',err);
})