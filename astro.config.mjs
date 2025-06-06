import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightUtils from "@lorenzo_lewis/starlight-utils";
import preact from '@astrojs/preact'

// https://astro.build/config
export default defineConfig({
	integrations: [
		preact(),
		starlight({
			plugins: [
				starlightUtils({
					navLinks: {
						leading: { useSidebarLabelled: "leadingNavLinks" },
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
						{ label: 'Notes', slug: 'projects/projectsolstice' },
						{ label: 'Resume', slug: 'resume' }
					]
				},
				{
					label: 'Projects',
					items: [
						{ label: 'Project Solstice', slug: 'projects/projectsolstice' },
						{ label: 'dz', slug: 'projects/dz' },
						{ label: 'C Renderer', slug: 'projects/crenderer' },
						{ label: 'Time-Based Pathing', slug: 'projects/timebasedpathing' }
					]
				},
				{
					label: 'LeetCode',
					items: [
						{ label: 'Products of Array Except Self', slug: 'lc/productsofarrayexceptself' },
						{ label: 'Two Sum', slug: 'lc/twosum' },
						{ label: 'Contains Duplicate', slug: 'lc/containsduplicate' },
						{ label: 'Valid Anagram', slug: 'lc/validanagram' },
						{ label: 'Top K Frequent Elements', slug: 'lc/topkfrequentelements' },
						{ label: 'Group Anagrams', slug: 'lc/groupanagrams' },
					]

				},
				{
					label: 'AWS Cloud Practitioner',
					items: [
						{ label: 'What is AWS?', slug: 'awsccp/whatisaws' },
						{ label: 'Cloud Computing', slug: 'awsccp/cloudcomputing' },
						{ label: 'Amazon Elastic Compute Cloud (EC2)', slug: 'awsccp/ec2' },
						{ label: 'Monolithic Applications and Microservices', slug: 'awsccp/microservices' },
						{ label: 'Serverless Computing & Containers', slug: 'awsccp/serverless' },
						{ label: 'AWS Infrastructure and Reliability', slug: 'awsccp/infastructure' },
						{ label: 'Networking', slug: 'awsccp/networking' },
						{ label: 'Storage & Databases', slug: 'awsccp/storageanddatabases' },
						{ label: 'Security', slug: 'awsccp/security' },
						{ label: 'Monitoring and Analytics', slug: 'awsccp/monitoringandanalytics' },

					]
				},
				{
					label: 'Unity',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Overview', slug: 'unity/overview' },
						{ label: 'GitHub and Unity', slug: 'unity/usinggit' },
						{ label: 'Interfaces', slug: 'unity/interfaces' }
					],
				},
				{
					label: 'Graphics',
					items: [
						{ label: 'Sum of Sines Water', slug: 'graphics/sumofsines' },
					]
				},
				{
					label: 'BotW Reverse Engineering',
					items: [
						{ label: '1.6.0 Symbol Search', slug: 'botw-reverse/symbolsearch' },
						{ label: 'Overview', slug: 'botw-reverse/overview' },
						{ label: 'Getting Started', slug: 'botw-reverse/getting-started' },
						{ label: 'Exefs Dumping', slug: 'botw-reverse/exefsdumping' },
						{ label: 'Setting Up Ghidra', slug: 'botw-reverse/settingupghidra' },
						{ label: 'Working with ExLaunch', slug: 'botw-reverse/workingwithexlaunch' },
						{ label: 'Hooking', slug: 'botw-reverse/hooking' }
					]
				}
			],
		}),
	],
	vite: {
		resolve: {
			alias: {
				react: 'preact/compat',
				'react-dom': 'preact/compat'
			}
		}
	}
});
