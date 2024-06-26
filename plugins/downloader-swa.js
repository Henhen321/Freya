let handler = async (m, { conn }) => {
	if (m.quoted?.chat != 'status@broadcast') throw `Quote Pesan Status`
	try {
		let buffer = await m.quoted.download()
		await conn.sendFile(m.chat, buffer, '', m.quoted.text || '', null, false, { quoted: m })
	} catch (e) {
		console.log(e)
		await conn.reply(m.chat, m.quoted.text, m)
	}
}

handler.help = ['downloaderstory','storydownloader']
handler.tags = ['downloader']
handler.command = ['downloadersw','dlsw','swdl','storidownloader','storydownloader','downloaderstori','downloaderstory']

export default handler