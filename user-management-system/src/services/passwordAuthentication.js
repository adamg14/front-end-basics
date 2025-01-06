"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.passwordAuthentication = passwordAuthentication;
function passwordAuthentication(user, password) {
    return user.password === password;
}
