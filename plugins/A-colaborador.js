import fetch from 'node-fetch'
let handler = async (m, { conn, usedPrefix, text, args, command }) => {

let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }

let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let name = await conn.getName(who)
let edtr = `@${m.sender.split`@`[0]}`

const vcard = `BEGIN:VCARD\nVERSION:3.0\nN:;Cristian Escobar;;;\nFN: Cristian Escobar\nORG:Cristian Escobar\nTITLE:\nitem1.TEL;waid=51927238856:+51 927 238 856\nitem1.X-ABLabel:Cristian Escobar\nX-WA-BIZ-DESCRIPTION:𝙐𝙨𝙭𝙧 𝘾𝙧𝙭𝙭𝙨 🥀\nX-WA-BIZ-NAME:Cristian Escobar\nEND:VCARD`;
await mconn.conn.sendMessage(nk.from, { contacts: { displayName: 'Cristian Escobar', contacts: [{ vcard }] } }, { quoted: callmsg });
let caption = `*_👋🏻 Hola ${edtr}, este es el contacto de mi creador 🌙_*`
    await conn.reply(m.chat, caption, tag_own, { mentions: conn.parseMention(caption) })

}
handler.help = ['colaborator']
handler.tags = ['main']
handler.command = /^(colaborador)$/i

export default handler
