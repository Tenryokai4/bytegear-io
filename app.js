// ===== PRODUCT DATA — 24 products =====
const products = [
  // ── INPUT: MOUSE (3) ──
  { id: 1,  name: "Logitech MX Master 3S",        category:"input",  subcat:"pro",    type:"Mouse",       price:99.99,  old:129.99, icon:"🖱️", badge:"BEST" },
  { id: 2,  name: "Razer DeathAdder V3 Pro",       category:"input",  subcat:"gaming", type:"Mouse",       price:79.99,  old:109.99, icon:"🖱️", badge:"HOT" },
  { id: 3,  name: "BenQ ZOWIE EC2-C",              category:"input",  subcat:"gaming", type:"Mouse",       price:69.99,  old:89.99,  icon:"🖱️", badge:null },

  // ── INPUT: KEYBOARD (3) ──
  { id: 4,  name: "Apex Pro TKL Wireless",         category:"input",  subcat:"gaming", type:"Keyboard",    price:189.99, old:229.99, icon:"⌨️", badge:"NEW" },
  { id: 5,  name: "Razer BlackWidow V4",           category:"input",  subcat:"gaming", type:"Keyboard",    price:139.99, old:169.99, icon:"⌨️", badge:"HOT" },
  { id: 6,  name: "Keychron K8 Pro",               category:"input",  subcat:"pro",    type:"Keyboard",    price:109.99, old:129.99, icon:"⌨️", badge:null },

  // ── INPUT: MICROPHONE (3) ──
  { id: 7,  name: "Blue Yeti X Pro",               category:"input",  subcat:"pro",    type:"Microphone",  price:169.99, old:199.99, icon:"🎙️", badge:"TOP" },
  { id: 8,  name: "HyperX QuadCast S",             category:"input",  subcat:"gaming", type:"Microphone",  price:139.99, old:159.99, icon:"🎙️", badge:null },
  { id: 9,  name: "Rode NT-USB Mini",              category:"input",  subcat:"pro",    type:"Microphone",  price:99.99,  old:119.99, icon:"🎙️", badge:"SALE" },

  // ── INPUT: WEBCAM (3) ──
  { id: 10, name: "Logitech C920 HD Pro",          category:"input",  subcat:"pro",    type:"Webcam",      price:79.99,  old:99.99,  icon:"📷", badge:null },
  { id: 11, name: "Razer Kiyo Pro Ultra",          category:"input",  subcat:"gaming", type:"Webcam",      price:199.99, old:249.99, icon:"📷", badge:"NEW" },
  { id: 12, name: "Elgato Facecam Pro",            category:"input",  subcat:"pro",    type:"Webcam",      price:299.99, old:349.99, icon:"📷", badge:"PRO" },

  // ── OUTPUT: MONITOR (3) ──
  { id: 13, name: "LG 27GP850 NanoIPS 165Hz",     category:"output", subcat:"gaming", type:"Monitor",     price:329.99, old:399.99, icon:"🖥️", badge:"HOT" },
  { id: 14, name: "Dell UltraSharp U2723DE",       category:"output", subcat:"pro",    type:"Monitor",     price:699.99, old:799.99, icon:"🖥️", badge:"BEST" },
  { id: 15, name: "ASUS ROG Swift PG279QM 240Hz", category:"output", subcat:"gaming", type:"Monitor",     price:879.99, old:999.99, icon:"🖥️", badge:"GAMING" },

  // ── OUTPUT: SPEAKERS (3) ──
  { id: 16, name: "Yamaha HS5 Studio Monitor",    category:"output", subcat:"pro",    type:"Speakers",    price:399.99, old:449.99, icon:"🔊", badge:null },
  { id: 17, name: "Audioengine A2+ Wireless",     category:"output", subcat:"pro",    type:"Speakers",    price:269.99, old:299.99, icon:"🔊", badge:null },
  { id: 18, name: "Logitech G560 RGB",            category:"output", subcat:"gaming", type:"Speakers",    price:149.99, old:199.99, icon:"🔊", badge:"SALE" },

  // ── OUTPUT: HEADPHONES (3) ──
  { id: 19, name: "Sony WH-1000XM5",              category:"output", subcat:"pro",    type:"Headphones",  price:349.99, old:399.99, icon:"🎧", badge:"NEW" },
  { id: 20, name: "SteelSeries Arctis Nova 7",    category:"output", subcat:"gaming", type:"Headphones",  price:149.99, old:179.99, icon:"🎧", badge:null },
  { id: 21, name: "Bose QuietComfort 45",         category:"output", subcat:"pro",    type:"Headphones",  price:279.99, old:329.99, icon:"🎧", badge:"TOP" },

  // ── OUTPUT: PRINTER (3) ──
  { id: 22, name: "Canon PIXMA Pro-200",          category:"output", subcat:"pro",    type:"Printer",     price:499.99, old:599.99, icon:"🖨️", badge:"SALE" },
  { id: 23, name: "HP LaserJet Pro M404dn",       category:"output", subcat:"pro",    type:"Printer",     price:319.99, old:379.99, icon:"🖨️", badge:null },
  { id: 24, name: "Epson EcoTank ET-4850",        category:"output", subcat:"pro",    type:"Printer",     price:449.99, old:529.99, icon:"🖨️", badge:"ECO" },

  // ── COMBO BUNDLES (3) ──
  { id: 25, name: "Gamer's Desk Bundle — Monitor + Keyboard + Mouse",    category:"combo", subcat:"gaming", type:"Combo", price:549.99, old:719.97, icon:"🎮", badge:"BUNDLE" },
  { id: 26, name: "Creator Studio — Printer + Monitor + Webcam",         category:"combo", subcat:"pro",    type:"Combo", price:899.99, old:1149.97,icon:"🖨️", badge:"BUNDLE" },
  { id: 27, name: "Podcaster Pro — Headphone + Microphone + Speaker",   category:"combo", subcat:"pro",    type:"Combo", price:499.99, old:669.97, icon:"🎙️", badge:"BUNDLE" },
];

// ===== 54 REVIEWS =====
const allReviews = [
  // MOUSE reviews
  { product:"mouse", stars:5, text:"Logitech MX Master 3S is a beast for design work. Super smooth scrolling, perfect grip. Worth every rupee!", name:"Arjun Mehta", loc:"Mumbai, India", avatar:"AM" },
  { product:"mouse", stars:5, text:"Razer DeathAdder V3 Pro changed my gaming completely. Zero lag wireless and insane precision. Love it!", name:"Vikram Singh", loc:"Delhi, India", avatar:"VS" },
  { product:"mouse", stars:4, text:"Bought the MX Master for office work. Comfortable for long hours but a bit heavy for gaming. Great overall.", name:"Priya Nair", loc:"Kochi, India", avatar:"PN" },
  { product:"mouse", stars:5, text:"The BenQ ZOWIE is my go-to for FPS games. No software needed, plug-and-play perfection.", name:"James Carter", loc:"Texas, USA", avatar:"JC" },
  { product:"mouse", stars:5, text:"Exceptional build quality on the DeathAdder. Battery lasts 3 weeks! Shipping to the UK was quick too.", name:"Oliver Hughes", loc:"London, UK", avatar:"OH" },
  { product:"mouse", stars:4, text:"MX Master 3S connected to 3 devices simultaneously - switching is a breeze. Missing a few more DPI options.", name:"Tanaka Hiroshi", loc:"Tokyo, Japan", avatar:"TH" },

  // KEYBOARD reviews
  { product:"keyboard", stars:5, text:"Apex Pro TKL Wireless is absolutely phenomenal. Customizable actuation and the OLED display is a nice touch!", name:"Rohit Sharma", loc:"Pune, India", avatar:"RS" },
  { product:"keyboard", stars:5, text:"Keychron K8 Pro — beautiful clicky sound, hot-swappable switches. Perfect for typing all day. Very happy!", name:"Sneha Iyer", loc:"Chennai, India", avatar:"SI" },
  { product:"keyboard", stars:5, text:"Razer BlackWidow V4 feels premium. The wrist rest is comfortable and the RGB is stunning in dim light.", name:"Karan Joshi", loc:"Bengaluru, India", avatar:"KJ" },
  { product:"keyboard", stars:4, text:"Great keyboard from ByteGear IO. Arrived well-packed. Keychron K8 Pro typing feel is top notch.", name:"Emily Thompson", loc:"Toronto, Canada", avatar:"ET" },
  { product:"keyboard", stars:5, text:"Apex Pro TKL is the best gaming keyboard I've ever used. Worth the premium price completely.", name:"Luca Rossi", loc:"Milan, Italy", avatar:"LR" },
  { product:"keyboard", stars:5, text:"Ordered the BlackWidow V4 for streaming setup. Clicky keys sound great on mic. Colleagues love it too!", name:"Fatima Al-Rashid", loc:"Dubai, UAE", avatar:"FA" },

  // MONITOR reviews
  { product:"monitor", stars:5, text:"LG 27GP850 is GORGEOUS. 165Hz makes games feel buttery smooth. Colors are vivid and true. Amazing!", name:"Aditya Kumar", loc:"Hyderabad, India", avatar:"AK" },
  { product:"monitor", stars:5, text:"Dell UltraSharp for design work — color accuracy is unreal. My Photoshop projects never looked better!", name:"Meera Pillai", loc:"Thiruvananthapuram, India", avatar:"MP" },
  { product:"monitor", stars:5, text:"ASUS ROG Swift 240Hz — competitive gaming on this panel is just unfair. My reaction time improved noticeably!", name:"Yash Malhotra", loc:"Jaipur, India", avatar:"YM" },
  { product:"monitor", stars:5, text:"Dell UltraSharp arrived flawlessly. The USB-C docking makes my MacBook setup incredibly clean.", name:"Sophie Laurent", loc:"Paris, France", avatar:"SL" },
  { product:"monitor", stars:4, text:"LG 27GP850 is fantastic for the price. Minor backlight bleed in corners but barely noticeable in gaming.", name:"Carlos Mendez", loc:"Mexico City, Mexico", avatar:"CM" },
  { product:"monitor", stars:5, text:"ROG Swift 240Hz for e-sports. Zero ghosting, zero blur. This monitor makes me look like a pro player!", name:"Seo Jun-ho", loc:"Seoul, South Korea", avatar:"SJ" },

  // HEADPHONES reviews
  { product:"headphones", stars:5, text:"Sony WH-1000XM5 ANC is witchcraft. Cancelled out my entire office. Pure bliss during work hours.", name:"Deepak Verma", loc:"Noida, India", avatar:"DV" },
  { product:"headphones", stars:5, text:"SteelSeries Arctis Nova 7 for gaming — surround sound is incredible. Chat clarity is the best I've heard.", name:"Ananya Gupta", loc:"Lucknow, India", avatar:"AG" },
  { product:"headphones", stars:5, text:"Bose QC45 — traveled from Bengaluru to London. Wore them the whole flight and ears didn't hurt at all!", name:"Ishaan Patel", loc:"Ahmedabad, India", avatar:"IP" },
  { product:"headphones", stars:5, text:"Sony XM5 sound quality is other-worldly. LDAC support makes my FLAC music sound incredible.", name:"Marco Bianchi", loc:"Rome, Italy", avatar:"MB" },
  { product:"headphones", stars:4, text:"Bose QC45 comfort is 10/10. Sound is slightly bass-light for my taste but ANC is best in class.", name:"Amira Hassan", loc:"Cairo, Egypt", avatar:"AH" },
  { product:"headphones", stars:5, text:"Arctis Nova 7 wireless for 40 hours straight gaming session. Battery lasted, comfort held. Unreal!", name:"Tyler Brooks", loc:"Austin, USA", avatar:"TB" },

  // MICROPHONE reviews
  { product:"microphone", stars:5, text:"Blue Yeti X Pro makes my podcast sound professional. Four polar patterns and incredible clarity. Love it!", name:"Riya Chakraborty", loc:"Kolkata, India", avatar:"RC" },
  { product:"microphone", stars:5, text:"HyperX QuadCast S — the RGB looks stunning on stream and voice quality blew my viewers away!", name:"Nikhil Rao", loc:"Bengaluru, India", avatar:"NR" },
  { product:"microphone", stars:5, text:"Rode NT-USB Mini is compact but sounds massive. Perfect for home studio recording on a budget.", name:"Sanjay Tiwari", loc:"Bhopal, India", avatar:"ST" },
  { product:"microphone", stars:5, text:"Blue Yeti X Pro — been using it for 6 months of daily streaming. Zero issues, zero noise. Flawless!", name:"Hannah Mueller", loc:"Berlin, Germany", avatar:"HM" },
  { product:"microphone", stars:4, text:"QuadCast S looks amazing on camera. Sound is very good. Wish it had a shock mount included at this price.", name:"Nadia Kozlova", loc:"Moscow, Russia", avatar:"NK" },
  { product:"microphone", stars:5, text:"Rode NT-USB Mini — recording voiceovers and the warmth of the audio is just stunning. Highly recommended!", name:"Chen Wei", loc:"Shanghai, China", avatar:"CW" },

  // WEBCAM reviews
  { product:"webcam", stars:5, text:"Elgato Facecam Pro at 4K60fps makes my stream look like a broadcast studio. Game changer for content!", name:"Rahul Bose", loc:"Mumbai, India", avatar:"RB" },
  { product:"webcam", stars:5, text:"Logitech C920 HD — after 2 years of video calls, still the sharpest image. Autofocus is lightning fast!", name:"Kavya Krishnan", loc:"Coimbatore, India", avatar:"KK" },
  { product:"webcam", stars:5, text:"Razer Kiyo Pro Ultra in low light is jaw-dropping. Sony sensor makes night streams look like daytime!", name:"Abhishek Mishra", loc:"Varanasi, India", avatar:"AM2" },
  { product:"webcam", stars:5, text:"Elgato Facecam Pro — absolutely worth it for professional meetings. Clients always comment on my video quality.", name:"Jessica Park", loc:"Sydney, Australia", avatar:"JP" },
  { product:"webcam", stars:4, text:"Logitech C920 is reliable and clear. Background blur works decently. Great for work-from-home calls.", name:"Lars Andersen", loc:"Copenhagen, Denmark", avatar:"LA" },
  { product:"webcam", stars:5, text:"Razer Kiyo Pro Ultra just demolished my old webcam. HDR mode is breathtaking for streaming outdoors.", name:"Diego Flores", loc:"Buenos Aires, Argentina", avatar:"DF" },

  // SPEAKERS reviews
  { product:"speakers", stars:5, text:"Yamaha HS5 speakers in my home studio — absolutely flat response. My mixes translate perfectly now!", name:"Suresh Menon", loc:"Bengaluru, India", avatar:"SM" },
  { product:"speakers", stars:5, text:"Audioengine A2+ Wireless — tiny but LOUD. Connected to my TV via Bluetooth and sound fills the room!", name:"Pooja Sharma", loc:"Delhi, India", avatar:"PS" },
  { product:"speakers", stars:5, text:"Logitech G560 RGB speakers for gaming — the haptic vibration with bass is insane. Neighbours complained!", name:"Akash Dubey", loc:"Chandigarh, India", avatar:"AD" },
  { product:"speakers", stars:5, text:"Yamaha HS5 — every audio professional should own these. Uncolored sound for critical mixing sessions.", name:"Mateus Oliveira", loc:"São Paulo, Brazil", avatar:"MO" },
  { product:"speakers", stars:4, text:"Audioengine A2+ sound quality is excellent for size. Bluetooth occasionally drops but quickly reconnects.", name:"Ingrid Larsson", loc:"Stockholm, Sweden", avatar:"IL" },
  { product:"speakers", stars:5, text:"G560 RGB gaming speakers — the 360 degree RGB syncs with my whole setup. Sound quality surprised me!", name:"Kevin O'Brien", loc:"Dublin, Ireland", avatar:"KO" },

  // PRINTER reviews
  { product:"printer", stars:5, text:"Canon PIXMA Pro-200 — printed my photography portfolio and the prints look gallery-quality. Stunning colors!", name:"Neha Singh", loc:"Agra, India", avatar:"NS" },
  { product:"printer", stars:5, text:"HP LaserJet Pro M404dn — printing 200 pages a day for office. Not a single jam in 6 months. Reliable beast!", name:"Ramesh Kumar", loc:"Coimbatore, India", avatar:"RK" },
  { product:"printer", stars:5, text:"Epson EcoTank ET-4850 — the ink tanks are genius. Haven't bought a cartridge in 8 months. Saving so much!", name:"Aarti Jain", loc:"Surat, India", avatar:"AJ" },
  { product:"printer", stars:5, text:"Canon Pro-200 prints are museum-quality. Used it for art prints and customers can't believe it's inkjet!", name:"Sarah Mitchell", loc:"Vancouver, Canada", avatar:"SMi" },
  { product:"printer", stars:4, text:"HP LaserJet Pro is built like a tank. Setup took 10 minutes and it's been flawless since. Great product.", name:"Willem van der Berg", loc:"Amsterdam, Netherlands", avatar:"WB" },
  { product:"printer", stars:5, text:"EcoTank ET-4850 — best printer investment ever. Print quality is outstanding and running costs are minimal.", name:"Pradeep Narayanan", loc:"Mysuru, India", avatar:"PR" },

  // COMBO reviews
  { product:"combo", stars:5, text:"Gamer's Desk Bundle is incredible value! Monitor + keyboard + mouse all arrived together, perfectly matched.", name:"Gaurav Yadav", loc:"Kanpur, India", avatar:"GY" },
  { product:"combo", stars:5, text:"Creator Studio bundle for my home office — the monitor alone is worth the bundle price. Everything pairs perfectly!", name:"Parveen Kaur", loc:"Amritsar, India", avatar:"PK" },
  { product:"combo", stars:5, text:"Podcaster Pro bundle — all three devices work together seamlessly. Started my podcast same day it arrived!", name:"Alex Turner", loc:"Manchester, UK", avatar:"AT" },
  { product:"combo", stars:5, text:"Bought the gaming bundle as a gift for my son. He said it's the best gift ever. ByteGear IO never disappoints!", name:"Sunita Rao", loc:"Visakhapatnam, India", avatar:"SR2" },
  { product:"combo", stars:5, text:"Creator bundle is a steal! Having matching devices from one store makes the workspace look so clean and professional.", name:"Nina Petrov", loc:"Prague, Czech Republic", avatar:"NP" },
];

// ===== STATE =====
let cart = JSON.parse(localStorage.getItem('bgcart') || '[]');
let currentFilter = 'all';
let displayedCount = 9;
let reviewFilter = 'all';
let reviewDisplayed = 8;

// ===== INIT =====
document.addEventListener('DOMContentLoaded', () => {
  renderProducts();
  updateCartUI();
  startCountdown();
  navScrollEffect();
  renderReviews();
});

// ===== NAVBAR SCROLL =====
function navScrollEffect() {
  window.addEventListener('scroll', () => {
    const nav = document.getElementById('navbar');
    nav.classList.toggle('scrolled', window.scrollY > 50);
  });
}

// ===== PRODUCTS =====
function renderProducts() {
  const grid = document.getElementById('products-grid');
  let filtered = products.filter(p => {
    if (currentFilter === 'all')    return true;
    if (currentFilter === 'input')  return p.category === 'input';
    if (currentFilter === 'output') return p.category === 'output';
    if (currentFilter === 'combo')  return p.category === 'combo';
    if (currentFilter === 'gaming') return p.subcat === 'gaming';
    if (currentFilter === 'pro')    return p.subcat === 'pro';
    return true;
  });
  const visible = filtered.slice(0, displayedCount);
  grid.innerHTML = visible.map(p => productCard(p)).join('');
}

function productCard(p) {
  const disc = Math.round(((p.old - p.price) / p.old) * 100);
  const inCart = cart.find(c => c.id === p.id);
  const inrPrice = Math.round(p.price * USD_TO_INR).toLocaleString('en-IN');
  const inrOld = Math.round(p.old * USD_TO_INR).toLocaleString('en-IN');
  return `
  <div class="product-card">
    <div class="product-image">
      <span style="font-size:3.5rem;z-index:1;position:relative">${p.icon}</span>
      ${p.badge ? `<span class="product-badge">${p.badge}</span>` : ''}
    </div>
    <div class="product-info">
      <p class="product-category">${p.type}</p>
      <h3 class="product-name">${p.name}</h3>
      <p class="product-rating">★★★★★ <span>(${(Math.floor(Math.random()*900)+100).toLocaleString()})</span></p>
      <div class="product-price">
        <span class="price-current">₹${inrPrice}</span>
        <span class="price-old">₹${inrOld}</span>
        <span style="font-size:0.75rem;color:var(--accent2);font-weight:700">-${disc}%</span>
      </div>
      <div class="qty-row" id="qty-row-${p.id}">
        ${inCart
          ? `<div class="qty-controls">
               <button class="qty-btn" onclick="changeQty(${p.id},-1)">−</button>
               <span class="qty-num" id="qty-${p.id}">${inCart.qty}</span>
               <button class="qty-btn" onclick="changeQty(${p.id},1)">+</button>
             </div>`
          : `<button class="add-to-cart" onclick="addToCart(${p.id})">Add to Cart</button>`
        }
      </div>
    </div>
  </div>`;
}

function filterProducts(filter, btn) {
  currentFilter = filter;
  displayedCount = 9;
  document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  renderProducts();
}

function filterCategory(cat) {
  currentFilter = cat;
  displayedCount = 9;
  const section = document.getElementById('input-devices');
  section.scrollIntoView({ behavior: 'smooth' });
  document.querySelectorAll('.filter-bar .filter-btn').forEach(b => {
    const txt = b.textContent.trim().toLowerCase();
    b.classList.toggle('active', txt === cat || (cat === 'combo' && txt === 'combos'));
  });
  renderProducts();
}

function loadMore() {
  displayedCount += 9;
  renderProducts();
}

// ===== CART =====
function addToCart(id) {
  const p = products.find(x => x.id === id);
  if (!p) return;
  const existing = cart.find(c => c.id === id);
  if (existing) { existing.qty += 1; }
  else { cart.push({ ...p, qty: 1 }); }
  saveCart();
  updateCartUI();
  refreshQtyRow(id);
  showToast(`✓ ${p.name} added to cart`);
}

function changeQty(id, delta) {
  const item = cart.find(c => c.id === id);
  if (!item) return;
  item.qty += delta;
  if (item.qty <= 0) {
    cart = cart.filter(c => c.id !== id);
  }
  saveCart();
  updateCartUI();
  refreshQtyRow(id);
  if (document.getElementById('cart-modal').classList.contains('active')) renderCartItems();
}

function refreshQtyRow(id) {
  const row = document.getElementById(`qty-row-${id}`);
  if (!row) return;
  const inCart = cart.find(c => c.id === id);
  if (inCart) {
    row.innerHTML = `<div class="qty-controls">
      <button class="qty-btn" onclick="changeQty(${id},-1)">−</button>
      <span class="qty-num" id="qty-${id}">${inCart.qty}</span>
      <button class="qty-btn" onclick="changeQty(${id},1)">+</button>
    </div>`;
  } else {
    row.innerHTML = `<button class="add-to-cart" onclick="addToCart(${id})">Add to Cart</button>`;
  }
}

function removeFromCart(id) {
  cart = cart.filter(c => c.id !== id);
  saveCart();
  updateCartUI();
  refreshQtyRow(id);
  renderCartItems();
}

function saveCart() { localStorage.setItem('bgcart', JSON.stringify(cart)); }

function updateCartUI() {
  const count = cart.reduce((s, c) => s + c.qty, 0);
  document.getElementById('cart-count').textContent = count;
}

function openCart() {
  document.getElementById('cart-overlay').classList.add('active');
  document.getElementById('cart-modal').classList.add('active');
  renderCartItems();
}

function closeCart() {
  document.getElementById('cart-overlay').classList.remove('active');
  document.getElementById('cart-modal').classList.remove('active');
}

function renderCartItems() {
  const el = document.getElementById('cart-items');
  const footer = document.getElementById('cart-footer');
  if (cart.length === 0) {
    el.innerHTML = `<div style="text-align:center;padding:3rem;color:var(--text-muted)">
      <div style="font-size:3rem;margin-bottom:1rem">🛒</div>
      <p>Your cart is empty</p>
    </div>`;
    footer.innerHTML = '';
    return;
  }
  el.innerHTML = cart.map(c => `
    <div class="cart-item">
      <div class="cart-item-icon">${c.icon}</div>
      <div class="cart-item-info">
        <h4>${c.name}</h4>
        <div class="cart-qty-controls">
          <button class="qty-btn sm" onclick="changeQty(${c.id},-1)">−</button>
          <span class="qty-num">${c.qty}</span>
          <button class="qty-btn sm" onclick="changeQty(${c.id},1)">+</button>
        </div>
      </div>
      <span class="cart-item-price">₹${Math.round(c.price * c.qty * USD_TO_INR).toLocaleString('en-IN')}</span>
      <button class="remove-item" onclick="removeFromCart(${c.id})">✕</button>
    </div>`).join('');

  const total = cart.reduce((s, c) => s + c.price * c.qty, 0);
  const totalInr = Math.round(total * USD_TO_INR).toLocaleString('en-IN');
  footer.innerHTML = `
    <div class="cart-total">
      <span>Total</span>
      <span>₹${totalInr}</span>
    </div>
    <button class="btn-primary" style="width:100%;margin-bottom:0.75rem" onclick="checkout()">Checkout</button>
    <button class="btn-ghost" style="width:100%" onclick="closeCart()">Continue Shopping</button>`;
}

function checkout() {
  closeCart();
  openPayment();
}

// ===== DEAL ADD TO CART =====
function addDealToCart(id) {
  addToCart(id);
}

// ===== SEARCH =====
function toggleSearch() {
  const bar = document.getElementById('search-bar');
  bar.classList.toggle('active');
  if (bar.classList.contains('active')) document.getElementById('search-input').focus();
}

function liveSearch(query) {
  const results = document.getElementById('search-results');
  if (!query.trim()) { results.style.display = 'none'; return; }
  const matches = products.filter(p =>
    p.name.toLowerCase().includes(query.toLowerCase()) ||
    p.type.toLowerCase().includes(query.toLowerCase())
  ).slice(0, 6);
  if (!matches.length) { results.style.display = 'none'; return; }
  results.style.display = 'block';
  results.innerHTML = matches.map(p => `
    <div class="search-result-item" onclick="addToCart(${p.id});document.getElementById('search-results').style.display='none'">
      <span style="font-size:1.5rem">${p.icon}</span>
      <div>
        <div style="font-size:0.9rem;font-weight:700">${p.name}</div>
        <div style="font-size:0.78rem;color:var(--text-muted)">${p.type} — ₹${Math.round(p.price * USD_TO_INR).toLocaleString('en-IN')}</div>
      </div>
    </div>`).join('');
}

// ===== COUNTDOWN =====
function startCountdown() {
  const end = new Date();
  end.setDate(end.getDate() + 2);
  end.setHours(23, 59, 59, 0);
  function update() {
    const diff = end - new Date();
    if (diff <= 0) { clearInterval(timer); return; }
    const d = Math.floor(diff / 86400000);
    const h = Math.floor((diff % 86400000) / 3600000);
    const m = Math.floor((diff % 3600000) / 60000);
    const s = Math.floor((diff % 60000) / 1000);
    document.getElementById('countdown').innerHTML = `
      <div class="countdown-unit"><span class="countdown-num">${String(d).padStart(2,'0')}</span><span class="countdown-label">Days</span></div>
      <div class="countdown-unit"><span class="countdown-num">${String(h).padStart(2,'0')}</span><span class="countdown-label">Hours</span></div>
      <div class="countdown-unit"><span class="countdown-num">${String(m).padStart(2,'0')}</span><span class="countdown-label">Mins</span></div>
      <div class="countdown-unit"><span class="countdown-num">${String(s).padStart(2,'0')}</span><span class="countdown-label">Secs</span></div>`;
  }
  update();
  const timer = setInterval(update, 1000);
}

// ===== REVIEWS =====
function renderReviews() {
  const grid = document.getElementById('reviews-grid');
  if (!grid) return;
  let filtered = reviewFilter === 'all' ? allReviews : allReviews.filter(r => r.product === reviewFilter);
  const visible = filtered.slice(0, reviewDisplayed);
  grid.innerHTML = visible.map((r, i) => `
    <div class="testimonial-card ${i === 1 ? 'featured-review' : ''}">
      <div class="stars">${'★'.repeat(r.stars)}${'☆'.repeat(5 - r.stars)}</div>
      <p>"${r.text}"</p>
      <div class="reviewer">
        <span class="avatar">${r.avatar.substring(0,2)}</span>
        <div>
          <span style="display:block;font-size:0.88rem;font-weight:700;color:var(--text-primary)">${r.name}</span>
          <span style="font-size:0.78rem;color:var(--text-muted)">${r.loc} · <span style="color:var(--accent);text-transform:capitalize">${r.product}</span></span>
        </div>
      </div>
    </div>`).join('');
}

function filterReviews(tag, btn) {
  reviewFilter = tag;
  reviewDisplayed = 9;
  document.querySelectorAll('#reviews .filter-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  renderReviews();
}

function loadMoreReviews() {
  reviewDisplayed += 9;
  renderReviews();
}

// ===== FORM =====
function submitForm(e) {
  e.preventDefault();
  showToast("✓ Message sent! We'll get back to you soon.");
  e.target.reset();
}

// ===== MOBILE MENU =====
function toggleMenu() {
  const links = document.querySelector('.nav-links');
  const open = links.style.display === 'flex';
  links.style.display = open ? 'none' : 'flex';
  if (!open) {
    Object.assign(links.style, { flexDirection:'column', position:'absolute', top:'70px', left:'0', right:'0', background:'var(--bg-card)', padding:'1rem', borderBottom:'1px solid var(--border)', zIndex:'999' });
  }
}

// ===== TOAST =====
function showToast(msg) {
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), 2800);
}

// ===== PAYMENT SYSTEM =====
const USD_TO_INR = 83.5;

function openPayment() {
  if (cart.length === 0) { showToast('Your cart is empty!'); return; }
  const total = cart.reduce((s, c) => s + c.price * c.qty, 0);
  const inr = (total * USD_TO_INR).toFixed(2);
  const items = cart.reduce((s, c) => s + c.qty, 0);
  document.getElementById('pay-summary').innerHTML =
    `<span>🛒 ${items} item${items > 1 ? 's' : ''}</span><span>Total: <strong>$${total.toFixed(2)}</strong> &nbsp;|&nbsp; ₹${inr}</span>`;
  document.getElementById('upi-amount').value = `₹${inr}`;
  document.getElementById('upi-btn-amt').textContent = inr;
  document.getElementById('paypal-amount').value = `$${total.toFixed(2)}`;
  document.getElementById('paypal-btn-amt').textContent = `$${total.toFixed(2)}`;
  document.getElementById('wise-amount').value = `$${total.toFixed(2)}`;
  document.getElementById('wise-btn-amt').textContent = `$${total.toFixed(2)}`;
  document.getElementById('card-btn-amt').textContent = total.toFixed(2);
  switchPayTab('upi', document.querySelector('.pay-tab'));
  document.getElementById('payment-overlay').classList.add('active');
  document.getElementById('payment-modal').classList.add('active');
}

function closePayment() {
  document.getElementById('payment-overlay').classList.remove('active');
  document.getElementById('payment-modal').classList.remove('active');
}

function switchPayTab(tab, btn) {
  document.querySelectorAll('.pay-tab').forEach(b => b.classList.remove('active'));
  document.querySelectorAll('.pay-panel').forEach(p => p.classList.remove('active'));
  btn.classList.add('active');
  document.getElementById(`panel-${tab}`).classList.add('active');
}

function formatCard(input) {
  let v = input.value.replace(/\D/g, '').substring(0, 16);
  input.value = v.replace(/(.{4})/g, '$1 ').trim();
}

function processPayment(method) {
  if (method === 'UPI') {
    const upiId = document.getElementById('upi-id').value.trim();
    if (!upiId || !upiId.includes('@')) { showToast('⚠ Enter a valid UPI ID (e.g. name@upi)'); return; }
  }
  if (method === 'PayPal') {
    const email = document.getElementById('paypal-email').value.trim();
    if (!email || !email.includes('@')) { showToast('⚠ Enter your PayPal email'); return; }
  }
  if (method === 'Wise') {
    const email = document.getElementById('wise-email').value.trim();
    const country = document.getElementById('wise-country').value;
    if (!email || !email.includes('@')) { showToast('⚠ Enter your Wise email'); return; }
    if (!country) { showToast('⚠ Select your country'); return; }
  }
  if (method === 'Card') {
    const num = document.getElementById('card-number').value.replace(/\s/g,'');
    const exp = document.getElementById('card-expiry').value;
    const cvv = document.getElementById('card-cvv').value;
    const name = document.getElementById('card-name').value.trim();
    if (!name) { showToast('⚠ Enter cardholder name'); return; }
    if (num.length < 16) { showToast('⚠ Enter a valid 16-digit card number'); return; }
    if (!exp || exp.length < 5) { showToast('⚠ Enter card expiry MM/YY'); return; }
    if (cvv.length < 3) { showToast('⚠ Enter valid CVV'); return; }
  }
  const orderId = "BG-ORD-" + Math.random().toString(36).substring(2,7).toUpperCase();
  const total = cart.reduce((s, c) => s + c.price * c.qty, 0);
  const inr = (total * USD_TO_INR).toFixed(2);
  closePayment();
  const msgs = {
    UPI: `₹${inr} paid via UPI. Thank you for shopping at ByteGear IO! 🎉`,
    PayPal: `$${total.toFixed(2)} paid via PayPal. Confirmation sent to your email! 🎉`,
    Wise: `$${total.toFixed(2)} sent via Wise. Transfer in progress! 🎉`,
    Card: `$${total.toFixed(2)} charged to your card. Order confirmed! 🎉`,
  };
  document.getElementById('success-msg').textContent = msgs[method];
  document.getElementById('success-order-id').textContent = orderId;
  document.getElementById('success-overlay').classList.add('active');
  document.getElementById('success-modal').classList.add('active');
  cart = [];
  saveCart();
  updateCartUI();
  renderProducts();
}

function closeSuccess() {
  document.getElementById('success-overlay').classList.remove('active');
  document.getElementById('success-modal').classList.remove('active');
  showToast('✓ Order placed! Check your email for updates.');
}