# CLAUDE.md

Jeffrey Jahja's personal portfolio: a static site in plain HTML, CSS and JavaScript. No build step, no framework, no package.json. Deployed from `main` with GitHub Pages (repo `jjah0001/Portfolio`).

## Working rules

- **Content lives only in `js/data.js`.** Every section is rendered from the `window.PORTFOLIO` object. Add a feature by adding an optional field to `data.js` and rendering it in `js/main.js`. Don't hard-code content in `index.html`.
- **Don't invent content.** Jeffrey writes his own project descriptions, costs, dates and hobby text. When a placeholder is needed, make it obviously a placeholder ("Replace with…") and say so.
- Keep new `data.js` fields **optional**: missing fields must render nothing, not break the page.
- Document every new field in the comment block above its section in `data.js` and in `README.md`.
- Keep it dependency-free: vanilla JS (IIFE, no modules), and no npm packages in the site itself.

## Files

| Path | What it is |
|---|---|
| `index.html` | Page skeleton: nav, hero, section shells, project `<dialog>`, photo lightbox `<dialog>` |
| `js/data.js` | All content (meta, about, timeline, projects, languages, coding, frameworks, softSkills, interests, travel) |
| `js/main.js` | Renders everything and wires up the interactions. Grouped by section with `/* --- name --- */` banners |
| `css/style.css` | All styles. Colour and font tokens are in `:root` (dark) and `[data-theme="light"]` |
| `images/` | `projects/`, `interests/`, `travel/`, `logos/`, plus `profile-placeholder.svg` and `favicon.svg` |
| `videos/` | Project demo videos (MP4), referenced by `projects[].video` |

## data.js field reference (non-obvious ones)

- `meta.nameAlt`, `nameAltLabel`, `nameAltFont`: the Chinese name 叶骅庆, shown as vertical characters in the hero. The font loads from Google Fonts with `&text=` subsetting (currently "ZCOOL QingKe HuangYou").
- `meta.timezone`: an IANA name that drives the live clock in the hero.
- `projects[]`:
  - `short` (card text, about 20 words) and `details[]` (paragraphs; HTML allowed)
  - `highlights[]`, `skills[]` and `cost { total?, currency?, breakdown[], note }`. Leaving `cost` out hides the cost card.
  - `image` is the cover. `gallery[]` takes strings or `{ src, caption }` objects.
  - `video` plus `videoCaption` render an MP4 in the detail view.
  - `featured: true` makes the card 2×2. `links[]`.
- Skill names in `projects[].skills` that exactly match a `coding[].name` or `frameworks[].items[].name` become cross-links: clicking the chip filters the project grid.
- `coding[]` and `frameworks[]`: `icon` is a Devicon slug (pinned to `devicon@v2.16.0` on jsDelivr). Set `invertDark: true` for black logos. A missing icon falls back to a monogram or no icon.
- `languages[]`: `flag` is an ISO country code (flagcdn.com). Flags are greyed out until hover or click.
- `interests[]`: `image`, `gallery`, and `imagePosition` (CSS object-position, e.g. `"center 28%"`).
- `timeline[].logo`: replaces the icon in the timeline circle.
- `travel.visited[]`:
  - `code` is ISO 3166-1. HK, MO and TW are their own entries.
  - `regions[]` uses ISO 3166-2. For China use the **numeric** codes (`CN-11` Beijing, `CN-31` Shanghai…), because Google GeoChart expects those.
  - `photos[]`, `note`, `mapQuery`.

## Gotchas already hit

- **`url()` inside a CSS custom property resolves relative to `css/`, not the page.** Set background images inline (`style="background-image:url(...)"`), never through `--var`.
- A global rule `[hidden] { display: none !important; }` exists because components set `display`. Use the `hidden` attribute to toggle visibility.
- Scroll-reveal uses the `translate` property, so `transform` stays free for hover and tilt effects. Elements that need both a `.reveal` transition and their own transitions must list both, using `var(--rd)` for the reveal delay (see `.fw-group`, `.soft`, `.interest`).
- `-webkit-text-stroke` on CJK glyphs shows overlapping contours. Use a solid fill for Chinese text.
- Headers use Bank Gothic only if it's installed locally (commercial font). Otherwise they fall back to Michroma from Google Fonts.
- GitHub Pages paths are case-sensitive. Keep image and video filenames lowercase with hyphens.
- Keep photos as JPG or WebP, about 1600px wide and under 500 KB. Keep videos well under GitHub's 100 MB file limit (ideally under 20 MB).

## Testing

There are no automated tests. After changes:

1. `node --check js/main.js`, then load `js/data.js` in Node with a stubbed `window` to confirm it parses.
2. Open the page headless (Playwright/Chromium) at 1440×900 and 390×844 in both themes:
   - check there are no `pageerror`s
   - check `document.documentElement.scrollWidth - innerWidth === 0` (no horizontal scroll)
   - click a project card, the gallery and the lightbox, and use ←/→/Esc
3. External CDNs (Google Fonts, flagcdn, jsDelivr, gstatic charts, Google Maps) must fail gracefully when offline.

Run locally with `python3 -m http.server 8000`.

## Git

- Branch `main`; origin `https://github.com/jjah0001/Portfolio`.
- Jeffrey commits his own content edits. Only commit or push when asked.
