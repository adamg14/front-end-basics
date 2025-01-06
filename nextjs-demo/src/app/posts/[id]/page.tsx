import { fetchPosts } from "../../../lib/fetchPosts";

export default async function PostDetail({ params }: { params: { id: string}}){
    const posts = await fetchPosts();
    const post = posts.find((p: any) => p.id.toString() === params.id);

    // if there is not post with that id return an error message
    if (!post){
        return <div>Post not found</div>
    }

    return (
        <div>
            <h1>{ post.title }</h1>
            <p>{ post.body }</p>
        </div>
    );
}