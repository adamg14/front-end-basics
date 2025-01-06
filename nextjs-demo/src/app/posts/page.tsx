import { fetchPosts } from "../../lib/fetchPosts";

// this page gets all the posts from the server and lists them on the /posts route
export default async function Posts(){
    const posts = await fetchPosts();

    return (
        <div>
            <h1>Posts</h1>
            <ul>
                {posts.map((post: any) => (
                    <li key={post.id}>
                        <a href={`/posts/${post.id}`}>{post.title}</a>
                    </li>
                ))}
            </ul>
        </div>
    )
}