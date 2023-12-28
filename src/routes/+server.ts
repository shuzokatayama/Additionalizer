import { json } from "@sveltejs/kit";
import type { RequestHandler } from "./$types";

export const POST: RequestHandler = async ({ request }) => {
	const body = await request.json();
	console.log(body);
	console.log('server called');
	// const { a, b } = await request.json();
	// return json(a + b);
	return json("hi")
};