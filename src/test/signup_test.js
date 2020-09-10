const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../controller/users');
//const bcrypt = require('bcrypt');
let should = chai.should();
let expect = chai.expect;
var ServerAddr;
const app = require('../app');

chai.use(chaiHttp);
var user;

describe('SignUp API', () => {

    before(function () {
        ServerAddr = 'http://localhost:5050/';
        user = { name: 'pragnya' , email: 'cseppdas21@gmail.com', password: 'pinky'}
      
      })
    
    after(function () {
     console.log("SignUp Test")
    })

    /* Test the SignUp api */
    describe("POST /SignUp", () => {

        it("Registration Successful", function (done) {
            chai.request(ServerAddr)
              .post('SignUp').send(user)
              .end((err, res) => {
                if (err) {
                 console.log("Print error ", err)
                 done(err)
                } else {
                  //res.body.status.should.equal(200)
                  res.body.message.should.equal('Registration Successful')
                  done()
                }
              })
        })

        it("Email Id is already present", function (done) {
          chai.request(ServerAddr)
            .post('SignUp').send(user)
            .end((err, res) => {
              if (err) {
               console.log("Print error ", err)
               done(err)
              } else {
                //res.body.status.should.equal(201)
                res.body.message.should.equal('Email Id is already present')
                done()
              }
            })
        })


    });


});