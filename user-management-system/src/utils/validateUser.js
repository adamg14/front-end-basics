"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateUser = validateUser;
function validateUser(user) {
    if (!user.id || typeof user.id !== "string")
        return false;
    if (!user.email || typeof user.email !== "string")
        return false;
    if (!user.fullName || typeof user.fullName !== "string")
        return false;
    if (!user.age || typeof user.age !== "number")
        return false;
    if (!user.password || typeof user.password !== "string")
        return false;
    if (!user.role || typeof user.role !== "string")
        return false;
    if (!Array.isArray(user.permissions) || user.permissions.some(permission => typeof permission !== 'string'))
        return false;
    return true;
}
