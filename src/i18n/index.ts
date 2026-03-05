export interface FAQItem {
  question: string;
  answer: string;
}

export interface FeatureItem {
  title: string;
  description: string;
}

export interface TranslationData {
  meta: {
    title: string;
    description: string;
    toolTitle: string;
    toolDescription: string;
  };
  nav: {
    features: string;
    screenshots: string;
    faq: string;
    download: string;
    tool: string;
    darkMode: string;
    lightMode: string;
  };
  hero: {
    title: string;
    subtitle: string;
    cta: string;
    webTool: string;
  };
  features: {
    title: string;
    items: FeatureItem[];
  };
  screenshots: {
    title: string;
  };
  faq: {
    title: string;
    items: FAQItem[];
  };
  download: {
    title: string;
    subtitle: string;
    appStore: string;
    playStore: string;
  };
  footer: {
    privacy: string;
    terms: string;
    contact: string;
    copyright: string;
  };
  tool: {
    title: string;
    subtitle: string;
    upload: string;
    uploadHint: string;
    processing: string;
    download: string;
    reset: string;
    noExif: string;
    ctaBanner: string;
    ctaButton: string;
  };
}

export interface LocaleConfig {
  code: string;
  name: string;
  dir: 'ltr' | 'rtl';
  toolSlug: string;
}

export const defaultLocale = 'en';

export const locales: LocaleConfig[] = [
  { code: 'en', name: 'English', dir: 'ltr', toolSlug: 'add-date-to-photo' },
  { code: 'ko', name: '한국어', dir: 'ltr', toolSlug: '사진-날짜-넣기' },
  { code: 'ja', name: '日本語', dir: 'ltr', toolSlug: '写真-日付-追加' },
  { code: 'zh-cn', name: '简体中文', dir: 'ltr', toolSlug: '照片添加日期' },
  { code: 'zh-tw', name: '繁體中文', dir: 'ltr', toolSlug: '照片加入日期' },
  { code: 'pt', name: 'Português', dir: 'ltr', toolSlug: 'adicionar-data-na-foto' },
  { code: 'es', name: 'Español', dir: 'ltr', toolSlug: 'agregar-fecha-a-foto' },
  { code: 'vi', name: 'Tiếng Việt', dir: 'ltr', toolSlug: 'them-ngay-vao-anh' },
  { code: 'th', name: 'ไทย', dir: 'ltr', toolSlug: 'เพิ่มวันที่ในรูปภาพ' },
  { code: 'hi', name: 'हिन्दी', dir: 'ltr', toolSlug: 'photo-mein-date-lagaye' },
];

export const localeCodeList = locales.map((l) => l.code);

export async function getLocaleData(locale: string): Promise<TranslationData> {
  const localeMap: Record<string, () => Promise<TranslationData>> = {
    en: () => import('./locales/en.json').then((m) => m.default as TranslationData),
    ko: () => import('./locales/ko.json').then((m) => m.default as TranslationData),
    ja: () => import('./locales/ja.json').then((m) => m.default as TranslationData),
    'zh-cn': () => import('./locales/zh-cn.json').then((m) => m.default as TranslationData),
    'zh-tw': () => import('./locales/zh-tw.json').then((m) => m.default as TranslationData),
    pt: () => import('./locales/pt.json').then((m) => m.default as TranslationData),
    es: () => import('./locales/es.json').then((m) => m.default as TranslationData),
    vi: () => import('./locales/vi.json').then((m) => m.default as TranslationData),
    th: () => import('./locales/th.json').then((m) => m.default as TranslationData),
    hi: () => import('./locales/hi.json').then((m) => m.default as TranslationData),
  };

  const loader = localeMap[locale] ?? localeMap[defaultLocale];
  return loader();
}

export function getToolSlug(locale: string): string {
  const config = locales.find((l) => l.code === locale);
  return config?.toolSlug ?? locales[0].toolSlug;
}

export function getLocaleName(locale: string): string {
  const config = locales.find((l) => l.code === locale);
  return config?.name ?? locales[0].name;
}

export function getLocaleConfig(locale: string): LocaleConfig | undefined {
  return locales.find((l) => l.code === locale);
}
