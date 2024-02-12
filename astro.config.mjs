import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  site: "https://dummy-that-can-be-deleted.github.io",
  base: "/apps-valentine-showcase"
});