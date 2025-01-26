// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightObsidian, { obsidianSidebarGroup } from 'starlight-obsidian'

// https://astro.build/config
export default defineConfig({
	site: "https://blog.thejanv.com/",
	integrations: [
		starlight({
			plugins:[
				starlightObsidian({
					vault:"Lets Write"
				})
			],
			title: 'My Docs',
			social: {
				linkedin: 'https://linkedin.com/in/thejanv',
			},
			sidebar: [
				obsidianSidebarGroup,
				{
					label: 'Certs Resources',
					autogenerate: { directory: 'vouchers' },
				},
				
			],
		}),
	],
});
