let handler = async(m, { conn }) => {
  await conn.sendFile(m.chat, pickRandom(asupan), 'thailand.jpg', '_*Nih Kak Random Thailandnya :3*_', m)
}
handler.help = ['thailand']
handler.tags = ['random']
handler.command = /^(thailand)$/i
handler.limit = true
handler.register = true

export default handler

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}

const asupan = [
"https://i.postimg.cc/MKwCG5Rj/p-19620yu8j1.jpg",
"https://i.postimg.cc/65s9fCZ9/p-19621n2fn1.jpg",
"https://i.postimg.cc/CK4YF2r5/p-196221mzj1.jpg",
"https://i.postimg.cc/zvQ8sRtk/p-19625i86i1.jpg",
"https://i.postimg.cc/Hk9sxjVT/p-19625rbg41.jpg",
"https://i.postimg.cc/tg9Qm5Rj/p-19628jnew1.jpg",
"https://i.postimg.cc/SszBntDc/p-19629bz111.jpg",
"https://i.postimg.cc/ZRCTVcjq/p-19629tjrl1.jpg",
"https://i.postimg.cc/kgXLQ5TJ/p-1962a1u5x1.jpg",
"https://i.postimg.cc/g2FP3pfr/p-1962abu7p1.jpg",
"https://i.postimg.cc/sDp361P5/p-1962bogt61.jpg",
"https://i.postimg.cc/x8vBRNrC/p-1962hcxhl1.jpg",
"https://i.postimg.cc/c1PJkVpG/p-1962jl0ff1.jpg",
"https://i.postimg.cc/MTRL6fpD/p-1962m8ada1.jpg",
"https://i.postimg.cc/wvvK9js4/p-1962nrl7q1.jpg",
"https://i.postimg.cc/ydrMxCm1/p-1962on9rv1.jpg",
"https://i.postimg.cc/zf4MYF8v/p-1962pkbhs1.jpg",
"https://i.postimg.cc/6pjgYNPd/p-1962vn05h1.jpg",
"https://i.postimg.cc/m20TVCFL/p-1962zveny1.jpg"
]
