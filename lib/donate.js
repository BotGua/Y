exports.donate = (id, A187, corohelp, tampilTanggal, tampilWaktu, instagram, nomer, aktif, groupwhatsapp, youtube) => {
	return `
  
❉──────────❉
  Hi. *${id.split("@s.whatsapp.net")[0]}* 👋️
❉──────────❉

         ───
📆 *${tampilTanggal}*
⏱️ *${tampilWaktu}*
📢 Bot Aktif ; *${aktif}*
         ───
         
╔════════════════════
║ *Donasi Ke ${A187}*
╠════════════════════
║├≽️⚜ *TELKOMSEL*: _0813-6896-5962_
║├≽️⚜ *TRI*: _0898-566-7090_
║├≽️⚜ *Makasih kalo udah donasi*
╠════════════════════
║  *${A187}*
╠════════════════════
║╭──❉ *SOSMED ADMIN* ❉──
║│1. *Group WhatsApp*
║│ _${groupwhatsapp}_
║│2. *YouTube <subscribe>*
║│ _${youtube}_
║│3. *Instagram <Follow>*
║│ _${instagram}_
║│4. *Creator ${A187}*
║│ _${nomer}_
║╰───────────
╠════════════════════
║ _*MADE BY RIFKY AKBAR*_
╚════════════════════`
}

