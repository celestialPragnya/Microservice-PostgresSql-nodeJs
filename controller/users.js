//var sequalizepool = require('../db');
var pool = require('../dbpool');
var bcrypt = require('bcrypt');

exports.SignIn = (req,res,next) =>{
    const requestEmail = req.body.email
    pool.query("SELECT * FROM users WHERE email=$1",[requestEmail])
    .then(resp => {
        //console.log("Compare password", bcrypt.compare(req.body.password, resp.rows[0].password));
       
        bcrypt.compare(req.body.password, resp.rows[0].password, function(err, isMatch) {
            if (err) {
              throw err
            } else if (!isMatch) {
                res.json({
                    status : 201,
                    message : "Password Doesnot match"
                })
            } else {
                res.json({
                    status : 200,
                    message : "Login Success!",
                    Data : resp.rows
                })
            }
          })
          
    })
    .catch(error => {
        res.json({
            status : 201,
            message : "Email Is Nt Present!!!"
        })
    })
};

exports.SignUp = (req,res,next) =>{
    
    var requestEmail = req.body.email;
    pool.query("SELECT * FROM users WHERE email=$1",[requestEmail])
    .then(userResult=> {
      //console.log("user result &&&&",userResult);
        if(userResult.rows.length){

            res.json({
                status : 201,
                message : "Email Id is already present"
            })

        }else{
            
            const { name,email,password} = req.body;
            const hashpwd =  bcrypt.hashSync(req.body.password, 10);
            pool.query("insert into users (name,email,password) values ($1,$2,$3)", [name,email,hashpwd], function (err, result) {
                if (err) {
                    throw new Error(err);
                }else{
                    res.json({
                        status: 200,
                        message: "Registration Successful"
                    })
                }
                
            })

        }
    })
    .catch(err => {
       
        res.json({
            status : true,
            message : err
        })

    })
};