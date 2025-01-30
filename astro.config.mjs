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
					label: 'Projects',
					items: [
						{ label: 'Project Solstice', slug: 'projects/projectsolstice' },
						{ label: 'dz', slug: 'projects/dz'},
						{ label: 'C Renderer', slug: 'projects/crenderer'},
						{ label: 'Time-Based Pathing', slug: 'unity/timebasedpathing'}
					]
				},
				{
					label: 'Unity',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Overview', slug: 'unity/overview' },
						{ label: 'GitHub and Unity', slug: 'unity/usinggit'},
						{ label: 'Interfaces', slug: 'unity/interfaces' }
					],
				},
				{
					label: 'Graphics',
					items: [
						{ label: 'Sum of Sines Water', slug: 'graphics/sumofsines'},
					]
				}
			],
		}),
	],
});
