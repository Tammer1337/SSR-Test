import { directus } from "$lib/directus";
import { readItems } from "@directus/sdk";
import { error } from "@sveltejs/kit";

export const load = async ({ params }) => {
	const result = await directus.request(
		readItems("pages", {
			filter: { slug: { _eq: params.slug } },
			fields: ["title", "content"],
			limit: 1,
		})
	);

	const page = result?.[0];
	if (!page) throw error(404, "Seite nicht gefunden");

	return { page };
};
