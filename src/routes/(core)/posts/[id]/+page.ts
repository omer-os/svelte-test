import type { Actions, ServerLoad } from "@sveltejs/kit";

export const load: ServerLoad = async ({ params, fetch }) => {
  const { id } = params

  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
  const data: PostType = await res.json()

  return {
    data
  }

}



