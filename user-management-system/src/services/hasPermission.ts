import { User } from "../interfaces/User";
import { UserModel } from "../models/UserModel"

export function hasPermission(user: User, permission: string): boolean {
    return user.permissions.includes(permission);
}