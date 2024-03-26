const handler = async (m, {conn}) => {
  try {
    const pp = imagen6;
    const img = await(await fetch('https://images3.alphacoders.com/125/1251707.png')).buffer();
    const _uptime = process.uptime() * 1000;
    const uptime = clockString(_uptime);
    const taguser = '@' + m.sender.split('@s.whatsapp.net')[0];
    await conn.sendMessage(m.chat, { react: { text: '🤠', key: m.key } })
    const str = `┏✧ » ◇ « ✧ » ✦ « ✧ » ◇ « ✧
    ⍣👋🏻𝘏𝘰𝘭𝘢: ${taguser}
✨🚀✦ SERVICIOS DISPONIBLES ✦🚀✨
🌟 ¡Saludos! A continuación, te detallamos servicios a través de diversas plataformas:

◆ 1. Telegram 📨 ◆
👥 Seguidores para canales y grupos.
💬 Comentarios personalizados.
👁️‍🗨️ Vistas para publicaciones.
〨 - - - - - - - - - - - - 〨
◆ 2. Instagram 📸 ◆
❤️ Likes para fotos y videos.
👥 Seguidores reales y activos.
💬 Comentarios relevantes.
👀 Vistas para historias.
〨 - - - - - - - - - - - - 〨
◆ 3. Twitter 🐦 ◆
👥 Seguidores.
❤️ Likes para tweets.
🔁 Retweets.
💬 Comentarios y respuestas.
〨 - - - - - - - - - - - - 〨
◆ 4. Facebook 👥 ◆
👥 Seguidores y amigos.
👍 Reacciones para posts.
💬 Comentarios.
👀 Vistas para videos.
〨 - - - - - - - - - - - - 〨
◆ 5. YouTube ▶️ ◆
▶️ Reproducciones para videos.
👍 Likes.
💬 Comentarios.
👥 Suscriptores.
〨 - - - - - - - - - - - - 〨
◆ 6. Spotify 🎧 ◆
🎧 Reproducciones para canciones.
👥 Seguidores.
💬 Comentarios y feedback.
〨 - - - - - - - - - - - - 〨
◆ 7. Deezer 🎶 ◆
🎶 Reproducciones para música.
👥 Seguidores para perfiles.
💬 Comentarios en tracks.
〨 - - - - - - - - - - - - 〨
◆ 8. VK (VKontakte) 🇷🇺 ◆
👥 Seguidores para perfil o grupo.
👍 Likes para publicaciones.
💬 Comentarios.
👀 Vistas para videos.
〨 - - - - - - - - - - - - 〨
◆ 9. Twitch 🎮 ◆
👁️‍🗨️ Vistas en vivo.
👥 Seguidores para canal.
💬 Chat activo.
〨 - - - - - - - - - - - - 〨
◆ 10. Discord 🎙️ ◆
🚀 Configuración de servidores.
🧑‍🤝‍🧑 Comunidad activa.
🤖 Bots personalizados.
〨 - - - - - - - - - - - - 〨
◆ 11. LinkedIn 💼 ◆
👥 Conexiones profesionales.
👍 Likes y comentarios.
🚀 Endorsamientos y recomendaciones.
〨 - - - - - - - - - - - - 〨
◆ 12. Pinterest 📌 ◆
📌 Seguidores para tableros.
❤️ Likes en pines.
👀 Vistas para pines.
〨 - - - - - - - - - - - - 〨
◆ 13. TikTok 🎵 ◆
👥 Seguidores.
❤️ Likes en videos.
💬 Comentarios.
👀 Vistas en videos.
〨 - - - - - - - - - - - - 〨
◆ 14. Snapchat 👻 ◆
👥 Amigos y seguidores.
👁️‍🗨️ Vistas en historias.
👍 Filtros personalizados.
〨 - - - - - - - - - - - - 〨
◆ 15. SoundCloud 🎤 ◆
🎵 Reproducciones para pistas.
👥 Seguidores para perfil.
💬 Comentarios en pistas.
〨 - - - - - - - - - - - - 〨
◆ 16. Reddit 🤖 ◆
⬆️ Upvotes para publicaciones.
👥 Subscribers para subreddits.
💬 Comentarios activos.
〨 - - - - - - - - - - - - 〨
◆ 17. OnlyFans 💸 ◆
👥 Seguidores.
👍 Likes en publicaciones.
〨 - - - - - - - - - - - - 〨
NOTA: Para seleccionar el pedido que gusta favor de indicarlo con el numero, el servicio y la cantidad que requiera con el comando /Submit.
Po ejemplo:
Si desea Instagram con 1k de seguidores:
/Submit 2.Seguidores.1000
〨 - - - - - - - - - - - - 〨
PROXIMAMENTE MAS SERVICIOS
〨 - - - - - - - - - - - - 〨`.trim();
    if (m.isGroup) {
      conn.sendMessage(m.chat, {text: str.trim(), mentions: [...str.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net'), contextInfo: {forwardingScore: 9999999, isForwarded: true, mentionedJid: [...str.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net'), "externalAdReply": {"showAdAttribution": true, "containsAutoReply": true, "renderLargerThumbnail": true, "title": global.titulowm, "containsAutoReply": true, "mediaType": 1, "thumbnail": pp, "mediaUrl": `https://atom.bio/sakuralite`, "sourceUrl": `https://atom.bio/sakuralite`}}}, {quoted: m});
    } else {
      const fkontak2 = {'key': {'participants': '0@s.whatsapp.net', 'remoteJid': 'status@broadcast', 'fromMe': false, 'id': 'Halo'}, 'message': {'contactMessage': {'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}, 'participant': '0@s.whatsapp.net'};
      conn.sendMessage(m.chat, {text: str.trim(), mentions: [...str.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net'), contextInfo: {forwardingScore: 9999999, isForwarded: true, mentionedJid: [...str.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net'), "externalAdReply": {"showAdAttribution": true, "containsAutoReply": true, "renderLargerThumbnail": true, "title": global.titulowm, "containsAutoReply": true, "mediaType": 1, "thumbnail": pp, "mediaUrl": `https://atom.bio/sakuralite`, "sourceUrl": `https://atom.bio/sakuralite`}}}, {quoted: fkontak2});
    }
  } catch {
  }
};
handler.help = ['estado'];
handler.tags = ['main'];
handler.command = /^(estado|status|estate|state|stado|stats|runtime|uptime)$/i;
export default handler;
function clockString(ms) {
  const d = isNaN(ms) ? '--' : Math.floor(ms / 86400000);
  const h = isNaN(ms) ? '--' : Math.floor(ms / 3600000) % 24;
  const m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60;
  const s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60;
  return [`\n│ *=> 💥 ` + d, ' Día(s)* ', `\n│ *=> 💫 ` + h, ' Hora(s)* ', `\n│ *=> 💠 ` + m, ' Minuto(s)* ', `\n│ *=> ♦ ` + s, ' Segundo(s)* '].map((v) => v.toString().padStart(2, 0)).join('');
}
