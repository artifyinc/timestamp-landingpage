# Timestamp Camera Landing Page

Timestamp Camera 앱의 랜딩페이지. Astro + Tailwind CSS 정적 사이트.

## Commands

- `npm run dev` — 로컬 개발 서버 (http://localhost:4321)
- `npm run build` — 정적 사이트 빌드 (출력: `dist/`)
- `npm run preview` — 빌드 결과 미리보기

## Tech Stack

- **Astro 4** — 정적 사이트 생성기
- **Tailwind CSS 3** — 유틸리티 CSS (다크모드: `class` 전략)
- **GitHub Pages** — 호스팅 (GitHub Actions로 빌드/배포)
- 서버 사이드 로직 없음. 모든 기능은 클라이언트 사이드.

## Project Structure

```
src/
├── components/       # Astro 컴포넌트
│   ├── Header.astro         # 네비게이션, 언어 선택, 다크모드 토글
│   ├── Hero.astro            # 메인 히어로 섹션
│   ├── Features.astro        # 기능 소개 (6개 카드)
│   ├── Screenshots.astro     # 앱 스크린샷 갤러리
│   ├── FAQ.astro             # FAQ 아코디언 (details/summary)
│   ├── Download.astro        # 앱 다운로드 CTA
│   ├── Footer.astro          # 푸터
│   ├── StructuredData.astro  # Schema.org JSON-LD
│   └── TimestampTool.astro   # 웹 타임스탬프 도구 (EXIF + Canvas)
├── i18n/
│   ├── index.ts              # 로케일 설정, 번역 로딩 유틸리티
│   └── locales/              # 번역 JSON (en, ko, ja, zh-cn, zh-tw, pt, es, vi, th, hi)
├── layouts/
│   └── Layout.astro          # HTML 레이아웃 (메타, hreflang, OG, 다크모드 스크립트)
├── pages/
│   ├── index.astro           # / → /en/ 리다이렉트
│   └── [locale]/
│       ├── index.astro       # 랜딩페이지 (로케일별)
│       └── [slug].astro      # 웹 타임스탬프 도구 (로케일별 번역 slug)
└── styles/
    └── global.css            # Tailwind directives, Google Fonts
public/                       # 정적 에셋 (빌드 시 dist/로 복사)
```

## i18n

- 10개 언어: en, ko, ja, zh-cn, zh-tw, pt, es, vi, th, hi
- URL 구조: `/{locale}/` (예: `/ko/`, `/en/`)
- 웹 도구 URL은 로케일별 번역된 slug 사용 (예: `/ko/사진-날짜-넣기/`)
- 로케일 설정은 `src/i18n/index.ts`의 `locales` 배열이 single source of truth
- 새 언어 추가: `locales` 배열에 항목 추가 + `src/i18n/locales/`에 번역 JSON 생성

## Key Conventions

- 컴포넌트는 `t` (번역 객체)와 `locale` (문자열)을 props로 받음
- 다크모드는 `dark:` Tailwind 접두사 사용
- FAQ는 JS 없이 `<details>/<summary>` 네이티브 HTML 사용
- TimestampTool은 클라이언트 사이드 전용 (EXIF 파싱 + Canvas API)
- 구조화 데이터: SoftwareApplication, FAQPage, WebApplication, BreadcrumbList

## Deployment

- master 브랜치 push 시 `.github/workflows/deploy.yml`이 자동 빌드/배포
- `app-ads.txt`는 `.github/workflows/update-app-ads.yml`이 매일 자동 업데이트 → `public/app-ads.txt`
- GA4 측정 ID: `G-WZWPM4MKZ4` (적용 완료)
