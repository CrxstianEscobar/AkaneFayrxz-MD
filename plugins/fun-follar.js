
let handler = async (m, { conn, command, text }) => {
if (!text) throw `*Ingrese el @ o el nombre de la persona que quieras saber si te puedes ${command.replace('how', '')}*`
let user = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted.sender
conn.reply(m.chat, `
🥵 *ACABAS DE FOLLARTELA!*🥵

*Acabas de follar a ${text} poniendola en 4 por el culo y vaginx mientras te gemía como una putita:*\n> Aahh..,Aaah, sigue, no pares, no pares papi, meteme bien duroo...\n*Y la dejaste tan abierta que no puede ni caminar la puta!*

*${text}* 
🤤🥵 *¡YA TE METIERON LA VRG!* 🥵🤤`, null, { mentions: [user] })
}

handler.command = /^(Follar|violar|kchar)/i
handler.fail = null
export default handler
