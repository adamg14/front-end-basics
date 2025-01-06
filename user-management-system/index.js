"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const hasPermission_1 = require("./src/services/hasPermission");
const passwordAuthentication_1 = require("./src/services/passwordAuthentication");
const validateUser_1 = require("./src/utils/validateUser");
const exampleUser = {
    id: '1',
    email: 'john@email.com',
    fullName: 'John Doe',
    age: 30,
    password: 'password',
    role: 'manager',
    permissions: ['create client records', 'delete client records']
};
const isUserValid = (0, validateUser_1.validateUser)(exampleUser);
console.log("Is the user valid: " + isUserValid);
const isPasswordCorrect = (0, passwordAuthentication_1.passwordAuthentication)(exampleUser, "password1");
console.log("Is the password correct: " + isPasswordCorrect);
const userPermission = (0, hasPermission_1.hasPermission)(exampleUser, "create client records");
console.log("does the user have the correct permission: " + userPermission);
