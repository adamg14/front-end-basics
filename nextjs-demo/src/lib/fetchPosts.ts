export async function fetchPosts(){
    const response = await fetch("http://localhost:3000/api/posts");
    return response.json();
}