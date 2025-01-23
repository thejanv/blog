// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'My Docs',
			social: {
				linkedin: 'https://linkedin.com/in/thejanv',
			},
			sidebar: [
				{
					label: 'Guides',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Example Guide', slug: 'guides/example' },{
							label: 'Linux',
							items: [
								{ label: 'Access the Command Line', slug: 'guides/linux/chapter_ii'},
								{ label: 'Manage file from terminal', slug: 'guides/linux/chapter_iii' },
								{ label: 'Linux File Permission', slug: 'guides/linux/filepermission' },
							]
						}
						
					],
				},
				{
					label: 'Reference',
					autogenerate: { directory: 'reference' },
				},
			],
		}),
	],
});
