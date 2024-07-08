import fetch from 'node-fetch';
const handler = async (m, {conn, usedPrefix, usedPrefix: _p, __dirname, text, isPrems}) => {
  if (usedPrefix == 'a' || usedPrefix == 'A') return;
  try {
    const pp = imagen4;
    // let vn = './media/menu.mp3'
    const img = './Menu2.jpg';
    const d = new Date(new Date + 3600000);
    const locale = 'es';
    const week = d.toLocaleDateString(locale, {weekday: 'long'});
    const date = d.toLocaleDateString(locale, {day: 'numeric', month: 'long', year: 'numeric'});
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
    const str = `> ⓘ ¡Hola!, ${taguser}
> ${date}
*˚₊·˚₊· ͟͟͞͞➳❥ _Shadow Bot-SX_*
*☆═━┈◈ ╰ 1.4.0 SB ╯ ◈┈━═☆*
*│* 
*╰ ˚₊·˚₊· ͟͟͞͞➳❥ _By Cristian_*
*⊰᯽⊱┈──╌•|* ⊱✿⊰ *|•╌──┈⊰᯽⊱*
*╭┄⊰ LISTA DE MENÚS*
*│* _${usedPrefix}menuaudios_
*│* _${usedPrefix}menuanimes_
*│* _${usedPrefix}menu18_
*│* _${usedPrefix}menuff_
*│* _${usedPrefix}recursos_
*│* _${usedPrefix}estadisticas_
*│* _${usedPrefix}opcionesadm_
*╰─────────────────┄⊰*

*╭┄⊰ INFORMACIÓN*
*│* _.grupos_
*│* _.estado_
*│* _.infobot_
*│* _.speedtest_
*│* _.donar_
*│* _.owner_
*│* _.script_
*│* _.reporte *texto*_
*│* _.join *link*_
*│* _.fixmsgespera_
*│* _bot (sin prefijo)_
*╰─────────────────┄⊰*

*╭┄⊰ SUB BOTS*
*│* _.serbot --code_
*│* _.serbot_
*│* _.deletebot_
*│* _.token_
*│* _.stop_
*│* _.bots_
*╰─────────────────┄⊰*

*╭┄⊰ DESCARGAS*
*│* _.play *txt*_
*│* _.play2 *txt*_
*│* _.play.1 *txt*_
*│* _.play.2 *txt*_
*│* _.playdoc *txt*_
*│* _.playdoc2 *txt*_
*│* _.playlist *txt*_
*│* _.spotify *txt*_
*│* _.pinterest *txt*_
*│* _.ringtone *txt*_
*│* _.soundcloud *txt*_
*│* _.wallpaper *txt*_
*│* _.ytshort *url*_
*│* _.ytmp3 *url*_
*│* _.ytmp3doc *url*_
*│* _.ytmp4 *url*_
*│* _.ytmp4doc *url*_
*│* _.videodoc *url*_
*│* _.facebook *url*_
*│* _.instagram *url*_
*│* _.tiktok *url*_
*│* _.tiktokimg *url*_
*│* _.mediafire *url*_
*│* _.gitclone *url*_
*│* _.gdrive *url*_
*│* _.pptiktok *usr*_
*│* _.igstory *usr*_
*│* _.twitter *url*_
*│* _.stickerpack *url*_
*│* _.dapk2 *url*_
*│* _.xnxxdl *url*_
*│* _.xvideosdl *url*_
*╰─────────────────┄⊰*

*╭┄⊰ BUSCADORES*
*│* _.githubsearch *txt*_
*│* _.pelisplus *txt*_
*│* _.modapk *txt*_
*│* _.stickersearch *txt*_
*│* _.stickersearch2 *txt*_
*│* _.xnxxsearch *txt*_
*│* _.animeinfo *txt*_
*│* _.google *txt*_
*│* _.letra *txt*_
*│* _.wikipedia *txt*_
*│* _.ytsearch *txt*_
*│* _.playstore *txt*_
*╰─────────────────┄⊰*

*╭┄⊰ CONVERTIDORES*
*│* _.toanime *img*_
*│* _.togifaud *video*_
*│* _.tomp3 *video*_
*│* _.toimg *sticker*_
*│* _.tovideo *sticker*_
*│* _.tomp3 *nota de voz*_
*│* _.toptt *video / audio*_
*│* _.tts *idioma txt*_
*│* _.tts *efecto txt*_
*│* _.tourl *video / img / audio*_
*╰─────────────────┄⊰*

*╭┄⊰ HERRAMIENTAS*
*│* _.inspect *wagc_url*_
*│* _.chatgpt *txt*_
*│* _.delchatgpt_
*│* _.gptvoz *txt*_
*│* _.dalle *txt*_
*│* _.traducir *txt*_
*│* _.styletext *txt*_
*│* _.img *txt*_
*│* _.qrcode *txt*_
*│* _.hd *img*_
*│* _.readqr *img*_
*│* _.ocr *img*_
*│* _.acortar *url*_
*│* _.afk *motivo*_
*│* _.del *msj*_
*│* _.nowa *num*_
*│* _.horario_
*│* _.dropmail_
*│* _.igstalk *usr*_
*│* _.tiktokstalk *usr*_
*│* _.whatmusic *audio*_
*│* _.clima *país ciudad*_
*│* _.encuesta *txt1 txt2*_
*│* _.redmore *txt1 txt2*_
*│* _.calc *operación*_
*│* _.spamwa *num txt cant*_
*│* _.tamaño *cant img / video*_
*│* _.readviewonce *img / video*_
*╰─────────────────┄⊰*

*╭┄⊰ GRUPOS*
*│* _.add *num*_
*│* _.kick *@tag*_
*│* _.kick2 *@tag*_
*│* _.promote *@tag*_
*│* _.demote *@tag*_
*│* _.warn *@tag*_
*│* _.unwarn *@tag*_
*│* _.listanum *txt*_
*│* _.kicknum *txt*_
*│* _.setname *txt*_
*│* _.setdesc *txt*_
*│* _.setbye *txt*_
*│* _.todos *txt*_
*│* _.notify *txt*_
*│* _.setwelcome *txt*_
*│* _.grupo *abrir / cerrar*_
*│* _.grouptime *opción tiempo*_
*│* _.infogroup_
*│* _.resetlink_
*│* _.listwarn_
*│* _.fantasmas_
*│* _.destraba_
*│* _admins *txt* (sin prefijo)_
*╰─────────────────┄⊰*

*╭┄⊰ JUEGOS*
*│* _.mates_
*│* _.fake *txt @tag*_
*│* _.ppt_
*│* _.prostituto *nombre / @tag*_
*│* _.prostituta *nombre / @tag*_
*│* _.gay2 *nombre / @tag*_
*│* _.gay *nombre / @tag*_
*│* _.lesbiana *nombre / @tag*_
*│* _.pajero *nombre / @tag*_
*│* _.pajera *nombre / @tag*_
*│* _.puto *nombre / @tag*_
*│* _.puta *nombre / @tag*_
*│* _.manco *nombre / @tag*_
*│* _.manca *nombre / @tag*_
*│* _.rata *nombre / @tag*_
*│* _.love *nombre / @tag*_
*│* _.doxear *nombre / @tag*_
*│* _.pregunta *txt*_
*│* _.simi *txt*_
*│* _.top *txt*_
*│* _.suitpvp *@tag*_
*│* _.slot *apuesta*_
*│* _.ttt *nombre de la sala*_
*│* _.acertijo_
*│* _.topgays_
*│* _.topotakus_
*│* _.formarpareja_
*│* _.verdad_
*│* _.reto_
*│* _.cancion_
*│* _.pista_
*│* _.akinator_
*│* _.ruleta_
*│* _.wordfind_
*│* _.glx_
*╰─────────────────┄⊰*

*╭┄⊰ STICKERS*
*│* _.s *img / video / url*_
*│* _.s2 *img / video / url*_
*│* _.emojimix *emoji1 emoji2*_
*│* _.scircle *img*_
*│* _.sremovebg *img*_
*│* _.semoji *tipo emoji*_
*│* _.qc *txt*_
*│* _.attp *txt*_
*│* _.attp2 *txt*_
*│* _.attp3 *txt*_
*│* _.ttp *txt*_
*│* _.ttp2 *txt*_
*│* _.ttp3 *txt*_
*│* _.ttp4 *txt*_
*│* _.ttp5 *txt*_
*│* _.pat *@tag*_
*│* _.slap *@tag*_
*│* _.kiss *@tag*_
*│* _.dado_
*│* _.wm *packname autor*_
*│* _.stickermarker *efecto img*_
*│* _.stickerfilter *efecto img*_
*╰─────────────────┄⊰*

*╭┄⊰ ECONOMIA*
*│* _.adventure_
*│* _.cazar_
*│* _.cofre_
*│* _.balance_
*│* _.claim_
*│* _.heal_
*│* _.lb_
*│* _.levelup_
*│* _.myns_
*│* _.perfil_
*│* _.work_
*│* _.minar_
*│* _.minar2_
*│* _.buy_
*│* _.buyall_
*│* _.verificar_
*│* _.crime_
*│* _.robar *cant @tag*_
*│* _.transfer *tipo cant @tag*_
*│* _.unreg *sn*
*╰─────────────────┄⊰*

*╭┄⊰ CHAT ANÓNIMO*
*│* _.start_
*│* _.next_
*│* _.leave_
*╰─────────────────┄⊰*

*╭┄⊰ AUDIO EFECTOS*
*│* ⓘ Responde a un audio.
*│* _.bass_
*│* _.blown_
*│* _.deep_
*│* _.earrape_
*│* _.fast_
*│* _.fat_
*│* _.nightcore_
*│* _.reverse_
*│* _.robot_
*│* _.slow_
*│* _.smooth_
*│* _.tupai_
*╰─────────────────┄⊰*

*╭┄⊰ EFECTOS & LOGOS*
*│* _.logos *efecto txt*_
*│* _.logochristmas *txt*_
*│* _.logocorazon *txt*_
*│* _.ytcomment *txt*_
*│* _.hornycard *@tag*_
*│* _.simpcard *@tag*_
*│* _.lolice *@tag*_
*│* _.itssostupid_
*│* _.pixelear_
*│* _.blur_
*╰─────────────────┄⊰*

*╭┄⊰ FRASES & TEXTOS*
*│* _.piropo_
*│* _.consejo_
*│* _.fraseromantica_
*│* _.historiaromantica_
*╰─────────────────┄⊰*

*╭┄⊰ ALEATORIO*
*│* _.kpop_
*│* _.messi_
*│* _.cristianoronaldo_
*│* _.cat_
*│* _.dog_
*│* _.meme_
*│* _.itzy_
*│* _.blackpink_
*│* _.navidad_
*│* _.wpmontaña_
*│* _.pubg_
*│* _.wpgaming_
*│* _.wpaesthetic_
*│* _.wpaesthetic2_
*│* _.wprandom_
*│* _.wallhp_
*│* _.wpvehiculo_
*│* _.wpmoto_
*│* _.coffee_
*│* _.pentol_
*│* _.caricatura_
*│* _.ciberespacio_
*│* _.technology_
*│* _.doraemon_
*│* _.hacker_
*│* _.planeta_
*│* _.randomprofile_
*╰─────────────────┄⊰*

*╭┄⊰ PROPIETARIO & MODS*
*│* _.dsowner_
*│* _.setprefix *prefijo*_
*│* _.resetprefix_
*│* _.autoadmin_
*│* _.grouplist_
*│* _.chetar_
*│* _.leavegc_
*│* _.cajafuerte_
*│* _.blocklist_
*│* _.cleartpm_
*│* _.restart_
*│* _.update_
*│* _.banlist_
*│* _.listcmd_
*│* _.addcmd *txt*_
*│* _.delcmd_
*│* _.saveimage_
*│* _.viewimage_
*│* _.addowner *@tag / num*_
*│* _.delowner *@tag / num*_
*│* _.block *@tag / num*_
*│* _.unblock *@tag / num*_
*│* _.resetuser *@tag*_
*│* _.dardiamantes *@tag / cant*_
*│* _.añadirxp *@tag / cant*_
*│* _.bc *txt*_
*│* _.bcchats *txt*_
*│* _.bcgc *txt*_
*│* _.bcgc2 *txt*_
*│* _.msg *txt*_
*│* _.bcbot *txt*_
*│* _.bcgc2 *audio / video / img*_
*│* _.addprem *@tag / tiempo*_
*│* _.addprem2 *@tag / tiempo*_
*│* _.addprem3 *@tag / tiempo*_
*│* _.addprem4 *@tag / tiempo*_
*│* _.del prem *@tag*_
*│* _.setppbot *img*_
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
    conn.reply(m.chat, '*[❗𝐈𝐍𝐅𝐎❗] 𝙴𝙻 𝙼𝙴𝙽𝚄 𝚃𝙸𝙴𝙽𝙴 𝚄𝙽 𝙴𝚁𝚁𝙾𝚁 𝚈 𝙽𝙾 𝙵𝚄𝙴 𝙿𝙾𝚂𝙸𝙱𝙻𝙴 𝙴𝙽𝚅𝙸𝙰𝚁𝙻𝙾, 𝚁𝙴𝙿𝙾𝚁𝚃𝙴𝙻𝙾 𝙰𝙻 𝙿𝚁𝙾𝙿𝙸𝙴𝚃𝙰𝚁𝙸𝙾 𝙳𝙴𝙻 𝙱𝙾𝚃*', m);
  }
};
handler.command = /^(menu|menú|memu|memú|help|info|comandos|allmenu|2help|menu1.2|ayuda|commands|commandos|cmd)$/i;
handler.exp = 50;
handler.fail = null;
export default handler;
function clockString(ms) {
  const h = isNaN(ms) ? '--' : Math.floor(ms / 3600000);
  const m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60;
  const s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60;
  return [h, m, s].map((v) => v.toString().padStart(2, 0)).join(':');
}
