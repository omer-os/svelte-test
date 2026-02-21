import type { Actions } from "@sveltejs/kit";
import z from "zod";

const userSchema = z.object({
    id: z.string(),
    name: z.string(),
    age: z.string()
})


export const actions: Actions = {
    add: async ({ request }) => {
        const formdata = await request.formData()
        const data = Object.fromEntries(formdata)
        const newUser = userSchema.safeParse(data)


        console.log("creating using with the data:", {
            ...newUser
        })

        return{
            hello:"world"
        }

    }
}