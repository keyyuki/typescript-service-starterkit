"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const get = require("get-value");
const fs = require("fs");
const path = require("path");
const jwt = require("jsonwebtoken");
const publicKey = fs.readFileSync(path.resolve(__dirname, '../../config/authen/jwt-public.key'));
const auth = (req, res, next) => {
    const authHeader = get(req.header, 'authorization', { default: '' });
    const token = authHeader.split(' ')[1];
    if (authHeader && token) {
        jwt.verify(token, publicKey, { algorithms: ['RS256'] }, (error, decode) => {
            if (error || typeof decode === 'string') {
                req.user = undefined;
            }
            else {
                req.user = decode;
            }
            next();
        });
    }
    else {
        req.user = undefined;
        next();
    }
};
exports.default = auth;
//# sourceMappingURL=jwt-auth.js.map