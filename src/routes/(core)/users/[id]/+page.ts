import type { ServerLoad } from "@sveltejs/kit"

export const load: ServerLoad = async ({ params, fetch }) => {
  const { id } = params

  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
  const data: UserType = await res.json()

  return {
    data
  }
}



