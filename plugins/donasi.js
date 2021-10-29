let handler = async m => m.reply(`
╭─「 Donasi 」
│ •  DANA [087755080455]
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
