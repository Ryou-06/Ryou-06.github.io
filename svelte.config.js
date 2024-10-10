import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
    preprocess: vitePreprocess(),

    kit: {
		paths: {
			base: '/ryou-06.github.io' // Use your actual repository name
		},
        adapter: adapter({
            pages: "dist", 
            assets: "dist", 
            fallback: 'index.html', 
            precompress: false, 
            strict: true 
        }),
        prerender: {
            handleHttpError: ({ path, status }) => {
                if (status === 404) {
                    console.warn(`Prerendering failed: ${status} for ${path}`);
                }
            }
        }
    }
};

export default config;
