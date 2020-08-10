module.exports = function(Sequelize,sequelize,Model){
    class Users extends Model{

    }
    
   return Users.init({
    id : {
        type : Sequelize.INTEGER,
        primaryKey : true,
        allowNull : false,
        autoIncrement: true
    },
    name : {
        type : Sequelize.STRING,
        allowNull : false
    },
    email : {
        type : Sequelize.STRING,
        allowNull : false
    },
    password : {
        type : Sequelize.STRING,
        allowNull : false
    },
    created_at : {
        type : Sequelize.DATE
    },
    updated_at : {
        type : Sequelize.DATE
    },
    deleted_at : {
        type : Sequelize.DATE
    }
    },{
        sequelize,
        modelName : "users",
        timestamps: false,
 
    })
}