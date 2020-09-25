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

describe('SignIn API', () => {

    before(function () {
        ServerAddr = 'http://localhost:5050/';
        user = { name: 'pragnya' , email: 'cseppdas21@gmail.com', password: 'pinky'}
      
      })
    
    after(function () {
     console.log("Login started ")
    })

    /* Test the signin api */
    describe("POST /SignIn", () => {

        it("Login Success!", function (done) {
            chai.request(ServerAddr)
              .post('SignIn').send(user)
              .end((err, res) => {
                if (err) {
                 console.log("Print error ", err)
                 done(err)
                } else {
                  res.body.status.should.equal(200)
                  res.body.message.should.equal('Login Success!')
                  done()
                }
              })
        })

        it("Email Is Nt Present!!!", function (done) {
          chai.request(ServerAddr)
            .post('SignIn').send(user)
            .end((err, res) => {
              if (err) {
               console.log("Print error ", err)
               done(err)
              } else {
                res.body.status.should.equal(201)
                res.body.message.should.equal('Email Is Nt Present!!!')
                done()
              }
            })
        })
        it("Password Doesnot match", function (done) {
          chai.request(ServerAddr)
            .post('SignIn').send(user)
            .end((err, res) => {
              if (err) {
               console.log("Print error ", err)
               done(err)
              } else {
                res.body.status.should.equal(201)
                res.body.message.should.equal('Password Doesnot match')
                done()
              }
            })
        })


    });


});