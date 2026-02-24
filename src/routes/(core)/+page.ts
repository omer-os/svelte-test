import type { Actions, ServerLoad } from "@sveltejs/kit";

export const load: ServerLoad = async () => {

  const res = await fetch("https://jsonplaceholder.typicode.com/posts")
  const data: PostType[] = await res.json()



  return {
    data
  }

}



