# Haraj CS470 — UX Redesign

Arabic RTL interactive marketplace redesign for CS470 Human–Computer Interaction. This update replaces this project's previous interface with the completed redesign, as authorized by the project owner. The earlier version remains in Git history.

Live prototype: https://haraj-cs470-prototype.onrender.com/

## Run locally

No dependencies or installation required. With Python 3:

```sh
python3 -m http.server 4173
```

Open http://localhost:4173. Serve through HTTP because app.js is an ES module.

## Source and deployment

`index.html`, `style.css`, `app.js` and `assets/` comprise the complete buildless static application. Render's existing static-site configuration serves the repository root with build command `true`. Hash routes support direct navigation and refresh without rewrite rules. No database, authentication, server, secrets or marketplace API is required. Some older assets are retained to keep the repository update narrowly scoped.

## Features

Six connected screens: Home; Search/Browse with local search, category/city/price filters and sorting; Product Details and gallery; guided Add Listing with image preview, validation, review and confirmation; Favorites; simulated Messages. Four conceptual layouts are available at `#/concepts`.

24 fictional seed listings cover cars, electronics, property, furniture, services and other goods in Riyadh, Jeddah and Dammam. Favorites, drafts, locally published ads and conversation histories persist through browser localStorage. Data stays on the visitor's device. Image uploads are resized locally; storage errors show a warning.

## UX and HCI documentation

- `UX_DESIGN_NOTES.md`: observed reference concerns versus proposed improvements; HCI mapping; accessibility; flows and suggested evaluation tasks.
- `CONCEPTUAL_LAYOUTS.md`: four layouts and rationale.
- `QA_REPORT.md`: developer verification and remaining limits.
- `ASSETS.md`: bundled Unsplash photography source IDs.

No user research, survey results, participants or improvement metrics are fabricated. Conduct real usability testing separately.

## Limitations

Independent academic demonstration, not affiliated with Haraj. Offers, sellers and messages are fictional. No real commerce or seller communication. Gallery image 2 is an alternate crop, and photographs are reused for related demonstration listings. Storage is local to each browser. Noto Sans Arabic loads from Google Fonts with system-font fallback. Mobile/tablet and screen-reader evaluation still need further verification.
