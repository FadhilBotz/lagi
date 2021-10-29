let fetch = require('node-fetch')

let handler = async (m, { conn, args, usedPrefix, command }) => {
  if (!args[0]) throw `uhm.. url nya mana?\n\n${usedPrefix + command} https://vt.tiktok.com/ZSJE2ffo4`
  let res = await fetch(API('amel', '/dl/tiktok', {
    url: args[0]
  }, 'APIKEY'))
  if (!res.ok) throw await res.text()
  let json = await res.json()
  if (json.Status != 200) throw json
  await conn.sendFile(m.chat, json.result.WithWM, 'tiktok.mp4', `${json.result.Judul}`, m)
}
handler.help = ['tiktok'].map(v => v + ' <url>')
handler.tags = ['downloader']
handler.command = /^(tik(tok)?(dl)?)$/i

module.exports = handler