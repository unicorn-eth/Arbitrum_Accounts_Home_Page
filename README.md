# Arbitrum Accounts Home Page

A marketing landing page for Arbitrum Accounts - a web3 wallet onboarding solution built on Arbitrum.

**Owner:** Unicorns, Inc.
**Domain:** arbitrum.ac | app.arbitrum.ac

## Project Overview

This is a React + TypeScript landing page that promotes Arbitrum Accounts, allowing users to create a web3 wallet in 20 seconds with just an email login. The site features:

- Clean, modern UI with Arbitrum branding (cyan/navy color scheme)
- Full internationalization (i18n) supporting 9 languages
- Analytics and referral tracking system
- Responsive design with mobile sticky CTA

## Tech Stack

- **Framework:** React 18 + TypeScript
- **Build Tool:** Vite 5
- **Styling:** Tailwind CSS 3.4
- **Icons:** Lucide React
- **i18n:** i18next + react-i18next
- **Analytics:** Google Analytics 4

## Project Structure

```
src/
├── components/
│   ├── Header.tsx          # Navigation with language selector
│   ├── Hero.tsx            # Main hero section with CTA
│   ├── HowItWorks.tsx      # 3-step process section
│   ├── SecurityFeatures.tsx # Security features section
│   ├── FAQ.tsx             # Accordion FAQ section
│   ├── FinalCTA.tsx        # Bottom call-to-action section
│   ├── Footer.tsx          # Footer with copyright
│   ├── StickyButton.tsx    # Mobile sticky CTA button
│   └── LanguageSelector.tsx # Language dropdown component
├── locales/
│   ├── en.json             # English (base)
│   ├── es.json             # Spanish
│   ├── fr.json             # French
│   ├── de.json             # German
│   ├── pt.json             # Portuguese
│   ├── zh.json             # Chinese (Simplified)
│   ├── ja.json             # Japanese
│   ├── ko.json             # Korean
│   └── ar.json             # Arabic (RTL)
├── utils/
│   └── analytics.ts        # GA4 tracking & referral system
├── i18n.ts                 # i18n configuration
├── App.tsx                 # Main app component
├── main.tsx                # Entry point
└── index.css               # Tailwind imports

public/
└── arbitrum.svg            # Arbitrum logo
```

## Key Configuration Files

- `tailwind.config.js` - Custom Arbitrum color palette
- `index.html` - Meta tags, GA4 script, favicons
- `vite.config.ts` - Vite configuration

## Branding

### Colors (defined in tailwind.config.js)

```javascript
arbitrum: {
  50: '#E8F4FF',   // Light background
  100: '#C9E4FF',
  200: '#9DCCED',  // Light accent
  300: '#5BB8FF',
  400: '#12AAFF',  // Primary cyan
  500: '#1B4ADD',  // Primary blue
  600: '#213147',  // Dark navy
  700: '#162A3E',
  800: '#0D1E31',
  900: '#05163D',  // Darkest navy
}
```

### Logo
- File: `/public/arbitrum.svg`
- Source: https://arbitrum.io/arb_logo_color.svg

## Internationalization (i18n)

### Supported Languages
| Code | Language | RTL |
|------|----------|-----|
| en | English | No |
| es | Spanish | No |
| fr | French | No |
| de | German | No |
| pt | Portuguese | No |
| zh | Chinese (Simplified) | No |
| ja | Japanese | No |
| ko | Korean | No |
| ar | Arabic | Yes |

### Adding a New Language

1. Create `src/locales/{code}.json` (copy from `en.json`)
2. Translate all strings
3. Add import in `src/i18n.ts`:
   ```typescript
   import newLang from './locales/newlang.json';
   ```
4. Add to resources object in `src/i18n.ts`
5. Add to `languages` array in `src/i18n.ts`:
   ```typescript
   { code: 'xx', name: 'Language Name', flag: '🏳️', rtl: false }
   ```

### Translation Keys Structure

```json
{
  "common": {},      // Shared strings (logo alt, buttons)
  "nav": {},         // Navigation links
  "hero": {},        // Hero section
  "howItWorks": {},  // How it works section
  "security": {},    // Security features
  "faq": {},         // FAQ questions & answers
  "finalCta": {},    // Final CTA section
  "stickyButton": {},// Mobile sticky button
  "footer": {}       // Footer content
}
```

## Analytics & Referral Tracking

### URL Parameters
```
https://www.arbitrum.ac/?ref=CODE&utm_source=twitter&utm_campaign=launch
```

- `ref` or `referral` - Referral code
- `utm_source` - Traffic source
- `utm_medium` - Medium type
- `utm_campaign` - Campaign name

### Tracked Events
- `cta_click` - Button clicks with location
- `referral_captured` - Referral code detection
- `scroll_depth` - User scroll engagement
- `time_on_page` - Session duration

### Session Storage
- Key: `arbitrum_referral`
- Stores referral data for the session duration

## Development

### Install Dependencies
```bash
npm install
```

### Run Development Server
```bash
npm run dev
```

### Build for Production
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

## External Links

All CTA buttons link to:
- **App URL:** https://app.arbitrum.ac
- Referral parameters are automatically appended via `analytics.getAppURL()`

## Important Notes for Claude Sessions

### When Making Changes:
1. **Text changes** - Update ALL locale files in `src/locales/`
2. **Color changes** - Use `arbitrum-{shade}` classes (e.g., `text-arbitrum-400`)
3. **New sections** - Add translation keys and use `useTranslation()` hook
4. **Links to app** - Use `analytics.getAppURL()` for referral tracking

### Key Files to Reference:
- `src/locales/en.json` - All translatable strings
- `tailwind.config.js` - Color palette
- `src/utils/analytics.ts` - Tracking implementation
- `src/i18n.ts` - Language configuration

### Branding Guidelines:
- Primary color: `arbitrum-400` (#12AAFF - cyan)
- Dark backgrounds: `arbitrum-600` to `arbitrum-900`
- Accent for CTAs: `teal-500` (#12AAFF)
- Logo: Always use `/arbitrum.svg`
- Copyright: "© 2025 Unicorns, Inc."

## Deployment

The site is configured for static hosting. Build outputs to `/dist` folder.

Compatible with:
- Cloudflare Pages
- Vercel
- Netlify
- Any static hosting

---

**Last Updated:** December 2025
**Maintained by:** Unicorns, Inc.
