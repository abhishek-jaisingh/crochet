/* ============================================================
   KroshaKala — products, filtering, WhatsApp ordering
   ============================================================ */

// ⚠️ IMPORTANT: replace with Mom's real WhatsApp number (country code + number, no "+")
const WHATSAPP_NUMBER = "919999999999";

const PRODUCTS = [
  {
    id: "teddy",
    name: "Cuddle Teddy Bear",
    tag: "toys",
    tagLabel: "Amigurumi Toys",
    desc: "A soft, squishy bear with a stitched-on smile. Perfect first friend for little ones.",
    price: 799,
    art: `
      <svg viewBox="0 0 120 120">
        <circle cx="40" cy="34" r="13" fill="#caa183"/><circle cx="80" cy="34" r="13" fill="#caa183"/>
        <circle cx="40" cy="34" r="6.5" fill="#ecd3bd"/><circle cx="80" cy="34" r="6.5" fill="#ecd3bd"/>
        <circle cx="60" cy="52" r="26" fill="#d9af8d"/>
        <ellipse cx="60" cy="60" rx="13" ry="10" fill="#f3e0cd"/>
        <ellipse cx="60" cy="57" rx="4" ry="3.2" fill="#6b4a36"/>
        <circle cx="50" cy="48" r="2.8" fill="#3b2a20"/><circle cx="70" cy="48" r="2.8" fill="#3b2a20"/>
        <ellipse cx="60" cy="96" rx="27" ry="22" fill="#d9af8d"/>
        <ellipse cx="60" cy="100" rx="14" ry="11" fill="#f3e0cd"/>
        <path d="M60 84 c-4 -6 -12 -3 -12 3 c0 5 6 8 12 12 c6 -4 12 -7 12 -12 c0 -6 -8 -9 -12 -3z" fill="#e76480"/>
      </svg>`
  },
  {
    id: "bunny",
    name: "Floppy-Ear Bunny",
    tag: "toys",
    tagLabel: "Amigurumi Toys",
    desc: "Long droopy ears, tiny pink nose. Available in pastel pink, mint and cream.",
    price: 699,
    art: `
      <svg viewBox="0 0 120 120">
        <ellipse cx="44" cy="26" rx="9" ry="22" fill="#f5d7de" transform="rotate(-14 44 26)"/>
        <ellipse cx="76" cy="26" rx="9" ry="22" fill="#f5d7de" transform="rotate(14 76 26)"/>
        <ellipse cx="44" cy="28" rx="4.5" ry="15" fill="#e8a0b4" transform="rotate(-14 44 28)"/>
        <ellipse cx="76" cy="28" rx="4.5" ry="15" fill="#e8a0b4" transform="rotate(14 76 28)"/>
        <circle cx="60" cy="60" r="25" fill="#fbeef1"/>
        <circle cx="51" cy="56" r="2.8" fill="#3b2a20"/><circle cx="69" cy="56" r="2.8" fill="#3b2a20"/>
        <path d="M57 65 q3 3 6 0" stroke="#3b2a20" stroke-width="2.4" fill="none" stroke-linecap="round"/>
        <ellipse cx="60" cy="62" rx="3.4" ry="2.6" fill="#e76480"/>
        <ellipse cx="60" cy="100" rx="24" ry="18" fill="#fbeef1"/>
        <circle cx="60" cy="100" r="9" fill="#f5d7de"/>
      </svg>`
  },
  {
    id: "octopus",
    name: "Baby Octopus Buddy",
    tag: "toys",
    tagLabel: "Amigurumi Toys",
    desc: "Curly little tentacles that tiny fingers love to hold. A NICU-favourite comfort toy.",
    price: 549,
    art: `
      <svg viewBox="0 0 120 120">
        <circle cx="60" cy="50" r="28" fill="#9ac5b1"/>
        <path d="M36 42 a28 28 0 0 1 48 -4 M34 54 a28 28 0 0 0 52 -2" stroke="#7dab95" stroke-width="2.6" fill="none"/>
        <circle cx="50" cy="48" r="3" fill="#3b2a20"/><circle cx="70" cy="48" r="3" fill="#3b2a20"/>
        <path d="M54 58 q6 5 12 0" stroke="#3b2a20" stroke-width="2.4" fill="none" stroke-linecap="round"/>
        <ellipse cx="42" cy="56" rx="5" ry="3" fill="#f5b8b8"/><ellipse cx="78" cy="56" rx="5" ry="3" fill="#f5b8b8"/>
        <path d="M38 74 q-8 12 2 18 M50 78 q-4 14 6 18 M70 78 q4 14 -6 18 M82 74 q8 12 -2 18"
              stroke="#9ac5b1" stroke-width="9" fill="none" stroke-linecap="round"/>
      </svg>`
  },
  {
    id: "booties",
    name: "Baby Booties Set",
    tag: "baby",
    tagLabel: "Baby & Kids",
    desc: "Whisper-soft booties in baby-safe cotton yarn. Sizes 0–12 months, any colour.",
    price: 449,
    art: `
      <svg viewBox="0 0 120 120">
        <ellipse cx="42" cy="74" rx="22" ry="15" fill="#e8a0b4"/>
        <circle cx="34" cy="62" r="14" fill="#e8a0b4"/>
        <circle cx="34" cy="62" r="14" fill="none" stroke="#d2829a" stroke-width="2.4" stroke-dasharray="4 4"/>
        <path d="M22 76 q20 10 40 0" stroke="#d2829a" stroke-width="2.4" fill="none" stroke-dasharray="4 4"/>
        <circle cx="34" cy="56" r="4" fill="#fff"/>
        <ellipse cx="82" cy="84" rx="22" ry="15" fill="#9ac5b1"/>
        <circle cx="74" cy="72" r="14" fill="#9ac5b1"/>
        <circle cx="74" cy="72" r="14" fill="none" stroke="#7dab95" stroke-width="2.4" stroke-dasharray="4 4"/>
        <path d="M62 86 q20 10 40 0" stroke="#7dab95" stroke-width="2.4" fill="none" stroke-dasharray="4 4"/>
        <circle cx="74" cy="66" r="4" fill="#fff"/>
      </svg>`
  },
  {
    id: "blanket",
    name: "Granny Square Blanket",
    tag: "baby",
    tagLabel: "Baby & Kids",
    desc: "A heritage-style patchwork blanket, stitched square by square. Heirloom quality.",
    price: 2499,
    art: `
      <svg viewBox="0 0 120 120">
        <g transform="rotate(-4 60 60)">
          <rect x="22" y="22" width="36" height="36" rx="6" fill="#e8a0b4"/>
          <rect x="62" y="22" width="36" height="36" rx="6" fill="#9ac5b1"/>
          <rect x="22" y="62" width="36" height="36" rx="6" fill="#f3c98b"/>
          <rect x="62" y="62" width="36" height="36" rx="6" fill="#b5a8d4"/>
          <circle cx="40" cy="40" r="8" fill="#fff5ec"/><circle cx="80" cy="40" r="8" fill="#fff5ec"/>
          <circle cx="40" cy="80" r="8" fill="#fff5ec"/><circle cx="80" cy="80" r="8" fill="#fff5ec"/>
          <rect x="22" y="22" width="76" height="76" rx="8" fill="none" stroke="#d2829a" stroke-width="2.6" stroke-dasharray="5 4"/>
        </g>
      </svg>`
  },
  {
    id: "beanie",
    name: "Pom-Pom Beanie",
    tag: "baby",
    tagLabel: "Baby & Kids",
    desc: "Chunky, warm and topped with the fluffiest pom-pom. Kid and adult sizes.",
    price: 599,
    art: `
      <svg viewBox="0 0 120 120">
        <circle cx="60" cy="30" r="11" fill="#f5d7de"/>
        <path d="M28 84 a32 34 0 0 1 64 0 z" fill="#e76480"/>
        <path d="M36 62 a32 30 0 0 1 48 0 M31 72 a34 32 0 0 1 58 0" stroke="#c94d68" stroke-width="2.6" fill="none"/>
        <rect x="24" y="82" width="72" height="14" rx="7" fill="#d2829a"/>
        <path d="M30 84 v10 M40 84 v10 M50 84 v10 M60 84 v10 M70 84 v10 M80 84 v10 M90 84 v10" stroke="#c06b84" stroke-width="2.4"/>
      </svg>`
  },
  {
    id: "tote",
    name: "Market Tote Bag",
    tag: "accessories",
    tagLabel: "Accessories",
    desc: "Sturdy, stretchy and stylish — carries everything from books to sabzi in style.",
    price: 899,
    art: `
      <svg viewBox="0 0 120 120">
        <path d="M40 36 q0 -18 20 -18 q20 0 20 18" stroke="#b08968" stroke-width="6" fill="none" stroke-linecap="round"/>
        <path d="M28 40 h64 l-7 56 q0 6 -8 6 h-34 q-8 0 -8 -6 z" fill="#f3c98b"/>
        <path d="M30 54 h60 M32 68 h56 M34 82 h52" stroke="#dba94f" stroke-width="2.6" stroke-dasharray="5 4"/>
        <path d="M40 44 v50 M55 44 v54 M70 44 v54 M84 44 v50" stroke="#dba94f" stroke-width="2.2" opacity=".6"/>
        <path d="M60 58 c-4 -6 -12 -3 -12 3 c0 5 6 8 12 12 c6 -4 12 -7 12 -12 c0 -6 -8 -9 -12 -3z" fill="#e76480"/>
      </svg>`
  },
  {
    id: "scrunchies",
    name: "Scrunchie Trio",
    tag: "accessories",
    tagLabel: "Accessories",
    desc: "Three handmade hair scrunchies in colours of your choice. Gentle on hair.",
    price: 299,
    art: `
      <svg viewBox="0 0 120 120">
        <circle cx="44" cy="44" r="20" fill="none" stroke="#e8a0b4" stroke-width="13" stroke-dasharray="7 4"/>
        <circle cx="78" cy="58" r="20" fill="none" stroke="#9ac5b1" stroke-width="13" stroke-dasharray="7 4"/>
        <circle cx="52" cy="84" r="20" fill="none" stroke="#f3c98b" stroke-width="13" stroke-dasharray="7 4"/>
      </svg>`
  },
  {
    id: "keychain",
    name: "Mini Heart Keychains",
    tag: "accessories",
    tagLabel: "Accessories",
    desc: "Tiny crochet hearts on a golden ring. Sweet little gifts and return favours.",
    price: 149,
    art: `
      <svg viewBox="0 0 120 120">
        <circle cx="60" cy="30" r="12" fill="none" stroke="#d4a93c" stroke-width="5"/>
        <path d="M60 42 v12" stroke="#d4a93c" stroke-width="4" stroke-linecap="round"/>
        <path d="M60 66 c-11 -16 -34 -8 -34 10 c0 14 19 22 34 34 c15 -12 34 -20 34 -34 c0 -18 -23 -26 -34 -10z" fill="#e76480"/>
        <path d="M36 76 q24 -12 48 0 M40 90 q20 10 40 0" stroke="#c94d68" stroke-width="2.4" fill="none" stroke-dasharray="4 4"/>
      </svg>`
  },
  {
    id: "coasters",
    name: "Mandala Coaster Set",
    tag: "home",
    tagLabel: "Home Décor",
    desc: "Set of 4 colourful mandala coasters that brighten every chai time.",
    price: 499,
    art: `
      <svg viewBox="0 0 120 120">
        <circle cx="60" cy="60" r="36" fill="#9ac5b1"/>
        <circle cx="60" cy="60" r="36" fill="none" stroke="#7dab95" stroke-width="3" stroke-dasharray="6 5"/>
        <circle cx="60" cy="60" r="24" fill="#f3c98b"/>
        <circle cx="60" cy="60" r="24" fill="none" stroke="#dba94f" stroke-width="3" stroke-dasharray="6 5"/>
        <circle cx="60" cy="60" r="12" fill="#e8a0b4"/>
        <circle cx="60" cy="60" r="4" fill="#fff5ec"/>
      </svg>`
  },
  {
    id: "wallhanging",
    name: "Dreamy Wall Hanging",
    tag: "home",
    tagLabel: "Home Décor",
    desc: "Boho crochet wall art with tassels — instant warmth for any room.",
    price: 1199,
    art: `
      <svg viewBox="0 0 120 120">
        <rect x="24" y="22" width="72" height="6" rx="3" fill="#b08968"/>
        <path d="M30 28 q30 36 60 0 l0 0 q-12 30 -30 30 q-18 0 -30 -30z" fill="#e8a0b4"/>
        <path d="M36 36 q24 22 48 0" stroke="#d2829a" stroke-width="2.4" fill="none" stroke-dasharray="4 4"/>
        <path d="M42 60 v26 M52 66 v30 M60 68 v34 M68 66 v30 M78 60 v26" stroke="#d2829a" stroke-width="4" stroke-linecap="round"/>
      </svg>`
  },
  {
    id: "bouquet",
    name: "Forever Tulip Bouquet",
    tag: "flowers",
    tagLabel: "Flowers",
    desc: "A bouquet that never wilts. Tulips, roses or sunflowers — mix your own.",
    price: 999,
    art: `
      <svg viewBox="0 0 120 120">
        <path d="M48 70 q-2 -28 -14 -36 M60 72 v-40 M72 70 q2 -28 14 -36" stroke="#7dab95" stroke-width="4" fill="none" stroke-linecap="round"/>
        <path d="M26 22 q8 -10 9 2 q9 -8 7 4 q-2 10 -10 10 q-8 0 -6 -16z" fill="#e76480"/>
        <ellipse cx="60" cy="26" rx="9" ry="12" fill="#f3c98b"/>
        <path d="M54 20 v12 M60 16 v16 M66 20 v12" stroke="#dba94f" stroke-width="2"/>
        <path d="M94 22 q-8 -10 -9 2 q-9 -8 -7 4 q2 10 10 10 q8 0 6 -16z" fill="#b5a8d4"/>
        <path d="M40 70 h40 l-8 32 q0 4 -6 4 h-12 q-6 0 -6 -4 z" fill="#fdebe0"/>
        <path d="M42 80 h36 M44 90 h32" stroke="#e8c4a8" stroke-width="2.4" stroke-dasharray="4 4"/>
        <path d="M38 72 h44" stroke="#e8a0b4" stroke-width="5" stroke-linecap="round"/>
      </svg>`
  },
  {
    id: "rose",
    name: "Single Forever Rose",
    tag: "flowers",
    tagLabel: "Flowers",
    desc: "One perfect crochet rose with a wrapped stem. Love, that lasts a lifetime.",
    price: 249,
    art: `
      <svg viewBox="0 0 120 120">
        <path d="M60 56 v44" stroke="#7dab95" stroke-width="5" stroke-linecap="round"/>
        <path d="M60 78 q-14 -4 -16 -16 q14 2 16 16z" fill="#9ac5b1"/>
        <path d="M60 88 q14 -4 16 -16 q-14 2 -16 16z" fill="#9ac5b1"/>
        <circle cx="60" cy="40" r="22" fill="#e76480"/>
        <path d="M60 40 m-14 0 a14 14 0 0 1 28 0 a10 10 0 0 1 -20 2 a6 6 0 0 1 12 0" stroke="#c94d68" stroke-width="3" fill="none" stroke-linecap="round"/>
      </svg>`
  },
];

/* ---------- render products ---------- */
const grid = document.getElementById("productGrid");

function whatsappLink(message) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

function renderProducts() {
  grid.innerHTML = PRODUCTS.map((p) => `
    <article class="product-card" data-tag="${p.tag}">
      <div class="product-img">${p.art}</div>
      <div class="product-info">
        <span class="product-tag">${p.tagLabel}</span>
        <h3 class="product-name">${p.name}</h3>
        <p class="product-desc">${p.desc}</p>
        <div class="product-foot">
          <span class="product-price">₹${p.price}<small>made to order</small></span>
          <a class="order-btn" target="_blank" rel="noopener"
             href="${whatsappLink(`Hello KroshaKala! 🧶 I'd like to order: ${p.name} (₹${p.price}). Please share details.`)}">
            Order on WhatsApp
          </a>
        </div>
      </div>
    </article>
  `).join("");
}
renderProducts();

/* ---------- category filters ---------- */
document.getElementById("filters").addEventListener("click", (e) => {
  const chip = e.target.closest(".filter-chip");
  if (!chip) return;
  document.querySelectorAll(".filter-chip").forEach((c) => c.classList.remove("active"));
  chip.classList.add("active");
  const filter = chip.dataset.filter;
  document.querySelectorAll(".product-card").forEach((card) => {
    card.classList.toggle("hide", filter !== "all" && card.dataset.tag !== filter);
  });
});

/* ---------- generic WhatsApp links ---------- */
const genericMsg = "Hello KroshaKala! 🧶 I saw your website and I'd love to know more.";
const customMsg = "Hello KroshaKala! 🧶 I have an idea for a custom crochet order. Can we discuss?";
document.getElementById("fabWhatsapp").href = whatsappLink(genericMsg);
document.getElementById("footerWhatsapp").href = whatsappLink(genericMsg);
document.getElementById("customWhatsapp").href = whatsappLink(customMsg);

/* ---------- mobile nav ---------- */
const navToggle = document.getElementById("navToggle");
const navLinks = document.getElementById("navLinks");
navToggle.addEventListener("click", () => navLinks.classList.toggle("open"));
navLinks.addEventListener("click", (e) => {
  if (e.target.tagName === "A") navLinks.classList.remove("open");
});

/* ---------- footer year ---------- */
document.getElementById("year").textContent = new Date().getFullYear();
