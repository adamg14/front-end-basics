import { NextResponse } from "next/server";

export async function GET() {
    const posts = [
        {id: 1, title: "First Post", body: "This is the first post."},
        {id: 2, title: "Second Post", body: "This is the second post."}
    ];

    return NextResponse.json(posts)
}