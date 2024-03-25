export async function before(m) {

const username = conn.getName(m.sender)

if (m.chat.endsWith('broadcast') || m.fromMe || m.isGroup) return

let user = global.db.data.users[m.sender]

if (new Date() - user.pc < 21600000) return
await m.reply(`👋 Hola ${username}¡!
 *${saludo}*

*⚠️ Nota:* Para evitar saturar elbot no envie demasiados comandos al bot
⚡️ Escriba /menu Para Ver Los Servicios Que Dispongo!

*🥀 Si Tienes Duda O Sugerencia Contacta A Mi Creador: 📍*
💖 +5215591478197 🧸

*⚡️ BLACK- STORE  🦊*

📍 Actualmente El Mejor Bot Con Los Precios Mas Bajos Del Mercado, Preferimos Calidad No Cantidad By CRXS`) 
user.pc = new Date * 1
}
