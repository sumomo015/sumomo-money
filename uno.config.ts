// uno.config.ts
import {
  defineConfig,
  transformerDirectives,
  presetWebFonts,
  presetUno,
  presetAttributify,
  presetIcons,
} from 'unocss';

export default defineConfig({
  presets: [
    presetUno(),
    presetAttributify({
      prefix: 'un-',
      prefixedOnly: true,
    }),
    presetWebFonts({
      provider: 'google',
      fonts: {
        sans: ['Noto Sans JP:400,700'],
      },
    }),
    presetIcons(),
  ],
  transformers: [transformerDirectives()],
});
