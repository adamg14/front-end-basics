"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.hasPermission = hasPermission;
function hasPermission(user, permission) {
    return user.permissions.includes(permission);
}
