import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: '>jakebutf.dev',
            description: 'Notes regarding programming, game development, and software technology.',
			social: {
				github: 'https://github.com/jakebutf',
                linkedin: 'https://www.linkedin.com/in/jacob-butfiloski-061ba2276/'
			},
            customCss: [
                './src/styles/custom.css',
              ],
			sidebar: [
				{
					label: 'Unity',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Overview', slug: 'unity/overview' },
						{ label: 'Interfaces', slug: 'unity/interfaces' },
					],
				},
			],
		}),
	],
});
