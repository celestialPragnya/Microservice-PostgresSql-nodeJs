var Sequelize = require('sequelize');
var Model = Sequelize.Model;
var sequelize = new Sequelize("user_database","postgres","postgres",{
    host : "localhost",
    dialect : "postgres"
})
sequelize.authenticate().then(function(resStt){
console.log("Connection established")
})
.catch(function(err){
    console.log('The error is ',err);
})

//start
var UsersModel = require('./models/user.model');

var Users = UsersModel(Sequelize,sequelize,Model);

sequelize.sync({force : true}).then(function(){
//console.log("all tables created !")
})
.catch(function(err){
    console.log('The error is ',err);
})