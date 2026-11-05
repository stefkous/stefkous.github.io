# Site v2

Local redesign on branch `sitev2`. No publish or deployment was performed.

## Preview

Run `python3 -m http.server 8000` from the repository and open http://localhost:8000.
The site is plain HTML, CSS and JavaScript; no install or build step is required. Existing GitHub Pages static hosting remains compatible.

## Implementation

- `index.html`: Home → Experience → Featured Projects → Education → Contact, metadata and initial theme setup.
- `css/site-v2.css`: responsive layout, square grid, light/dark palettes, focus states and reduced-motion support.
- `js/site-v2.js`: persistent theme selection and accessible experience tabs (arrow keys, Home/End).
- `img/previews/`: six resized still previews derived from original project images. Original assets remain intact.
- All 19 project URLs and original detailed pages are preserved. Six projects are featured; the remaining 13 appear in an expandable archive on the homepage. Legacy pages retain their original styling.

## Validation

Passed JavaScript syntax, whitespace checks, section order, unique IDs, homepage anchor and asset resolution, and existence of all 19 project routes. Programmatic interaction checks passed default/click/keyboard tab selection, wraparound, mobile tab orientation, theme persistence and system preference handling, including unavailable local storage. These use a mocked DOM and do not replace real browser testing.

Browser visual QA and mobile overflow checks remain outstanding: no connected browser or Computer Use permission was available. External project resources and embedded media retain their original URLs; their third-party availability was not audited. There is no build process to run.

## Content to confirm

The View CV action reuses the Google Drive document already linked from the old About page. Confirm that this is the current CV and is publicly viewable, or replace its URL in `index.html`.

## Before publishing

Review desktop and mobile layouts in both themes, keyboard navigation and reduced-motion settings. Publishing requires the owner's explicit approval.

## Technical project presentation examples

Urban Vibes, The Vibe of the City and Phoenix Poblenou now have method-led homepage previews and expandable case studies: question, workflow, method, output and scope. Original names, academic team context and links to complete project credits remain visible. No individual ownership, awards, production deployment or performance claims were added. Award names/years and individual contributions are still needed before presenting those credentials.

## Image overlays and full case studies

The three example homepage previews now reveal their technical summary over the image on hover or keyboard focus. Touch devices display the summary inline. The original project URLs for Phoenix Poblenou, Urban Vibes and The Vibe of the City now use the site-v2 design with question, method, workflow and output sections followed by preserved original documentation and credits. Shared theme logic lives in `js/theme.js`. Original embedded resources retain their URLs. Local asset/link, JavaScript syntax and whitespace checks passed; browser visual QA remains outstanding.

Background refinement: static warped grid behind the transparent header, larger stationary faded regions, and a moving soft fade limited to the homepage hero. Reduced motion disables that fade animation.

Latest background: a completely static CSS dotted grid with broad, non-repeating fade regions. The warped SVG and background animation are no longer used.

## Awards and publications

Section order: Home → Experience → Awards & Publications → Projects → Education → Contact. Academic entries are drawn from the public LinkedIn profile: Phoenix Poblenou (CityStreet5 proceedings, 2022, pp. 335–354), Rewilding Luxembourg (Responsive Cities proceedings, 2021, pp. 246–259), and Hyperblock (CIVITAS conference presentation, 2021). Hyperblock is labelled as a presentation rather than an unverified proceedings paper. Sischain award date is December 2021, confirmed by the owner. Three compact project thumbnails share a desktop row from 900px; smaller screens retain responsive layouts.

Interaction direction: restrained reveals on hover and keyboard focus, with tap/click to pin details. Recognition entries use compact expandable summaries; Escape closes them. The landing-page divider is restored, and Bryden Wood is titled Software Developer / Spatial Data Scientist. No continuous background motion is used.

## Current review state

The homepage uses a static dotted background, section dividers, a header that gains a soft background after the landing section, selectable experience roles, a compact recognition timeline with the FemTech award always visible, and a horizontal education year selector. Four editorial project previews (Rewilding Luxembourg, Phoenix Poblenou, Hyperblock and Sischain) use original analytical images, caption-level credentials and plain tool/method labels. Detailed project pages for Phoenix Poblenou, Urban Vibes and The Vibe of the City retain their original URLs and documentation. The unused `img/grid-field.svg` records the earlier background exploration and is not loaded by the site.

Final local verification before commit: JavaScript syntax and Git whitespace checks passed. Browser visual QA remains outstanding. No publishing or push is included in this commit.
