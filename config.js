import {watchFile, unwatchFile} from 'fs';
import chalk from 'chalk';
import {fileURLToPath} from 'url';
import fs from 'fs'; 
import cheerio from 'cheerio';
import fetch from 'node-fetch';
import axios from 'axios';
import moment from 'moment-timezone';

global.botnumber = ""
global.confirmCode = ""

global.owner = [
  ['51927238856', '👑 Cristian Escobar 👑', true],
  ['51940617554', '💫 SB - Collaborator 2 💫', true],
  ['51996089079', '💫 SB - Collaborator 3 💫', true],
  ['5218442286089', '💫 SB - Collaborator 4 💫', true],
  ['50246028932', '💫 SB - Collaborator 5 💫', true],
  ['5212412377467', '💫 SB - Collaborator 6 💫', true],
  ['5215517489568', '💫 SB - Rey Endymion 💫', false],
  ['59895555511', '💫 SB - Collaborator 8 💫', true],
  ['59175655964', '💫 SB - By Alba070503 💫', true],
  ['393518398856','💫 SB - Tester Fabri115💫', true],
  ['593968585283'], 
  ['5219991402134']
];

global.suittag = ['5219993404349'];
global.prems = ['51995386439'];

global.packname = '𝙎𝙝𝙖𝙙𝙤𝙬 𝘽𝙤𝙩-𝙎𝙓';
global.author = '𝙐𝙨𝙭𝙧 𝘾𝙧𝙭𝙭𝙨 🥀';
global.wm = '𝙎𝙝𝙖𝙙𝙤𝙬 𝘽𝙤𝙩-𝙎𝙓';
global.titulowm = '𝙎𝙝𝙖𝙙𝙤𝙬 𝘽𝙤𝙩-𝙎𝙓';
global.titulowm2 = `𝙎𝙝𝙖𝙙𝙤𝙬 𝘽𝙤𝙩-𝙎𝙓`
global.igfg = '𝙎𝙝𝙖𝙙𝙤𝙬 𝘽𝙤𝙩-𝙎𝙓';
global.wait = '*⏳ Cargando...*';

global.imagen1 = fs.readFileSync('./Menu2.jpg');
global.imagen2 = fs.readFileSync('./src/nuevobot.jpg');
global.imagen3 = fs.readFileSync('./src/Pre Bot Publi.png');
global.imagen4 = fs.readFileSync('./Menu.png');
global.imagen5 = fs.readFileSync('./src/+18.jpg');
global.imagen6 = fs.readFileSync('./Menu3.png');
global.imagen17 = fs.readFileSync('./Menumenu.jpg');
global.imagen7 = fs.readFileSync('./src/menu_pt.png');
global.imagen8 = fs.readFileSync('./src/menu_fr.png')
global.imagen9 = fs.readFileSync('./src/menu_en.png')
global.imagen10 = fs.readFileSync('./src/menu_ru.png')
global.imagen11 = fs.readFileSync('./src/menuff.jpg')
global.imagen12 = fs.readFileSync('./src/anime.jpg')
global.imagen13 = fs.readFileSync('./src/audefcts.jpg')
global.imagen14 = fs.readFileSync('./src/logoefcts.jpg')
global.imagen15 = fs.readFileSync('./src/menuaudios.jpg')
global.imagen16 = fs.readFileSync('./src/menuayd.jpg')
global.imagen18 = fs.readFileSync('./src/menurec.jpg')
global.imagen19 = fs.readFileSync('./src/opcnadm.jpg')

global.mods = [];

//* *******Tiempo***************
global.d = new Date(new Date + 3600000);
global.locale = 'es';
global.dia = d.toLocaleDateString(locale, {weekday: 'long'});
global.fecha = d.toLocaleDateString('es', {day: 'numeric', month: 'numeric', year: 'numeric'});
global.mes = d.toLocaleDateString('es', {month: 'long'});
global.año = d.toLocaleDateString('es', {year: 'numeric'});
global.tiempo = d.toLocaleString('en-US', {hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true});
//* ****************************
global.wm2 = `${dia} ${fecha}\n𝙎𝙝𝙖𝙙𝙤𝙬 𝘽𝙤𝙩-𝙎𝙓`;
global.gt = '𝙎𝙝𝙖𝙙𝙤𝙬 𝘽𝙤𝙩-𝙎𝙓';
global.mysticbot = '𝙎𝙝𝙖𝙙𝙤𝙬 𝘽𝙤𝙩-𝙎𝙓';
global.md = 'https://github.com/CrxstianEscobar/ShadowBot-SX';
global.mysticbot = 'https://github.com/CrxstianEscobar/ShadowBot-SX';
global.waitt = '*[ ⏳ ] Cargando...*';
global.waittt = '*[ ⏳ ] Cargando...*';
global.waitttt = '*[ ⏳ ] Cargando...*';
global.nomorown = '51927238856';
global.pdoc = ['application/vnd.openxmlformats-officedocument.presentationml.presentation', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', 'application/vnd.ms-excel', 'application/msword', 'application/pdf', 'text/rtf'];
global.cmenut = '❖––––––『';
global.cmenub = '┊✦ ';
global.cmenuf = '╰━═┅═━––––––๑\n';
global.cmenua = '\n⌕ ❙❘❙❙❘❙❚❙❘❙❙❚❙❘❙❘❙❚❙❘❙❙❚❙❘❙❙❘❙❚❙❘ ⌕\n     ';
global.dmenut = '*❖─┅──┅〈*';
global.dmenub = '*┊»*';
global.dmenub2 = '*┊*';
global.dmenuf = '*╰┅────────┅✦*';
global.htjava = '⫹⫺';
global.htki = '*⭑•̩̩͙⊱•••• ☪*';
global.htka = '*☪ ••••̩̩͙⊰•⭑*';
global.comienzo = '• • ◕◕════';
global.fin = '════◕◕ • •';
global.botdate = `*[ 📅 ] Fecha:*  ${moment.tz('America/Mexico_City').format('DD/MM/YY')}`;
global.bottime = `*[ ⏳ ] Hora:* ${moment.tz('America/Mexico_City').format('HH:mm:ss')}`;
global.fgif = {key: {participant: '0@s.whatsapp.net'}, message: {'videoMessage': {'title': wm, 'h': `Hmm`, 'seconds': '999999999', 'gifPlayback': 'true', 'caption': bottime, 'jpegThumbnail': fs.readFileSync('./Menu.png')}}};
global.multiplier = 99;
global.flaaa = [
  'https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=water-logo&script=water-logo&fontsize=90&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextColor=%23000&shadowGlowColor=%23000&backgroundColor=%23000&text=',
  'https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=crafts-logo&fontsize=90&doScale=true&scaleWidth=800&scaleHeight=500&text=',
  'https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=amped-logo&doScale=true&scaleWidth=800&scaleHeight=500&text=',
  'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&text=',
  'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&fillColor1Color=%23f2aa4c&fillColor2Color=%23f2aa4c&fillColor3Color=%23f2aa4c&fillColor4Color=%23f2aa4c&fillColor5Color=%23f2aa4c&fillColor6Color=%23f2aa4c&fillColor7Color=%23f2aa4c&fillColor8Color=%23f2aa4c&fillColor9Color=%23f2aa4c&fillColor10Color=%23f2aa4c&fillOutlineColor=%23f2aa4c&fillOutline2Color=%23f2aa4c&backgroundColor=%23101820&text=',
];
//* ************************

const file = fileURLToPath(import.meta.url);
watchFile(file, () => {
  unwatchFile(file);
  console.log(chalk.redBright('Update \'config.js\''));
  import(`${file}?update=${Date.now()}`);
});
