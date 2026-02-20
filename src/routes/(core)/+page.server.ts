import { fail, type Actions } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load:PageServerLoad=({ cookies }) => {
    console.log("load run");
    
}

export const actions:Actions = {
	create: async ({ cookies, request }) => {
		const data = await request.formData();

		try {
  
		} catch (error) {
			return fail(422, {
				description: data.get('description'),
				// error: error?.message
			});
		}
	}
}