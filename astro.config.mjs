import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightUtils from "@lorenzo_lewis/starlight-utils";

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			plugins: [
				starlightUtils({
					navLinks: {
						leading: { useSidebarLabelled: "leadingNavLinks"},
					}
				})
			],
			components: {
				Hero: './src/components/Hero.astro',
				AsciiSunset: './src/components/AsciiSunset.astro',
				LoadScript: './src/components/LoadScript.astro',
			},
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
					label: 'leadingNavLinks',
					items: [
						{ label: 'Projects', slug: 'projects/projects' },
						{ label: 'Notes', slug: 'projects/projectsolstice'},
						{ label: 'Resume', slug: 'resume'}
					]
				},
				{
					label: 'Projects',
					items: [
						{ label: 'Project Solstice', slug: 'projects/projectsolstice' },
						{ label: 'dz', slug: 'projects/dz'},
						{ label: 'C Renderer', slug: 'projects/crenderer'},
						{ label: 'Time-Based Pathing', slug: 'projects/timebasedpathing'}
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
