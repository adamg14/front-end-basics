import { UserModel } from "../models/UserModel";

export function passwordAuthentication(user: UserModel, password: string): boolean {
    return user.password === password;
}