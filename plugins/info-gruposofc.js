let media = './Menu7.png'
let handler = async (m, { conn, command }) => {
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
    await conn.sendMessage(m.chat, { react: { text: '📇', key: m.key } })
let str = `✨🌐✦ SERVICIOS EXTRA DISPONIBLES ✦🌐✨

 Aquí tienes los servicios extra que ofrecemos:

═☆═━══━═☆═━══━═☆═━══━═☆═

◆ 1. HBO Max 🎬 ◆
📺 Acceso a películas y series exclusivas.
🌍 Disponibilidad en múltiples dispositivos.
👪 Planes para toda la familia.

═☆═━══━═☆═━══━═☆═━══━═☆═

◆ 2. Paramount+ 🎥 ◆
🎞️ Catálogo amplio de películas clásicas y modernas.
📡 Streaming en vivo de eventos especiales.
👾 Contenido exclusivo para niños y adultos.

═☆═━══━═☆═━══━═☆═━══━═☆═

◆ 3. Amazon Prime Video 📦 ◆
🚀 Estrenos exclusivos de Amazon Originals.
🛍️ Beneficios adicionales con Amazon Prime.
📶 Opciones de renta y compra de títulos.

═☆═━══━═☆═━══━═☆═━══━═☆═

◆ 4. Disney+ 🏰 ◆
🎠 Acceso completo a Disney, Pixar, Marvel, Star Wars y National Geographic.
🌟 Contenido familiar y para fans.
📽️ Producciones originales y de alta calidad.

═✪═━══━═✪═━══━═✪═━══━═✪═

◆ 1. Logos PNG 🎨 ◆
🔹 Diseños personalizados y únicos.
🔹 Alta resolución y fondo transparente.
🔹 Perfectos para web y material impreso.

═✪═━══━═✪═━══━═✪═━══━═✪═

◆ 2. Logos 3D ✨ ◆
🔹 Logotipos con efecto tridimensional.
🔹 Ideales para presentaciones y animaciones.
🔹 Archivos listos para cualquier plataforma.

═✪═━══━═✪═━══━═✪═━══━═✪═

◆ 3. Intros para Videos 🎬 ◆
🔹 Animaciones impactantes para tus videos.
🔹 Personalización con tu logo y estilo de marca.
🔹 Compatibles con YouTube, Vimeo y más.

═✪═━══━═✪═━══━═✪═━══━═✪═

PREGUNTA POR NUESTROS SERVICIOS

═☆═━══━═☆═━══━═☆═━══━═☆═`
await conn.sendFile(m.chat, media, 'gata.mp4', str, fkontak)}

handler.command = /^Extra|extra|Extras|extras$/i
handler.register = true
handler.exp = 33

export default handler
