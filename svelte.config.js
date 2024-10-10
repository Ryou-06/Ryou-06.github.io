import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: vitePreprocess(),

		adapter: adapter({ 
			pages: "build", 
			assets: "build", 
			fallback: 'index.html', 
			precompress: false, 
			strict: true 
		}),

		prerender: {
			handleHttpError: ({ path, status }) => {
				// Log or handle 404 errors gracefully during the build
				if (status === 404) {
					console.warn(`Prerendering failed: ${status} for ${path}`);
				}
			}
		}
};

export default config;
