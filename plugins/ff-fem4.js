const handler = async (m, {conn}) => {
  m.reply(global.fem4);
};
handler.command = /^(fem4|fem4vs4)$/i;
export default handler;
handler.admin = true
handler.group = true
handler.botAdmin = true

global.fem4 = `ㅤㅤ *_VS FEM 4VS4_*

ෆ Hora: (  )🇵🇪 (  )🇦🇷
ෆ Fecha: 
ෆ Encargadx: 

ㅤ _ʚ Jugadoras:_

 🌸 • 
 🌸 • 
 🌸 • 
 🌸 • 

ㅤ _ʚ Suplentes:_

🌸 • 
🌸 • 
 
_Donadora de sala:_`;
