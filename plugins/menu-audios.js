import fetch from 'node-fetch';




const handler = async (m, {conn, usedPrefix, usedPrefix: _p, __dirname, text, isPrems}) => {
  const datas = global
  const idioma = datas.db.data.users[m.sender].language
  const _translate = JSON.parse(fs.readFileSync(`./language/${idioma}.json`))
  const tradutor = _translate.plugins.menu_audios

  try {
    const pp = imagen4;
    const img = './Menu2.jpg';
    const d = new Date(new Date + 3600000);
    const locale = 'es';
    const date = d.toLocaleDateString(locale, {day: 'numeric', month: 'long', year: 'numeric'});
    const user = global.db.data.users[m.sender];
    const more = String.fromCharCode(8206);
    const readMore = more.repeat(850);
    const taguser = '@' + m.sender.split('@s.whatsapp.net')[0];
    const doc = ['pdf', 'zip', 'vnd.openxmlformats-officedocument.presentationml.presentation', 'vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'vnd.openxmlformats-officedocument.wordprocessingml.document'];
    const document = doc[Math.floor(Math.random() * doc.length)];
    const str = `> ⓘ ¡Hola!, ${taguser}
> ${date}
*˚₊·˚₊· ͟͟͞͞➳❥ _Shadow Bot-SX_*
*☆═━┈◈ ╰ 1.4.0 SB ╯ ◈┈━═☆*
*│* 
*╰ ˚₊·˚₊· ͟͟͞͞➳❥ _By Cristian_*
*⊰᯽⊱┈──╌•|* ⊱✿⊰ *|•╌──┈⊰᯽⊱*
*╭┄⊰ =͟͟͞͞ MENÚ AUDIOS*
*│* ⓘ Uso sin prefijo.
*│* დ _Quien es tu sempai botsito 7w7_
*│* დ _Te diagnóstico con gay_
*│* დ _No digas eso papu_
*│* დ _A nadie le importa_
*│* დ _Fiesta del admin_
*│* დ _Vivan los novios_
*│* დ _Feliz cumpleaños_
*│* დ _Noche de paz_
*│* დ _Buenos días_
*│* დ _Buenas tardes_
*│* დ _Buenas noches_
*│* დ _Audio hentai_
*│* დ _Chica lgante_
*│* დ _Feliz navidad_
*│* დ _Vete a la vrg_
*│* დ _Pasa pack Bot_
*│* დ _Atencion grupo_
*│* დ _Marica quien_
*│* დ _Murio el grupo_
*│* დ _Oh me vengo_
*│* დ _Tio que rico_
*│* დ _Viernes_
*│* დ _Baneado_
*│* დ _Sexo_
*│* დ _Hola_
*│* დ _Un pato_
*│* დ _Nyanpasu_
*│* დ _Te amo_
*│* დ _Yamete_
*│* დ _Bañate_
*│* დ _Es puto_
*│* დ _La biblia_
*│* დ _Onichan_
*│* დ _Mierda de Bot_
*│* დ _Siuuu_
*│* დ _Epico_
*│* დ _Shitpost_
*│* დ _Rawn_
*│* დ _UwU_
*│* დ _:c_
*│* დ _a_
*╰─────────────────┄⊰*`.trim();
    if (m.isGroup) {
      // await conn.sendFile(m.chat, vn, 'menu.mp3', null, m, true, { type: 'audioMessage', ptt: true})
      const fkontak2 = {'key': {'participants': '0@s.whatsapp.net', 'remoteJid': 'status@broadcast', 'fromMe': false, 'id': 'Halo'}, 'message': {'contactMessage': {'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}, 'participant': '0@s.whatsapp.net'};
      conn.sendMessage(m.chat, {image: pp, caption: str.trim(), mentions: [...str.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net')}, {quoted: fkontak2});
    } else {
      // await conn.sendFile(m.chat, vn, 'menu.mp3', null, m, true, { type: 'audioMessage', ptt: true})
      const fkontak2 = {'key': {'participants': '0@s.whatsapp.net', 'remoteJid': 'status@broadcast', 'fromMe': false, 'id': 'Halo'}, 'message': {'contactMessage': {'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}, 'participant': '0@s.whatsapp.net'};
      conn.sendMessage(m.chat, {image: pp, caption: str.trim(), mentions: [...str.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net')}, {quoted: fkontak2});
    }
  } catch {
    conn.reply(m.chat, tradutor.texto2, m);
  }
};
handler.command = /^(menu2|audios|menú2|memu2|menuaudio|menuaudios|memuaudios|memuaudio|audios|keyaudio|keyaudios)$/i;
handler.exp = 50;
handler.fail = null;
export default handler;
function clockString(ms) {
  const h = isNaN(ms) ? '--' : Math.floor(ms / 3600000);
  const m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60;
  const s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60;
  return [h, m, s].map((v) => v.toString().padStart(2, 0)).join(':');
}
