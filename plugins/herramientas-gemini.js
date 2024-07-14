import fetch from 'node-fetch'
var handler = async (m, { text,  usedPrefix, command }) => {
if (!text) throw `𝙄𝙉𝙂𝙍𝙀𝙎𝙀 𝙐𝙉𝘼 𝙋𝙀𝙏𝙄𝘾𝙄𝙊𝙉 𝙊 𝙐𝙉𝘼 𝙊𝙍𝘿𝙀𝙉 𝙋𝘼𝙍𝘼 𝙐𝙎𝘼𝙍 𝙇𝘼 𝙁𝙐𝙉𝘾𝙄𝙊𝙉 𝘿𝙀𝙇 𝘽𝘼𝙍𝘿\n\n❏ 𝙀𝙅𝙀𝙈𝙋𝙇𝙊 𝘿𝙀 𝙋𝙀𝙏𝙄𝘾𝙄𝙊𝙉𝙀𝙎 𝙔 𝙊𝙍𝘿𝙀𝙉𝙀𝙎\n❏ ${usedPrefix + command} Recomienda un top 10 de películas de acción\n❏ ${usedPrefix + command} Codigo en JS para un juego de cartas`
try {
conn.sendPresenceUpdate('composing', m.chat);
var apii = await fetch(`https://aemt.me/gemini?text=${text}`)
var res = await apii.json()
await m.reply(res.result)
} catch (e) {
await conn.reply(m.chat, `🧐 #report ${usedPrefix + command}\n\n ❗`, fkontak, m)
console.log(`Use de la siguiente manera:\n\n${usedPrefix + command} que ue es un átomo.`)
console.log(e)
}}
handler.command = ['bard', 'gemini']
handler.help = ['bard', 'gemini']
handler.tags = ['herramientas']

handler.premium = false

export default handler
