"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserModel = void 0;
class UserModel {
    constructor(newUser) {
        this.id = newUser.id;
        this.email = newUser.email;
        this.fullName = newUser.fullName;
        this.age = newUser.age;
        this.password = newUser.password;
        this.role = newUser.role;
        this.permissions = newUser.permissions;
    }
}
exports.UserModel = UserModel;
