// [slug]/+page.server.ts
import { directus } from "$lib/directus";
import { readItems } from "@directus/sdk";
import { error } from "@sveltejs/kit";

export const load = async ({ params }) => {
	try {
		const result = await directus.request(
			readItems("Hunde", {
				// KORREKTUR 1: Muss "Hunde" (groß) sein
				filter: { name: { _eq: params.slug } },
				fields: [
					"name",
					"beschreibung",

					// KORREKTUR 2: So abfragen, wie in deiner funktionierenden Übersichtsseite
					"hero_image.id",
					"hero_image.description", // oder .title, je nachdem was du im alt-Tag willst

					// Diese Abfrage war syntaktisch korrekt und sollte
					// mit der Berechtigung für "Hunde_files" funktionieren.
					{
						additional_files: [{ directus_files_id: ["id", "description"] }],
					},
				],
			})
		);

		const hund = result?.[0];
		if (!hund) throw error(404, "Hund nicht gefunden");

		return { hund };
	} catch (err) {
		console.error("Fehler beim Laden des Hundes:", err);
		if (err.errors) {
			console.error("Directus Fehlerdetails:", err.errors);
			throw error(err.status || 500, err.errors[0]?.message || "Directus-Fehler");
		}
		throw error(500, "Serverfehler beim Laden des Hundes");
	}
};
