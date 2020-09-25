"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = __importDefault(require("./config"));
const express_1 = __importDefault(require("express"));
var app = express_1.default();
const route_1 = __importDefault(require("./router/route"));
const body_parser_1 = __importDefault(require("body-parser"));
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.use(body_parser_1.default.json());
app.get('/', function (req, res) {
    res.json({
        status: true,
        message: "Welcome"
    });
});
app.use('/', route_1.default);
app.listen(config_1.default.PORT, function () {
    console.log("Server started at port " + config_1.default.PORT);
});
//# sourceMappingURL=app.js.map