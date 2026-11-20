/**
 * FAST BITE — Frontend JavaScript Application
 */

const API_BASE = 'http://localhost:3000';
const DELIVERY_FEE = 15000;

// Multilingual Dictionary
const i18n = {
    uz: {
        nav_home: "Bosh sahifa", nav_menu: "Menyu", nav_about: "Biz haqimizda", nav_offers: "Aksiyalar", nav_contact: "Aloqa",
        hero_badge: "🔥 100% PREMIUM TARKIB & OLOVDAGI TA'M",
        hero_title: "MAZALI TA'M — <br>UNUTILMAS LAZZAT!",
        hero_subtitle: "Har bir luqmada haqiqiy shohona lazzat, saralangan go'sht va maxsus firma souslari uyg'unligi.",
        btn_order: "Buyurtma berish", btn_menu: "Menyuni ko'rish",
        stat_speed: "Tezkor yetkazish", stat_rating: "20k+ Mamnun mijoz",
        menu_subtitle: "BIZNING TAOMNOMA", menu_title: "Ishtaha Ochar Fast Food Menyu", menu_desc: "Sevgan kategoriyangizni tanlang yoki qidiruv orqali tezda toping.",
        search_placeholder: "Taom nomini qidirish...",
        cat_all: "Barchasi", cat_burgers: "Burgerlar", cat_lavash: "Lavashlar", cat_hotdogs: "Hot-doglar", cat_pizza: "Pitsalar", cat_fries: "Kartoshka fri", cat_nuggets: "Nuggets", cat_doner: "Donerlar", cat_drinks: "Ichimliklar", cat_combo: "Combo setlar",
        offers_subtitle: "CHEKLANGAN AKSIYA", offers_title: "Super Chegirmali Kunlar", offers_desc: "Quyidagi promokodlarni savatchada qo'llang va ulkan chegirmalarga ega bo'ling!",
        btn_use_code: "Koddan foydalanish",
        promo_desc_1: "Barcha burger va setlarga 10% chegirma oling.",
        promo_desc_2: "Barcha pitseeriya va double burgerlarga 20% chegirma.",
        promo_desc_3: "Yangi mijozlar uchun ilk buyurtmada maxsus 15% chegirma.",
        about_subtitle: "BIZ HAQIMIZDA", about_title: "Faqat Sifat va Tabiiy Lazzat", about_exp: "Yillik Tajriba",
        about_text1: "FAST BITE — bu shunchaki fast food emas, bu yuqori restoran madaniyati va tezkor xizmat ko'rsatish standartlarining mukammal uyg'unligi.",
        about_text2: "Biz faqat 100% halol va yangi mahsulotlardan foydalanamiz. Kotletlarimiz olovda qovurilib, nonlarimiz maxsus retsept bo'yicha har kuni pishiriladi.",
        footer_hours: "Ish Vaqti", footer_contact: "Aloqa", footer_desc: "Toshkentdagi eng zamonaviy va mazali 3D fast food restorani.",
        cart_title: "Savatcha", promo_placeholder: "Promokod (masalan: FAST10)", btn_apply: "Qo'llash",
        sum_sub: "Mahsulotlar:", sum_disc: "Chegirma:", sum_delivery: "Yetkazib berish:", sum_total: "Jami:", btn_checkout: "Buyurtma berish",
        modal_title: "Buyurtmani Rasmiylashtirish", lbl_name: "To'liq ism *", lbl_phone: "Telefon raqam *", lbl_address: "Yetkazib berish manzili *",
        lbl_notes: "Qo'shimcha izoh", lbl_payment: "To'lov turi", pay_cash: "Naqd pul", pay_card: "Karta orqali", btn_confirm: "Buyurtmani Tasdiqlash"
    },
    ru: {
        nav_home: "Главная", nav_menu: "Меню", nav_about: "О нас", nav_offers: "Акции", nav_contact: "Контакты",
        hero_badge: "🔥 100% ПРЕМИУМ СОСТАВ И ВКУС НА УГЛЯХ",
        hero_title: "ВКУСНЫЙ ВКУС — <br>НЕЗАБЫВАЕМЫЙ АРОМАТ!",
        hero_subtitle: "Истинное королевское наслаждение в каждом кусочке, отборное мясо и фирменные соусы.",
        btn_order: "Заказать", btn_menu: "Смотреть меню",
        stat_speed: "Быстрая доставка", stat_rating: "20k+ Довольных клиентов",
        menu_subtitle: "НАШЕ МЕНЮ", menu_title: "Аппетитное Фаст Фуд Меню", menu_desc: "Выберите любимую категорию или найдите через поиск.",
        search_placeholder: "Поиск блюда...",
        cat_all: "Все", cat_burgers: "Бургеры", cat_lavash: "Лаваш", cat_hotdogs: "Хот-доги", cat_pizza: "Пицца", cat_fries: "Фри", cat_nuggets: "Наггетсы", cat_doner: "Донер", cat_drinks: "Напитки", cat_combo: "Комбо",
        offers_subtitle: "ОГРАНИЧЕННАЯ АКЦИЯ", offers_title: "Супер Скидочные Дни", offers_desc: "Используйте промокоды в корзине и получите огромные скидки!",
        btn_use_code: "Использовать код",
        promo_desc_1: "Получите скидку 10% на все бургеры и комбо.",
        promo_desc_2: "Скидка 20% на всю пиццу и двойные бургеры.",
        promo_desc_3: "Специальная скидка 15% на первый заказ для новых клиентов.",
        about_subtitle: "О НАС", about_title: "Только Качество и Настоящий Вкус", about_exp: "Лет Опыта",
        about_text1: "FAST BITE — это не просто фастфуд, это идеальное сочетание высокой ресторанной культуры.",
        about_text2: "Мы используем только 100% халяльные и свежие ингредиенты.",
        footer_hours: "Время работы", footer_contact: "Контакты", footer_desc: "Самый современный и вкусный 3D фаст-фуд ресторан в Ташкенте.",
        cart_title: "Корзина", promo_placeholder: "Промокод (например: FAST10)", btn_apply: "Применить",
        sum_sub: "Товары:", sum_disc: "Скидка:", sum_delivery: "Доставка:", sum_total: "Итого:", btn_checkout: "Оформить заказ",
        modal_title: "Оформление Заказа", lbl_name: "Полное имя *", lbl_phone: "Номер телефона *", lbl_address: "Адрес доставки *",
        lbl_notes: "Комментарий", lbl_payment: "Способ оплаты", pay_cash: "Наличные", pay_card: "По карте", btn_confirm: "Подтвердить заказ"
    },
    en: {
        nav_home: "Home", nav_menu: "Menu", nav_about: "About Us", nav_offers: "Offers", nav_contact: "Contact",
        hero_badge: "🔥 100% PREMIUM INGREDIENTS & FIRE TASTE",
        hero_title: "DELICIOUS TASTE — <br>UNFORGETTABLE FLAVOR!",
        hero_subtitle: "True royal delight in every bite with selected meats and signature sauces.",
        btn_order: "Order Now", btn_menu: "View Menu",
        stat_speed: "Fast Delivery", stat_rating: "20k+ Happy Customers",
        menu_subtitle: "OUR MENU", menu_title: "Appetizing Fast Food Menu", menu_desc: "Select your favorite category or search instantly.",
        search_placeholder: "Search dish...",
        cat_all: "All", cat_burgers: "Burgers", cat_lavash: "Lavash", cat_hotdogs: "Hot-dogs", cat_pizza: "Pizza", cat_fries: "French Fries", cat_nuggets: "Nuggets", cat_doner: "Doner", cat_drinks: "Drinks", cat_combo: "Combos",
        offers_subtitle: "LIMITED OFFER", offers_title: "Super Discount Days", offers_desc: "Apply promo codes in cart and get huge discounts!",
        btn_use_code: "Use Code",
        promo_desc_1: "Get 10% off all burgers and sets.",
        promo_desc_2: "20% off all pizzas and double burgers.",
        promo_desc_3: "Special 15% discount on your first order.",
        about_subtitle: "ABOUT US", about_title: "Only Quality & Real Taste", about_exp: "Years Experience",
        about_text1: "FAST BITE is not just fast food, it's the perfect combination of restaurant culture.",
        about_text2: "We use only 100% halal and fresh ingredients prepared daily.",
        footer_hours: "Working Hours", footer_contact: "Contact", footer_desc: "The most modern and delicious 3D fast food restaurant in Tashkent.",
        cart_title: "Shopping Cart", promo_placeholder: "Promo code (e.g. FAST10)", btn_apply: "Apply",
        sum_sub: "Subtotal:", sum_disc: "Discount:", sum_delivery: "Delivery:", sum_total: "Total:", btn_checkout: "Checkout",
        modal_title: "Checkout Order", lbl_name: "Full Name *", lbl_phone: "Phone Number *", lbl_address: "Delivery Address *",
        lbl_notes: "Additional Notes", lbl_payment: "Payment Method", pay_cash: "Cash", pay_card: "Credit Card", btn_confirm: "Confirm Order"
    }
};

// Menu Products Database
const MENU_PRODUCTS = [
    { id: 1, name: "Qirollik 3D Burger", category: "Burgerlar", price: 48000, rating: 4.9, desc: "100% mol go'shti, cheddor pishlog'i, pomidor va firma sousi.", image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=700&q=85" },
    { id: 2, name: "Tutunli BBQ Burger", category: "Burgerlar", price: 52000, rating: 4.8, desc: "Qarsildoq piyoz, BBQ sousi va sersuv mol go'shti.", image: "https://images.unsplash.com/photo-1553979459-d2229ba7433b?auto=format&fit=crop&w=700&q=85" },
    { id: 3, name: "Maxsus Tovuqli Lavash", category: "Lavashlar", price: 38000, rating: 4.7, desc: "Tovuq filesi, pishloq, maxsus oq sous va qarsildoq chips.", image: "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?auto=format&fit=crop&w=700&q=85" },
    { id: 4, name: "Qirollik Hot-Dog", category: "Hot-doglar", price: 26000, rating: 4.6, desc: "Gril sosiska, xantal, ketchup va qarsildoq piyoz.", image: "https://images.unsplash.com/photo-1619740455993-9e612b1af08a?auto=format&fit=crop&w=700&q=85" },
    { id: 5, name: "Pepperoni Pitsa (30 sm)", category: "Pitsalar", price: 89000, rating: 4.9, desc: "Mozzarella pishlog'i, pomidor sousi va pepperoni kolbasa.", image: "https://images.unsplash.com/photo-1628840042765-356cda07504e?auto=format&fit=crop&w=700&q=85" },
    { id: 6, name: "Katta Kartoshka Fri", category: "Kartoshka fri", price: 22000, rating: 4.8, desc: "Tashqi tomoni qarsildoq, ichi yumshoq oltinrang fri.", image: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=700&q=85" },
    { id: 7, name: "Tovuq Naggetslari (9 dona)", category: "Nuggets", price: 32000, rating: 4.7, desc: "Tabiiy tovuq go'shtidan tayyorlangan qarsildoq naggetslar.", image: "https://images.unsplash.com/photo-1562967914-608f82629710?auto=format&fit=crop&w=700&q=85" },
    { id: 8, name: "Doner Kebab Go'shtli", category: "Donerlar", price: 42000, rating: 4.8, desc: "Tandir noni, maxsus mol go'shti va sarimsoqli sous.", image: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=700&q=85" },
    { id: 9, name: "Coca-Cola (0.5 L)", category: "Ichimliklar", price: 12000, rating: 5.0, desc: "Muzdek tetiklantiruvchi gazli ichimlik.", image: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&w=700&q=85" },
    { id: 10, name: "Mega Combo Set", category: "Combo setlar", price: 79000, rating: 4.9, desc: "Burger, kartoshka fri, naggetslar va muzdek cola birgalikda.", image: "https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?auto=format&fit=crop&w=700&q=85" }
];

let cart = JSON.parse(localStorage.getItem('fastbite_cart')) || [];
let activePromo = JSON.parse(localStorage.getItem('fastbite_promo')) || null;
let currentLang = localStorage.getItem('fastbite_lang') || 'uz';
let currentCategory = 'all';
let searchQuery = '';

function formatUZS(amount) {
    return amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ') + " so'm";
}

function showToast(msg, type = 'info') {
    const container = document.getElementById('toastContainer');
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    toast.textContent = msg;
    container.appendChild(toast);
    setTimeout(() => toast.remove(), 3000);
}

// Multilingual Engine
function setLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('fastbite_lang', lang);
    document.documentElement.setAttribute('data-lang', lang);
    document.getElementById('langSelector').value = lang;

    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (i18n[lang][key]) el.innerHTML = i18n[lang][key];
    });

    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        if (i18n[lang][key]) el.setAttribute('placeholder', i18n[lang][key]);
    });
}

// Render Menu
function renderMenu() {
    const grid = document.getElementById('menuGrid');
    const filtered = MENU_PRODUCTS.filter(p => {
        const matchCat = currentCategory === 'all' || p.category === currentCategory;
        const matchSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase()) || p.desc.toLowerCase().includes(searchQuery.toLowerCase());
        return matchCat && matchSearch;
    });

    if (filtered.length === 0) {
        grid.innerHTML = `<div style="grid-column: 1/-1; text-align:center; padding: 40px; color: var(--text-muted);">Hech narsa topilmadi.</div>`;
        return;
    }

    grid.innerHTML = filtered.map(p => `
        <article class="product-card">
            <div class="product-img-wrap">
                <img src="${p.image}" alt="${p.name}" loading="lazy">
                <span class="product-rating">★ ${p.rating}</span>
            </div>
            <div class="product-body">
                <h3 class="product-title">${p.name}</h3>
                <p class="product-desc">${p.desc}</p>
                <div class="product-footer">
                    <span class="product-price">${formatUZS(p.price)}</span>
                    <button class="add-cart-btn" onclick="addToCart(${p.id})">+ Savatcha</button>
                </div>
            </div>
        </article>
    `).join('');
}

// Cart System
function saveCart() {
    localStorage.setItem('fastbite_cart', JSON.stringify(cart));
    localStorage.setItem('fastbite_promo', JSON.stringify(activePromo));
    updateCartUI();
}

window.addToCart = function (id) {
    const prod = MENU_PRODUCTS.find(p => p.id === id);
    if (!prod) return;
    const item = cart.find(i => i.id === id);
    if (item) item.qty++;
    else cart.push({ ...prod, qty: 1 });
    saveCart();
    showToast(`"${prod.name}" savatchaga qo'shildi!`, 'success');
};

window.changeQty = function (id, delta) {
    const item = cart.find(i => i.id === id);
    if (!item) return;
    item.qty += delta;
    if (item.qty <= 0) cart = cart.filter(i => i.id !== id);
    if (cart.length === 0) activePromo = null;
    saveCart();
};

function calculateCart() {
    const subtotal = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
    let discount = 0;
    let delivery = subtotal > 0 ? DELIVERY_FEE : 0;

    if (activePromo && subtotal > 0) {
        if (activePromo === 'FAST10') discount = Math.round(subtotal * 0.10);
        else if (activePromo === 'BITE20') discount = Math.round(subtotal * 0.20);
        else if (activePromo === 'WELCOME15') discount = Math.round(subtotal * 0.15);
    }
    const total = Math.max(0, subtotal - discount + delivery);
    return { subtotal, discount, delivery, total };
}

function updateCartUI() {
    const totalCount = cart.reduce((sum, item) => sum + item.qty, 0);
    document.getElementById('cartBadge').textContent = totalCount;
    const container = document.getElementById('cartItemsContainer');

    if (cart.length === 0) {
        container.innerHTML = `<p style="text-align:center; color: var(--text-muted); margin-top: 40px;">Savatchangiz bo'sh.</p>`;
        document.getElementById('cartFooter').classList.add('hidden');
        return;
    }

    document.getElementById('cartFooter').classList.remove('hidden');
    container.innerHTML = cart.map(i => `
        <div class="cart-item">
            <img src="${i.image}" alt="${i.name}">
            <div class="cart-item-info">
                <h4>${i.name}</h4>
                <div class="cart-item-price">${formatUZS(i.price * i.qty)}</div>
                <div class="qty-ctrls">
                    <button class="qty-btn" onclick="changeQty(${i.id}, -1)">-</button>
                    <span>${i.qty}</span>
                    <button class="qty-btn" onclick="changeQty(${i.id}, 1)">+</button>
                </div>
            </div>
            <button class="remove-cart-item" onclick="changeQty(${i.id}, -${i.qty})">✕</button>
        </div>
    `).join('');

    const { subtotal, discount, delivery, total } = calculateCart();
    document.getElementById('subtotalPrice').textContent = formatUZS(subtotal);
    document.getElementById('deliveryPrice').textContent = delivery === 0 ? "0 so'm" : formatUZS(delivery);
    document.getElementById('totalPrice').textContent = formatUZS(total);

    const discRow = document.getElementById('discountSummaryRow');
    if (activePromo) {
        discRow.classList.remove('hidden');
        document.getElementById('discountPrice').textContent = `-${formatUZS(discount)}`;
        document.getElementById('promoInput').value = activePromo;
    } else {
        discRow.classList.add('hidden');
    }
}

// Promo System
function applyPromo() {
    const code = document.getElementById('promoInput').value.trim().toUpperCase();
    const msg = document.getElementById('promoMsg');
    const validCodes = ['FAST10', 'BITE20', 'WELCOME15'];

    if (!validCodes.includes(code)) {
        msg.textContent = "Noto'g'ri yoki muddati tugagan promokod!";
        msg.className = "promo-msg error";
        return;
    }

    activePromo = code;
    saveCart();
    msg.textContent = `✅ Promokod muvaffaqiyatli qo'llanildi!`;
    msg.className = "promo-msg success";
    showToast("Promokod faollashdi!", "success");
}

// Web Speech API Voice Assistant
function initVoiceAssistant() {
    const btn = document.getElementById('voiceAssistantBtn');
    const statusTxt = document.getElementById('voiceStatusText');

    if (!('webkitSpeechRecognition' in window) && !('SpeechRecognition' in window)) {
        btn.style.display = 'none';
        return;
    }

    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    const recognition = new SpeechRecognition();
    recognition.lang = 'uz-UZ';
    recognition.continuous = false;
    recognition.interimResults = false;

    btn.addEventListener('click', () => {
        btn.classList.add('listening');
        statusTxt.textContent = "Tinglayapman...";
        recognition.start();
        speak("Salom! FAST BITE saytiga xush kelibsiz. Sizga qanday yordam bera olaman?");
    });

    recognition.onresult = (event) => {
        const text = event.results[0][0].transcript.toLowerCase();
        btn.classList.remove('listening');
        statusTxt.textContent = "AI";

        if (text.includes('menyuni') || text.includes('menyu')) {
            document.getElementById('menu').scrollIntoView({ behavior: 'smooth' });
            speak("Menyu bo'limiga o'tdik.");
        } else if (text.includes('savatcha') || text.includes('savatchani')) {
            document.getElementById('cartDrawer').classList.add('open');
            document.getElementById('cartOverlay').classList.add('open');
            speak("Savatchangiz ochildi.");
        } else {
            showToast(`Buyruq tushunildi: "${text}"`, "info");
            speak("Sizning buyruqringiz qabul qilindi.");
        }
    };

    recognition.onerror = () => {
        btn.classList.remove('listening');
        statusTxt.textContent = "AI";
    };
}

function speak(text) {
    if ('speechSynthesis' in window) {
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = 'uz-UZ';
        window.speechSynthesis.speak(utterance);
    }
}

// Order Checkout Submit
async function submitOrder(e) {
    e.preventDefault();
    const name = document.getElementById('custName').value.trim();
    const phone = document.getElementById('custPhone').value.trim();
    const address = document.getElementById('custAddress').value.trim();
    const notes = document.getElementById('custNotes').value.trim();
    const paymentMethod = document.getElementById('custPayment').value;

    if (!name || !phone || !address) {
        showToast("Barcha majburiy maydonlarni to'ldiring!", "error");
        return;
    }

    const { subtotal, discount, delivery, total } = calculateCart();

    const orderData = {
        customer: { fullName: name, phone, address, notes, paymentMethod },
        items: cart,
        promoCode: activePromo || "Qo'llanilmagan",
        subtotal, discount, deliveryFee: delivery, finalTotal: total
    };

    try {
        const res = await fetch(`${API_BASE}/api/order`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(orderData)
        });
        const result = await res.json();

        if (result.success) {
            showToast(`🎉 Buyurtma (#${result.orderId}) qabul qilindi!`, 'success');
            cart = [];
            activePromo = null;
            saveCart();
            document.getElementById('checkoutModal').classList.add('hidden');
            document.getElementById('checkoutForm').reset();
        } else {
            throw new Error(result.message);
        }
    } catch (err) {
        showToast("Xatolik: Backend server bilan bog'lanib bo'lmadi.", "error");
    }
}

// DOM Events Initialization
document.addEventListener('DOMContentLoaded', () => {
    setLanguage(currentLang);
    renderMenu();
    updateCartUI();
    initVoiceAssistant();

    // Loader
    setTimeout(() => {
        const loader = document.getElementById('loaderScreen');
        loader.style.opacity = '0';
        setTimeout(() => loader.remove(), 500);
    }, 800);

    // Navbar scroll effect
    window.addEventListener('scroll', () => {
        document.getElementById('navbar').classList.toggle('scrolled', window.scrollY > 40);
    });

    // Language selector
    document.getElementById('langSelector').addEventListener('change', (e) => {
        setLanguage(e.target.value);
    });

    // Search
    document.getElementById('searchInput').addEventListener('input', (e) => {
        searchQuery = e.target.value;
        renderMenu();
    });

    // Category tabs
    document.querySelectorAll('.cat-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.cat-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentCategory = btn.dataset.category;
            renderMenu();
        });
    });

    // Cart drawer controls
    const drawer = document.getElementById('cartDrawer');
    const overlay = document.getElementById('cartOverlay');
    document.getElementById('openCartBtn').addEventListener('click', () => { drawer.classList.add('open'); overlay.classList.add('open'); });
    document.getElementById('closeCartBtn').addEventListener('click', () => { drawer.classList.remove('open'); overlay.classList.remove('open'); });
    overlay.addEventListener('click', () => { drawer.classList.remove('open'); overlay.classList.remove('open'); });

    // Promo button
    document.getElementById('applyPromoBtn').addEventListener('click', applyPromo);
    document.querySelectorAll('.apply-code-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.getElementById('promoInput').value = btn.dataset.code;
            applyPromo();
            drawer.classList.add('open'); overlay.classList.add('open');
        });
    });

    // Checkout modal
    const checkoutModal = document.getElementById('checkoutModal');
    document.getElementById('checkoutBtn').addEventListener('click', () => {
        if (cart.length === 0) return showToast("Savatcha bo'sh!", "error");
        drawer.classList.remove('open'); overlay.classList.remove('open');
        checkoutModal.classList.remove('hidden');
    });
    document.getElementById('closeCheckoutBtn').addEventListener('click', () => checkoutModal.classList.add('hidden'));
    document.getElementById('checkoutForm').addEventListener('submit', submitOrder);

    // Scroll reveal observer
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
    }, { threshold: 0.1 });
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
});