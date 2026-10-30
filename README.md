# HyperElon ($HYPELON) — Website Source

A responsive, image-rich, static website for the **HyperElon** meme token concept, based on **approved Phase 2 Plan A** and the final approved **mixed-format mosaic layout**.

## Quick start

Open `index.html` in a browser. There is no build step, package manager, backend, API key, or framework.

For local development, run a web server from this directory if you prefer:

```bash
python3 -m http.server 8080
```

Then open `http://localhost:8080`.

## Deploy with GitHub Pages

1. Create a GitHub repository (e.g. `hyperelon-website`).
2. Upload **the contents of this directory** to the repository root: `index.html`, `styles.css`, `script.js`, `assets/`, and this file.
3. In the repository, go to **Settings → Pages** and select **Deploy from a branch**, branch `main`, folder `/ (root)`, then save.
4. Open the GitHub Pages URL when the deployment finishes. You can connect a domain later.

Any static web host (e.g. Cloudflare Pages, Netlify, Vercel static deployment) also works: deploy the directory as-is, with no build command.

## Website behavior

- Responsive landing hero, custom Ethereum-inspired styling, eight differently sized artwork panels, story, core themes, community, and footer.
- Anchor navigation, expandable mobile navigation, gallery lightbox with keyboard arrow navigation, Escape to dismiss, and back-to-top link.
- Reduced-motion preference supported; keyboard focus and accessible labels provided.
- No embedded charts, copied reference videos, token trading interface, wallet prompts, or invented social links.
- **Contract address, X, Telegram, and trading links are not known**, so the site correctly shows **COMING SOON** instead of fabricated URLs.

## Assets and approvals

The original **FINAL** files are preserved, unchanged, in `assets/approved/`:

- `main-character.png` — approved main HyperElon character image (Phase 2 V1).
- `hyperelon-logo.png` — approved circular Elon-featured logo (Phase 2 V1).
- `approved-layout-reference.png` — approved revised Plan A website design reference (Phase 2 V2).

The `assets/layout-crops/` folder holds **technical crops of the one approved layout reference**. These are NOT independently generated or newly proposed images. They reproduce *existing pixels* from the approved design to make its individual panels functional and responsive. The FINAL source files themselves are **not edited or replaced**. The favicon is a resized derivative of the approved logo.

If you later commission standalone high-resolution images for individual panels, those should be approved separately before replacing the technical crops.

## Easy edits

- `index.html`: copy, project links, page structure, labels.
- `styles.css`: grid layout, palette, motion, spacing, responsive breakpoints.
- `script.js`: menu and gallery controls.
- `assets/approved/`: do not overwrite without approval.

**When real contract/social links are ready:** Edit the coming-soon pills and disabled buttons in `index.html`; add verified URLs only after independently confirming they belong to HyperElon. Never put a guessed contract address on the page.

## Scope

Frontend only. This package does not create, deploy, or audit an ERC-20 smart contract. The project's current visual branding and website are for an **independent parody**, not an endorsement by Elon Musk or Ethereum.
