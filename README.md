# 🧶 KroshaKala — Handmade Crochet, Bathinda

A beautiful, lightweight website for **KroshaKala** — a home-grown crochet
business from Bathinda, Punjab. The name comes from *Krosha* (ਕਰੋਸ਼ੀਆ, the
Punjabi word for crochet) + *Kala* (art).

**Tagline:** *Handmade with love in Bathinda* 💛

## ✨ What's inside

- **Pure HTML/CSS/JS** — no build step, no framework, loads instantly
- **Custom SVG logo** (yarn ball + crochet hook + heart) in `assets/logo.svg`
- **13 products** across 5 categories (toys, baby, accessories, home décor, flowers),
  each with hand-drawn SVG artwork
- **Category filters** on the shop grid
- **WhatsApp ordering** — every product button opens WhatsApp with a pre-filled
  order message (the easiest way for a home business to take orders)
- **Our Story, Custom Orders, Testimonials** sections, fully mobile responsive

## 🚀 Getting started

Just open `index.html` in a browser, or serve it locally:

```bash
python3 -m http.server 8000
# then visit http://localhost:8000
```

### Free hosting on GitHub Pages

Repo **Settings → Pages → Deploy from branch → main / (root)** — done.
The site will be live at `https://<username>.github.io/crochet/`.

## 🛠️ Customizing for Mom

1. **WhatsApp number** — in `js/main.js`, set `WHATSAPP_NUMBER` to her real
   number (country code first, no `+`), e.g. `"9198XXXXXXXX"`.
2. **Products & prices** — edit the `PRODUCTS` array in `js/main.js`.
   To use real photos, replace a product's `art` SVG with
   `<img src="assets/photos/your-photo.jpg" alt="...">`.
3. **Instagram & email** — update the links in the footer of `index.html`.
4. **Testimonials** — swap in real customer messages in `index.html`.
