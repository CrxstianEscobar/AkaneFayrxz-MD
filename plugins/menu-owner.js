
const handler = async (m, {conn, usedPrefix}) => {
  const datas = global

  const pp = imagen19;
  try {
  } catch (e) {
  } finally {
    const name = await conn.getName(m.sender);
    const date = d.toLocaleDateString(locale, {day: 'numeric', month: 'long', year: 'numeric'});
    const taguser = '@' + m.sender.split('@s.whatsapp.net')[0];
    const str = `> ⓘ ¡Hola!, ${taguser}
> ${date}
*˚₊·˚₊· ͟͟͞͞➳❥ _Shadow Bot-SX_*
*☆═━┈◈ ╰ 1.4.0 SB ╯ ◈┈━═☆*
*│* 
*╰ ˚₊·˚₊· ͟͟͞͞➳❥ _By Cristian_*
*⊰᯽⊱┈──╌•|* ⊱✿⊰ *|•╌──┈⊰᯽⊱*
*╭┄⊰ =͟͟͞͞ MENÚ OWNER*
*│* დ _.dsowner_
*│* დ _.setprefix *prefijo*_
*│* დ _.resetprefix_
*│* დ _.autoadmin_
*│* დ _.grouplist_
*│* დ _.chetar_
*│* დ _.leavegc_
*│* დ _.cajafuerte_
*│* დ _.blocklist_
*│* დ _.cleartpm_
*│* დ _.restart_
*│* დ _.update_
*│* დ _.banlist_
*│* დ _.listcmd_
*│* დ _.addcmd *txt*_
*│* დ _.delcmd_
*│* დ _.saveimage_
*│* დ _.viewimage_
*│* დ _.addowner *@tag / num*_
*│* დ _.delowner *@tag / num*_
*│* დ _.block *@tag / num*_
*│* დ _.unblock *@tag / num*_
*│* დ _.resetuser *@tag*_
*│* დ _.dardiamantes *@tag / cant*_
*│* დ _.añadirxp *@tag / cant*_
*│* დ _.bc *txt*_
*│* დ _.bcchats *txt*_
*│* დ _.bcgc *txt*_
*│* დ _.bcgc2 *txt*_
*│* დ _.msg *txt*_
*│* დ _.bcbot *txt*_
*│* დ _.bcgc2 *audio / video / img*_
*│* დ _.addprem *@tag / tiempo*_
*│* დ _.addprem2 *@tag / tiempo*_
*│* დ _.addprem3 *@tag / tiempo*_
*│* დ _.addprem4 *@tag / tiempo*_
*│* დ _.del prem *@tag*_
*│* დ _.setppbot *img*_
*╰─────────────────┄⊰*`.trim();
    if (m.isGroup) {
      conn.sendMessage(m.chat, {image: pp, caption: str.trim(), mentions: [...str.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net')}, {quoted: m});
    } else {
      const fkontak2 = {'key': {'participants': '0@s.whatsapp.net', 'remoteJid': 'status@broadcast', 'fromMe': false, 'id': 'Halo'}, 'message': {'contactMessage': {'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}, 'participant': '0@s.whatsapp.net'};
      conn.sendMessage(m.chat, {image: pp, caption: str.trim(), mentions: [...str.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net')}, {quoted: fkontak2});
    }
    // conn.sendButton(m.chat, str, wm, pp, [['𝙼𝙴𝙽𝚄 𝙿𝚁𝙸𝙽𝙲𝙸𝙿𝙰𝙻', '/menu']], m, { mentions: [m.sender] })
  }
};
handler.help = ['menuowner'];
handler.tags = ['owner'];
handler.command = /^(menuowner|opcionesprop)$/i;
handler.rowner = true;
handler.fail = null;
export default handler;
