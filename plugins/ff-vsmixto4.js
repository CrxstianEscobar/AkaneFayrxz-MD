const handler = async (m, {conn}) => {
  m.reply(global.mixto4);
};
handler.command = /^(mixto4|mixto4vs4)$/i;
export default handler;
handler.admin = true
handler.group = true
handler.botAdmin = true

global.mixto4 = `ㅤㅤㅤㅤ *_VV2 MIXTO_*
╭─────━━━━────── •••
»  _*⏰Hora:* 00🇵🇪 / 02🇦🇷_
»  _*☁️Modalidad:* 4vs4_
╰◣◥◣◥◤◢◤◢◣◥◣◥◤
ㅤ _ʚ Jugadorxs:_ ᭡
🚻 • 
🚻 • 
🚻 • 
🚻 • 
ㅤ _ʚ Suplentes:_ ᭡
🚻 • 
🚻 •
· · ────── ·•· ────── · ·`;