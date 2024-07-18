import { File } from "megajs";
import path from "path";

let handler = async (m, { conn, args, usedPrefix, text, command }) => {
    try {
        if (!text) return m.reply(`╰⊱❗️⊱ *_ACCIÓN MAL USADA_* ⊱❗️⊱╮\n\n*_AGREGE EL LINK DE META A DESCARGAR_*\n*_EJEMPLO_*:\n${usedPrefix + command} https://mega.nz/file/ZIND1aSA#36lhq4zOR-SM0My90c2TwIs3S9eLq-bDZT5_y0zHCQM`);

        const file = File.fromURL(text);
        await file.loadAttributes();

        if (file.size >= 300000000) return m.reply('Error: El archivo es grande (Maximo tamaño: 300MB)');

        const downloadingMessage = `╰⊱💚⊱ _*ÉXITO / SUCCESS*_ ⊱💚⊱╮\n\n*_SE ESTÁ ENVIANDO SU ARCHIVO..._*`;
        m.reply(downloadingMessage);

        const caption = `𝘿𝙚𝙨𝙘𝙖𝙧𝙜𝙖 𝙚𝙭𝙞𝙩𝙤𝙨𝙖....\n\n» 𝙉𝙤𝙢𝙗𝙧𝙚: ${file.name}\n» 𝙋𝙚𝙨𝙤: ${formatBytes(file.size)}\n» 𝙁𝙚𝙘𝙝𝙖: ${fecha}`;

        const data = await file.downloadBuffer();

        const fileExtension = path.extname(file.name).toLowerCase();
        const mimeTypes = {
            ".mp4": "video/mp4",
            ".pdf": "application/pdf",
            ".zip": "application/zip",
            ".rar": "application/x-rar-compressed",
            ".7z": "application/x-7z-compressed",
            ".jpg": "image/jpeg",
            ".jpeg": "image/jpeg",
            ".png": "image/png",
        };

        let mimetype = mimeTypes[fileExtension] || "application/octet-stream";

        await conn.sendFile(m.chat, data, file.name, caption, m, null, { mimetype, asDocument: true });

    } catch (error) {
        return m.reply(`Error: ${error.message}`);
    }
}

handler.help = ["mega"]
handler.tags = ["downloader"]
handler.command = /^(mega)$/i
export default handler

function formatBytes(bytes) {
    if (bytes === 0) return '0 Bytes';

    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));

    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
}
