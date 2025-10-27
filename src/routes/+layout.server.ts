import { directus } from "$lib/directus";
import { readItems } from "@directus/sdk";

export const load = async () => {
	try {
		const pages = await directus.request(
			readItems("pages", {
				fields: ["slug", "title"],
			})
		);

		return { pages };
	} catch (err) {
		console.error("Fehler beim Laden der Navigation:", err);
		return { pages: [] };
	}
};
