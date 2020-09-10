import pool from '../dbpool';
import bcrypt from 'bcrypt';

export const SignIn = (req:any,res:any,next:any) =>{
    const requestEmail = req.body.email
    pool.query("SELECT * FROM users WHERE email=$1",[requestEmail])
    .then(resp => {       
        bcrypt.compare(req.body.password, resp.rows[0].password, function(err:any, isMatch:Boolean) {
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

export const SignUp = (req:any,res:any,next:any) =>{    
    var requestEmail = req.body.email;
    pool.query("SELECT * FROM users WHERE email=$1",[requestEmail])
    .then(userResult=> {
        if(userResult.rows.length){
            res.json({
                status : 201,
                message : "Email Id is already present"
            })
        }else{
            
            const { name,email,password} = req.body;
            const hashpwd =  bcrypt.hashSync(req.body.password, 10);
            pool.query("insert into users (name,email,password) values ($1,$2,$3)", [name,email,hashpwd], function (err:any, result:any) {
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