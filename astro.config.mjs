import { defineConfig } from 'astro/config';
import { presetWebFonts } from 'unocss';
import UnoCSS from 'unocss/astro';

export default defineConfig({
	integrations: [
		UnoCSS(
			presetWebFonts({
				provider: 'google',
				fonts: {
					sans: 'Roboto',
					raleway: [
						{
							name: 'Raleway',
							weights: ['400', '600', '800'],
							italic: false,
						},
						{
							name: 'sans-serif',
							provider: 'none',
						},
					],
					SortsMillGoudy: [
						{ name: 'Sorts+Mill+Goudy', weights: ['400'], italic: true },
						{
							name: 'sans-serif',
							provider: 'none',
						},
					],
				},
			}),
		),
	],
});
