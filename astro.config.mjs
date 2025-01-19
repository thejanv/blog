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
								{ label: 'Linux File Permission', slug: 'guides/linux/filepermission' },
								{ label: 'Linux File System Hierarchy', slug: 'guides/linux/filesystemstructure' }
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
