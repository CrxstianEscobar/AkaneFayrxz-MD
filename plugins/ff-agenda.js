const handler = async (m, {conn, text, command}) => {
m.react('✅') 
  const yh = global.agenda;
  const url = yh[Math.floor(Math.random() * yh.length)];
  conn.sendMessage(m.chat, {image: {url: url}, caption: '*AGENDA SEMANAL*'}, {quoted: m});
};
handler.command = /^(agendasemanal|agenda)$/i;
handler.tags = ['ffagenda'];
handler.help = ['agenda'];
export default handler;

global.agenda = [
  'https://telegra.ph/file/f84de787a2085c3fe7154.jpg',
];
