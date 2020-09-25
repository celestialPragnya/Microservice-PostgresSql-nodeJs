import  config from "./config"
import  express from "express";
var app = express();
import route from './router/route';
import bodyParser from 'body-parser';

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json());

app.get('/', function (req:any , res:any) {
    res.json({
        status: true,
        message: "Welcome"
    })
})

app.use('/', route);

app.listen(config.PORT, function () {
    console.log("Server started at port " + config.PORT);
})