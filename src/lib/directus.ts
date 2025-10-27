import { createDirectus, rest } from "@directus/sdk";

// dein public endpoint
export const directus = createDirectus("https://directus.tammer.cc").with(rest());
