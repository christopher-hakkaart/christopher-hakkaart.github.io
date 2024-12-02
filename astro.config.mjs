// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://christopher-hakkaart.github.io',
	integrations: [
		starlight({
			title: 'My Docs',
			social: {
				github: 'https://github.com/withastro/starlight',
			},
			sidebar: [
				{
					label: 'Getting started',
					autogenerate: { directory: 'gettingstarted' },
				},
				{
					label: 'Contributors',
					autogenerate: { directory: 'contributors' },
				},
				{
					label: 'Users',
					autogenerate: { directory: 'users' },
				},
				{
					label: 'Developers',
					autogenerate: { directory: 'developers' },
				},
				{
					label: 'Reference',
					autogenerate: { directory: 'reference' },
				},
				{
					label: 'nf-core',
					autogenerate: { directory: 'nf-core' },
				},
			],
		}),
	],
});
