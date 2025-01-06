import { NextResponse } from "next/server";

export async function GET() {
    const users = [
        { id: 1, name: "John Doe"},
        { id: 2, name: "Adam"}
    ]

    return NextResponse.json(users);
}