type Post = {
    userId: number
    id: number
    title: string
    body: string
}



export const load = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts")
    const posts: Post[] = await res.json()




    return {
        posts
    }
}