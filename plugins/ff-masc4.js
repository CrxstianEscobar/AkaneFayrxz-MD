const handler = async (m, {conn}) => {
  m.reply(global.masc4);
};
handler.command = /^(masc4|masc4vs4)$/i;
export default handler;
handler.admin = true
handler.group = true
handler.botAdmin = true

global.masc4 = `ㅤㅤ *_VS MASC 4VS4_*

ෆ Hora: (  )🇵🇪 (  )🇦🇷
ෆ Fecha: 
ෆ Encargadx: 

ㅤ _ʚ Jugadores:_

 🥷🏻 • 
 🥷🏻 • 
 🥷🏻 • 
 🥷🏻 • 

ㅤ _ʚ Suplentes:_

🥷🏻 • 
🥷🏻 • 
 
_Donador de sala:_`;
