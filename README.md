# AutoRevive NG website

Static multi-page website for GitHub Pages. No build step or package installation is required.

## Files
- `index.html` — homepage
- `services.html` — service areas
- `gallery.html` — illustrative reference gallery
- `how-it-works.html` — project process
- `about.html` — brand positioning
- `faq.html` — common questions
- `contact.html` — enquiry form that prepares a WhatsApp message
- `css/style.css` — shared responsive styles
- `js/main.js` — navigation, footer year and WhatsApp form handling

## Important before publishing
1. Confirm that the WhatsApp number and email in `contact.html`, `index.html`, `faq.html`, `about.html`, and `js/main.js` are correct.
2. Replace the illustrative Unsplash images only with images you own, have permission to use, or are licensed to use. Gallery images are clearly labelled as reference imagery.
3. Review all service descriptions and any claims about supplier relationships, legal requirements, workshop locations, prices and turnaround times. The current copy deliberately avoids guaranteeing outcomes or quoting unverified prices.
4. The contact form is static: it opens a prefilled WhatsApp message for the visitor to review and send. It does not store form data on a server.

## Publish with GitHub Pages
1. Download this ZIP and extract it.
2. Open your `xanforge/autorevive-ng` repository.
3. Upload the *contents* of the extracted folder to the repository root (not an extra nested folder).
4. Replace files with matching names, add new files if any, and commit the changes.
5. Open **Settings → Pages** and confirm the existing publishing branch/folder remains selected.
6. Wait for the deployment to finish, then open the live site and test every page on mobile.

## Test checklist
- All six navigation destinations open.
- Mobile menu opens, closes on link selection and responds to Escape.
- Contact form validates required fields and opens WhatsApp with the enquiry.
- Reference images load on mobile data; replace any unavailable image URL.
- No project is described as completed unless it genuinely is.
