import { User } from "../interfaces/User";

export class UserModel implements User{
    id: string;
    email: string;
    fullName: string;
    age: number;
    password: string;
    role: string;
    permissions: string[];

    constructor (newUser: User){
        this.id = newUser.id;
        this.email = newUser.email;
        this.fullName = newUser.fullName;
        this.age = newUser.age;
        this.password = newUser.password;
        this.role = newUser.role
        this.permissions =  newUser.permissions
    }
}