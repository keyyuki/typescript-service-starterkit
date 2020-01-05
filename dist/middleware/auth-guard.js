"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const guard = (req, res, next) => {
    // pass for route login
    if (req.path === '/login') {
        next();
        return true;
    }
    if (req.user) {
        next();
        return true;
    }
    return res.status(401).json({ code: 0, messages: ['Unauthorized user!'] });
};
exports.default = guard;
//# sourceMappingURL=auth-guard.js.map