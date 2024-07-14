const handler = async (m, {conn}) => {
  m.reply(global.fem6);
};
handler.command = /(fem6|fem6vs6)$/i;
export default handler;
handler.admin = true
handler.group = true
handler.botAdmin = true

global.fem6 = `ㅤㅤ *_VS FEM 4VS4_*

ෆ Hora: (  )🇵🇪 (  )🇦🇷
ෆ Fecha: 
ෆ Encargadx: 

ㅤ _ʚ Jugadoras:_

 🌸 • 
 🌸 • 
 🌸 • 
 🌸 • 
 🌸 • 
 🌸 • 

ㅤ _ʚ Suplentes:_

🌸 • 
🌸 • 
🌸 • 
 
_Donador(a) de sala:_`;
