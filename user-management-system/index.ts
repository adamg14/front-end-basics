import { UserModel } from "./src/models/UserModel";
import { hasPermission } from "./src/services/hasPermission";
import { passwordAuthentication } from "./src/services/passwordAuthentication";
import { validateUser } from "./src/utils/validateUser";

const exampleUser: UserModel = {
    id: '1',
    email: 'john@email.com',
    fullName: 'John Doe',
    age: 30,
    password: 'password',
    role: 'manager',
    permissions: ['create client records', 'delete client records']
}

const isUserValid = validateUser(exampleUser);

console.log("Is the user valid: " + isUserValid);

const isPasswordCorrect = passwordAuthentication(exampleUser, "password1");
console.log("Is the password correct: " + isPasswordCorrect);

const userPermission = hasPermission(exampleUser, "create client records");
console.log("does the user have the correct permission: " + userPermission);