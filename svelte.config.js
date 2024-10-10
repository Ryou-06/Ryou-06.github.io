import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: vitePreprocess(),

	kit: {
		// Use the static adapter for deployment
		adapter: adapter({ 
			pages: "build", 
			assets: "build", 
			fallback: 'index.html', 
			precompress: true, 
			strict: true 
		}),
		// Set the base path for deployment
		paths: {
			base: '/repository-name'  // Replace with your actual base path
		},
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
