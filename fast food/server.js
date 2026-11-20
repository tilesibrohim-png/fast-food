/**
 * FAST BITE — Node.js Backend & Telegram Bot Server
 */

const http = require('http');
const https = require('https');
const fs = require('fs');
const path = require('path');

// .env faylini o'qish (tashqi kutubxonasiz)
function loadEnv() {
    const envPath = path.join(__dirname, '.env');
    if (fs.existsSync(envPath)) {
        const lines = fs.readFileSync(envPath, 'utf-8').split('\n');
        lines.forEach(line => {
            const parts = line.trim().split('=');
            if (parts.length >= 2 && !line.startsWith('#')) {
                process.env[parts[0].trim()] = parts.slice(1).join('=').trim().replace(/["']/g, '');
            }
        });
    }
}

loadEnv();

const PORT = process.env.PORT || 3000;
const BOT_TOKEN = process.env.BOT_TOKEN || "SIZNING_BOT_TOKENINGIZ";
const CHAT_ID = process.env.CHAT_ID || "SIZning_CHAT_ID";

// Server menyu bazasi (narxlar soxtalashtirilmasligi uchun)
const SERVER_MENU = {
    1: { name: "Qirollik 3D Burger", price: 48000 },
    2: { name: "Tutunli BBQ Burger", price: 52000 },
    3: { name: "Maxsus Tovuqli Lavash", price: 38000 },
    4: { name: "Qirollik Hot-Dog", price: 26000 },
    5: { name: "Pepperoni Pitsa (30 sm)", price: 89000 },
    6: { name: "Katta Kartoshka Fri", price: 22000 },
    7: { name: "Tovuq Naggetslari (9 dona)", price: 32000 },
    8: { name: "Doner Kebab Go'shtli", price: 42000 },
    9: { name: "Coca-Cola (0.5 L)", price: 12000 },
    10: { name: "Mega Combo Set", price: 79000 }
};

const VALID_PROMOS = {
    'FAST10': 10,
    'BITE20': 20,
    'WELCOME15': 15
};

const DELIVERY_FEE = 15000;

function formatUZS(amount) {
    return amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ') + " so'm";
}

function sendTelegramMessage(text) {
    return new Promise((resolve, reject) => {
        const payload = JSON.stringify({ chat_id: CHAT_ID, text, parse_mode: 'HTML' });
        const options = {
            hostname: 'api.telegram.org',
            port: 443,
            path: `/bot${BOT_TOKEN}/sendMessage`,
            method: 'POST',
            headers: { 'Content-Type': 'application/json', 'Content-Length': Buffer.byteLength(payload) }
        };

        const req = https.request(options, (res) => {
            let body = '';
            res.on('data', chunk => body += chunk);
            res.on('end', () => {
                try {
                    const resJson = JSON.parse(body);
                    if (resJson.ok) resolve(resJson);
                    else reject(new Error(resJson.description || 'Telegram xatosi'));
                } catch (e) { reject(new Error('Javobni o‘qishda xatolik')); }
            });
        });
        req.on('error', err => reject(err));
        req.write(payload);
        req.end();
    });
}

const server = http.createServer(async (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST, GET, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    if (req.method === 'OPTIONS') {
        res.writeHead(204);
        return res.end();
    }

    if (req.method === 'POST' && req.url === '/api/order') {
        let body = '';
        req.on('data', chunk => body += chunk);
        req.on('end', async () => {
            try {
                const data = JSON.parse(body);
                const { customer, items, promoCode } = data;

                if (!customer || !customer.fullName || !customer.phone || !customer.address || !items || items.length === 0) {
                    res.writeHead(400, { 'Content-Type': 'application/json; charset=utf-8' });
                    return res.end(JSON.stringify({ success: false, message: "Ma'lumotlar to'liq emas." }));
                }

                // Server tomonida narxlarni qayta hisoblash
                let subtotal = 0;
                const verifiedItems = items.map(i => {
                    const product = SERVER_MENU[i.id];
                    const price = product ? product.price : 0;
                    const itemTotal = price * i.qty;
                    subtotal += itemTotal;
                    return { name: product ? product.name : "Noma'lum", qty: i.qty, price, itemTotal };
                });

                let discount = 0;
                let delivery = subtotal > 0 ? DELIVERY_FEE : 0;
                if (promoCode && VALID_PROMOS[promoCode]) {
                    discount = Math.round((subtotal * VALID_PROMOS[promoCode]) / 100);
                }
                const finalTotal = Math.max(0, subtotal - discount + delivery);
                const orderId = 'FB-' + Math.floor(100000 + Math.random() * 900000);

                const itemsListText = verifiedItems.map((i, idx) => `${idx + 1}. <b>${i.name}</b> × ${i.qty} = ${formatUZS(i.itemTotal)}`).join('\n');

                const tgMessage = `
🔥 <b>YANGI BUYURTMA! (#${orderId})</b>

👤 <b>Mijoz:</b> ${customer.fullName}
📞 <b>Telefon:</b> ${customer.phone}
📍 <b>Manzil:</b> ${customer.address}
💳 <b>To'lov turi:</b> ${customer.paymentMethod}
📝 <b>Izoh:</b> ${customer.notes || "Yo'q"}

🍔 <b>MAHSULOTLAR:</b>
${itemsListText}

━━━━━━━━━━━━━━━━━
💵 <b>Oraliq summa:</b> ${formatUZS(subtotal)}
🎟 <b>Promokod:</b> ${promoCode || "Yo'q"}
🏷 <b>Chegirma:</b> -${formatUZS(discount)}
🚚 <b>Yetkazib berish:</b> ${formatUZS(delivery)}
💰 <b>JAMI TO'LOV:</b> <b>${formatUZS(finalTotal)}</b>
                `.trim();

                await sendTelegramMessage(tgMessage);

                res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });
                res.end(JSON.stringify({ success: true, orderId, message: "Buyurtma muvaffaqiyatli yuborildi!" }));
            } catch (err) {
                res.writeHead(500, { 'Content-Type': 'application/json; charset=utf-8' });
                res.end(JSON.stringify({ success: false, message: err.message }));
            }
        });
    } else {
        res.writeHead(404, { 'Content-Type': 'application/json; charset=utf-8' });
        res.end(JSON.stringify({ success: false, message: "Sahifa topilmadi" }));
    }
});

server.listen(PORT, () => {
    console.log(`🚀 FAST BITE Server http://localhost:${PORT} da ishga tushdi`);
});