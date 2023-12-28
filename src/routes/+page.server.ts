import { json } from '@sveltejs/kit';
import type { Actions } from './$types';

export const actions = {
    authUser: async (event) => {
        const data = await event.request.formData();
        const user = data.get('lastFmUser')?.toString();
        console.log(data);
        console.log("Hi shuzo")
        event.fetch('http://localhost:5173/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: user
            })
        })
        return { greeting: "hi shuzo"}
    }, 
} satisfies Actions;