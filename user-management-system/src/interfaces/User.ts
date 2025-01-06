export interface User {
    id: string,
    email: string,
    fullName: string,
    age: number
    password: string,
    role: string,
    permissions: string[],
}