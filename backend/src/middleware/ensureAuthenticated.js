"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ensureAuthenticated = void 0;
const jsonwebtoken_1 = require("jsonwebtoken");
function ensureAuthenticated(request, response, next) {
    const authToken = request.headers.authorization;
    if (!authToken) {
        return response.status(401).json({
            errorCode: "token.invalid",
        });
    }
    //Bearer 8934589345djisdjfk834u25ndsfksdkf
    // [0] Bearer
    // [1] 8934589345djisdjfk834u25ndsfksdkf
    const [, token] = authToken.split(" ");
    try {
        const { sub } = (0, jsonwebtoken_1.verify)(token, process.env.JWT_SECRET);
        request.user_id = sub;
        return next();
    }
    catch (err) {
        return response.status(401).json({ errorCode: "token.expired" });
    }
}
exports.ensureAuthenticated = ensureAuthenticated;
