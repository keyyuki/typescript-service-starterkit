"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const jwt_auth_1 = require("./middleware/jwt-auth");
const auth_guard_1 = require("./middleware/auth-guard");
const app = express();
app.use(cors({
    origin(origin, cb) {
        const whitelist = process.env.CORS_ORIGIN
            ? process.env.CORS_ORIGIN.split(',')
            : [];
        cb(null, whitelist.includes(origin || ''));
    },
    credentials: true,
}));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(jwt_auth_1.default);
app.use(auth_guard_1.default);
app.get('/', (req, res) => res.send('Hello World!'));
exports.default = app;
//# sourceMappingURL=app.js.map