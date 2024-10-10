import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: vitePreprocess(),

	kit: {
		// Set the base path if your app is deployed to a subdirectory
		paths: {
			base: 'https://github.com/Ryou-06/Ryou-06.github.io' // Change '/my-app' to your desired base path
		},
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
	}
};

export default config;
