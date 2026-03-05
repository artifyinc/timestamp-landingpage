import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://timestamp.camera',
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'ko', 'ja', 'zh-cn', 'zh-tw', 'pt', 'es', 'vi', 'th', 'hi'],
    routing: {
      prefixDefaultLocale: true,
      redirectToDefaultLocale: false,
    },
  },
});
