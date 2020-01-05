"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// get config env to all project
const getenv = require("dotenv");
getenv.config();
const app_1 = require("./app");
app_1.default.listen(process.env.PORT, () => console.log(`Example app listening on port ${process.env.PORT}!`));
//# sourceMappingURL=server.js.map