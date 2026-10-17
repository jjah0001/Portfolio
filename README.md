# Portfolio

A hand-built portfolio template in plain HTML, CSS and JavaScript — no build step, no frameworks.

## Open it

Double-click `index.html`, or serve the folder (recommended, so the Google map behaves the same as when hosted):

```bash
python3 -m http.server 8000
# then visit http://localhost:8000
```

## Fill in your content

**Everything you see comes from `js/data.js`.** You shouldn't need to touch the HTML, CSS or the other JS file.

| Section | Where in `data.js` | Notes |
|---|---|---|
| Name, tagline, links | `meta` | `timezone` drives the live clock in the hero; `resume: ""` hides the Résumé button |
| About Me + photo | `about` | Put your picture in `images/` and set `photo: "images/profile.jpg"` (4:5 portrait works best) |
| Education & Work | `timeline` | `type: "education"` or `"work"` |
| **Coding Projects** | `projects` | Square cards → click for details. `skills`, `details`, `highlights`, `cost.breakdown`, `links`, optional `image`, `featured: true` for a double-size card |
| Languages | `languages` | `flag` is a 2-letter country code (`"au"`, `"id"`, `"cn"`…). Flags glow on hover; click for proficiency |
| Coding languages | `coding` | `icon` is a [Devicon](https://devicon.dev) name (`"python"`, `"cplusplus"`…). Leave it out for a text monogram |
| Libraries & frameworks | `frameworks` | Grouped; same `icon` rules |
| Soft skills | `softSkills` | |
| Interests | `interests` | Icon names are listed at the top of `data.js` |
| Travel map | `travel.visited` | ISO country codes; optional `regions` (`"AU-VIC"`, `"US-CA"`) let visitors zoom into a country |

Skill names in `projects[].skills` that match a coding language or framework name are linked automatically: clicking that skill in the Skills section filters the project grid.

## Fonts

Headers use **Bank Gothic** when it's installed on the visitor's machine, otherwise the free Google font **Michroma** (same wide, squared look). Bank Gothic is a commercial font — if you have a web licence, put the `.woff2` in `fonts/` and uncomment the `url()` line at the top of `css/style.css`.

## Colours

All colours are variables at the top of `css/style.css` (`:root` for dark, `[data-theme="light"]` for light). Change `--accent` to re-theme the whole site.

## Deploy

It's a static site — push the folder to GitHub and enable **GitHub Pages**, or drag it into Netlify / Vercel.

## External services used

- Google Fonts (Michroma, IBM Plex Sans / Mono)
- flagcdn.com — flag images
- Devicon via jsDelivr — language/framework logos
- Google Charts GeoChart — the world map
- Google Maps embed — the place viewer

The page still works offline; those pieces just fall back gracefully.
