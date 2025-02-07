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
					label: 'Discounted Exam Vouchers',
                items: [
					{ label: 'DP-700 Discount', link: 'voucher_wiki/dp-700discount' ,badge: { text: '50%', variant: 'note' }, },
					{ label: 'Power Up Program', link: 'voucher_wiki/powerupprogram' ,badge: { text: '100%', variant: 'tip' }, },
					{ label: 'Virtual Training Days', link: 'voucher_wiki/virtualtrainingdays' ,badge: { text: '50%', variant: 'note' }, },
					{ label: 'Women in Cloud', link: 'voucher_wiki/womenincloud' ,badge: { text: '100%', variant: 'tip' }, },
				]
				},
				
			],
		}),
	],
});
