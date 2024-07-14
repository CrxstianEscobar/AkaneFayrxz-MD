import fetch from 'node-fetch';


const handler = async (m, {conn, usedPrefix, usedPrefix: _p, __dirname, text, isPrems}) => {

  try {
    const pp = imagen17;
    const img = './Menumenu.jpg';
    const d = new Date(new Date + 3600000);
    const locale = 'es';
    const week = d.toLocaleDateString(locale, {weekday: 'long'});
    const date = d.toLocaleDateString(locale, {day: 'numeric', month: 'long', year: 'numeric'});
    let opciones = { timeZone: "America/Lima", hour12: false };
    let hours = d.toLocaleTimeString(locale, opciones).split(':')[0];
    let saludo;

    // Determina el saludo según la hora del día en Lima, Perú
    if (hours == 0) {
      saludo = '🌚 ¡Vaya, aún despierto! ¿Eres un búho nocturno o qué?';
    } else if (hours == 1) {
      saludo = '🌚 ¿Ya es la 1 AM? ¡Aún no es hora de dormir!';
    } else if (hours == 2) {
      saludo = '🌚 Las 2 de la mañana, ¡un verdadero noctámbulo!';
    } else if (hours == 3) {
      saludo = '🌚 Son las 3 AM, ¿seguro que no deberías dormir?';
    } else if (hours == 4) {
      saludo = '🌚 Son las 4 AM, ¡la noche aún es joven!';
    } else if (hours == 5) {
      saludo = '🌅 Buenos días, ¡ya casi amanece!';
    } else if (hours == 6) {
      saludo = '🌅 Son las 6 AM, ¡hora de despertar!';
    } else if (hours == 7) {
      saludo = '🌅 Son las 7 AM, ¡el sol ya está arriba!';
    } else if (hours == 8) {
      saludo = '🌞 Buenos días, ¡a empezar el día con energía!';
    } else if (hours == 9) {
      saludo = '🌞 Son las 9 AM, ¡espero que ya estés despierto!';
    } else if (hours == 10) {
      saludo = '🌞 Las 10 de la mañana, ¡un buen momento para ser productivo!';
    } else if (hours == 11) {
      saludo = '🌞 Son las 11 AM, ¡casi es hora del almuerzo!';
    } else if (hours == 12) {
      saludo = '🌤 Buenas tardes, ¡hora de almorzar!';
    } else if (hours == 13) {
      saludo = '🌤 Son las 1 PM, ¡espero que hayas disfrutado tu almuerzo!';
    } else if (hours == 14) {
      saludo = '🌤 Las 2 de la tarde, ¡la recta final del día!';
    } else if (hours == 15) {
      saludo = '🌤 Son las 3 PM, ¡mantén el ritmo!';
    } else if (hours == 16) {
      saludo = '🌤 Son las 4 PM, ¡ya casi es el fin del día!';
    } else if (hours == 17) {
      saludo = '🌇 Buenas tardes, ¡el día se va acabando!';
    } else if (hours == 18) {
      saludo = '🌆 Son las 6 PM, ¡es hora de relajarse un poco!';
    } else if (hours == 19) {
      saludo = '🌆 Buenas noches, ¿hora de Netflix y relax?';
    } else if (hours == 20) {
      saludo = '🌆 Son las 8 PM, ¡un buen momento para relajarse!';
    } else if (hours == 21) {
      saludo = '🌆 Buenas noches, ¿preparado para el último sprint del día?';
    } else if (hours == 22) {
      saludo = '🌙 Son las 10 PM, ¡hora de prepararse para dormir!';
    } else if (hours == 23) {
      saludo = '🌙 Buenas noches, ¿no deberías estar durmiendo ya?';
      }
    //const time = d.toLocaleString('es-PE', {hour: 'numeric', minute: 'numeric', hour12: true});
    const _uptime = process.uptime() * 1000;
    const uptime = clockString(_uptime);
    const user = global.db.data.users[m.sender];
    const {money, joincount} = global.db.data.users[m.sender];
    const {exp, limit, level, role} = global.db.data.users[m.sender];
    const rtotalreg = Object.values(global.db.data.users).filter((user) => user.registered == true).length;
    const more = String.fromCharCode(8206);
    const readMore = more.repeat(850);
    const taguser = '@' + m.sender.split('@s.whatsapp.net')[0];
    const doc = ['pdf', 'zip', 'vnd.openxmlformats-officedocument.presentationml.presentation', 'vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'vnd.openxmlformats-officedocument.wordprocessingml.document'];
    const document = doc[Math.floor(Math.random() * doc.length)];
    const str = `> 👋🏻 ¡Hola!, ${taguser}
> ${saludo}
> ${week}, ${date}
> ${d.toLocaleTimeString(locale, opciones)}
*˚₊·˚₊· ͟͟͞͞➳❥ _Shadow Bot-SX_*
*☆═━┈◈ ╰ 1.4.0 SB ╯ ◈┈━═☆*
*│* 
*╰ ˚₊·˚₊· ͟͟͞͞➳❥ _By Cristian_*
*⊰᯽⊱┈──╌•|* ⊱✿⊰ *|•╌──┈⊰᯽⊱*
*⎔ _Creador:_* _Cristian Escobar_
*⎔ _Número:_* _+51 927238856_
*⎔ _Uptime:_* _${uptime}_
*⎔ _Versión:_* _1.4.0_

*⎔ _Nivel:_* _${level}_
*⎔ _Experiencia:_* _${exp}_
*⎔ _Rango:_* _${role}_
*⎔ _Diamantes:_* _${limit}_
*⎔ _ShadowCoins:_* _${money}_
*⎔ _Tokens:_* _${joincount}_
*⎔ _Premium:_* ${user.premiumTime > 0 ? '✅' : (isPrems ? '✅' : '❌') || ''}
ㅤ· · ────── ·•· ────── · · 
𝙎𝙝𝙖𝙙𝙤𝙬 𝘽𝙤𝙩-𝙎𝙓 : 𝙐𝙨𝙭𝙧 𝘾𝙧𝙭𝙭𝙨 🥀
- Para el menú completo usa *.allmenu*
ㅤ· · ────── ·•· ────── · · 
*╭┄⊰ =͟͟͞͞ LISTA DE MENÚS*
*│* დ _.allmenu_
*│* დ _.menuaudios_
*│* დ _.menuanimes_
*│* დ _.audeffects_
*│* დ _.logoeffects_
*│* დ _.opcionesprop_
*│* დ _.menu18_
*│* დ _.menuff_
*│* დ _.menurec_
*│* დ _.menuayd_
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
    conn.reply(m.chat,'╰⊱❌⊱ *_ERROR_* ⊱❌⊱╮\n\n*_EL MENÚ ESTÁ FALLANDO INTENTE DE NUEVO MÁS TARDE_*', m);
  }
};
handler.command = /^(menu|menú|memu|memú|help|info|comandos|2help|menu1.2|ayuda|commands|commandos|cmd)$/i;
handler.exp = 50;
handler.fail = null;
export default handler;
function clockString(ms) {
  const h = isNaN(ms) ? '--' : Math.floor(ms / 3600000);
  const m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60;
  const s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60;
  return [h, m, s].map((v) => v.toString().padStart(2, 0)).join(':');
}
