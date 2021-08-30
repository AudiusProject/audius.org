# audius.org

Build:

```
npm run build
```

Preview changes:

```bash
wrangler preview
```

Publish changes:

```bash
wrangler publish
```

## Description

This is a next.js site that was migrated from static html/css/js.

The legacy js lives in [`/public/js/main.js`](/public/js/main.js) and is invoked on route changes.

The legacy styling lives in [`/public/styles/styles.scss`](/public/styles/styles.scss). Sass was chosen in order to scope the existing styles to their respective pages without needing major changes to the markup.

## Internationalization (i18n)

This site leverages `next export` to generate static assets that are hosted via a cloudflare worker.

Unfortunately, Next.js i18n routing does not support `next export`. So this site is using a custom implementation of i18n routing via the dynamic route path `[locale]`.

The locale detection and redirect is handled by the cloudflare worker in [`/workers-site/index.js`](/workers-site/index.js)

The i18n resources live in [`/public/locales`](/public/locales).

To add a new locale:

1. Add the locale to [`/next-i18next.config.js`](/next-i18next.config.js)
2. Add the locale to [`/workers-site/index.js`](/workers-site/index.js)
3. Add the locale resources in [`/public/locales`](/public/locales)
