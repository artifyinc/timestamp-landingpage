import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://timestamp.camera',
  integrations: [tailwind()],
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'ko', 'ja', 'zh-cn', 'zh-tw', 'pt', 'es', 'vi', 'th', 'hi'],
    routing: {
      prefixDefaultLocale: true,
    },
  },
});
