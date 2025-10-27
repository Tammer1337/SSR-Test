// src/routes/hunde/+page.server.ts
import { directus } from "$lib/directus";
import { readItems } from "@directus/sdk";

export const load = async () => {
	try {
		const hunde = await directus.request(
			readItems("Hunde", {
				fields: ["name", "kategorie", "hero_image.id", "hero_image.title"],
				sort: ["name"],
			})
		);
		return { hunde };
	} catch (err) {
		console.error("Fehler beim Laden der Hunde:", err);
		throw err;
	}
};
