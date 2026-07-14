# BizCity Group - Digital Sales Catalogue

Local working copy of the sales-team catalogue. Develop here, then push to WordPress once images/videos and pricing are in.

## Files
- `index.html` - the catalogue (self-contained: all CSS/JS inline). Double-click to open in a browser.
- `assets/images/` - drop location & space photos here.
- `assets/video/` - drop walkthrough / hero videos here (or use hosted links).

## How to work locally
1. Double-click `index.html` to preview.
2. Edit the file; refresh the browser to see changes.
3. Save a PDF anytime via the **Save PDF** button (top-right) or Ctrl+P → Save as PDF.

## Placeholders to fill (search the file for `[`)
- `[ Photo ]` slots → replace the `<div class="slot">…</div>` with `<img src="assets/images/NAME.jpg" alt="...">`.
- `[ Video - … ]` slots → replace with `<video src="assets/video/NAME.mp4" poster="assets/images/NAME.jpg" controls></video>` (or an embed).
- `[AED …]` package prices + the package inclusions → confirm real numbers with operations.
- `[ Client testimonial ]`, phone, email, WhatsApp/app links in the contact section.

## Approval before publishing
Per standing rule: prepare a before/after summary for management sign-off before the catalogue (copy, pricing, package split) goes live or is shared with the sales team.

## Pushing to WordPress (later)
Options, to decide when content is ready:
- **Page embed** - publish `index.html` as a page/section via Flatsome (site uses Flatsome UX Builder, not Elementor). Inline CSS is self-contained so it slots in.
- **Standalone file** - upload `index.html` + `assets/` to the server and link it (e.g. `/catalogue/`).
- **PDF download** - attach the exported PDF to a "Download catalogue" button.

Auth for WP REST edits uses the DPAPI-stored `SEO` app password (see the parent `bizcity-seo` project). Remember PS 5.1 needs UTF-8 bytes on REST bodies.

## Live preview / share link
Digital artifact version: https://claude.ai/code/artifact/57e78e1a-6a5b-48a4-90ec-6c5ca078a4cd
