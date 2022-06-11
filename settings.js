
  const fs = require('fs')
  const chalk = require('chalk')

  // Free Apikey
  global.APIs = {
  riy: 'https://api-riy.herokuapp.com',
  }

  global.APIKeys = {
  'https://api-riy.herokuapp.com': 'RiyGanz',
  }

  // Edit Sesuai Kemauanmu
  global.autoReadGc = false // Ubah Ke false Jika Chat Di Grup Tidak Ingin Di Baca Oleh Bot
  global.autoReadAll = false // Ubah Ke true Jika Ingin Seluruh Chat Di Baca Oleh Bot
  global.anticall = false // Ubah Ke false Jika Tidak Ingin Bot Blockir Yang Telepon
  global.available = false // Ubah Ke false Jika Bot Mu Tidak Ingin Terlihat Online
  global.autoTyping = true // Ubah Ke true Jika Ingin Saat Ada Yang Chat Bot Auto Mengetik
  global.autoRecord = true // Ubah Ke false Jika Tidak Ingin Saat Ada Yang Chat Bot Auto Merekam
  global.multiplier = 69 // Semakin Besar Angkanya Semakin Sulit Untuk Naik Level
  global.limitCount = 70 // 70 Dah Pas Banh
  global.prefa = ['','.','/','#']

  // Other
  global.ownername = 'Eno' // Ganti Jadi Namamu
  global.owner = ['6283175371513','6283175371513','6283175371513'] // Kalo Mau Lebih Tambahin Aja
  global.ownernomer = '6283175371513' // Owner Utama Istilahnya
  global.botname = 'DH-' // Ganti Jadi Nama Botmu
  global.packname = 'DH-' // Sticker Weem
  global.author = 'Eno Ar' // Sticker Weem
  global.webme = 'https://eno4api.herokuapp.com/' // Ganti Sama Web Mu
  global.linkgroup = 'WhatsApp group: https://chat.whatsapp.com/KYcLesHWrZB9mrPG1erQb3' // Ganti Sama Link Gc Mu
  global.sessionName = 'session'
  global.youtube = ' https://youtube.com/channel/UCKKUSzRAbfp49ZcUMMIxQYQ' // Ganti Sama Link Yt Mu
  global.github = 'https://github.com/Eno40' // Ganti Sama Link Github Mu
  global.instagram = 'https://instagram.com/AA_Renot' // Ganti Sama Link Ig mu

  // Background Setiap Menu
  global.bg1 = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=water-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
  global.bg2 = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=monarch-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
  global.bg3 = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=yolo-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
  global.bg4 = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fun-run-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='

  // Tips Menu
  global.tips1 ='اِنَّ الْمُصَّدِّقِيْنَ وَالْمُصَّدِّقٰتِ وَاَقْرَضُوا اللّٰهَ قَرْضًا حَسَنًا يُّضٰعَفُ لَهُمْ وَلَهُمْ اَجْرٌ كَرِيْمٌ🤗'
  global.tips2 = 'وَمَا أَنْفَقْتُمْ مِنْ نَفَقَةٍ أَوْ نَذَرْتُمْ مِنْ نَذْرٍ فَإِنَّ اللَّهَ يَعْلَمُهُ وَمَا لِلظَّالِمِينَ مِنْ أَنْصَارٍ (270) إِنْ تُبْدُوا الصَّدَقَاتِ فَنِعِمَّا هِيَ وَإِنْ تُخْفُوهَا وَتُؤْتُوهَا الْفُقَرَاءَ فَهُوَ خَيْرٌ لَكُمْ وَيُكَفِّرُ عَنْكُمْ مِنْ سَيِّئَاتِكُمْ وَاللَّهُ بِمَا تَعْمَلُونَ خَبِيرٌ (271) 🤗'
  global.tips3 = '{الَّذِينَ يُنْفِقُونَ أَمْوَالَهُمْ فِي سَبِيلِ اللَّهِ ثُمَّ لَا يُتْبِعُونَ مَا أَنْفَقُوا مَنًّا وَلا أَذًى لَهُمْ أَجْرُهُمْ عِنْدَ رَبِّهِمْ وَلا خَوْفٌ عَلَيْهِمْ وَلا هُمْ يَحْزَنُونَ (262) قَوْلٌ مَعْرُوفٌ وَمَغْفِرَةٌ خَيْرٌ مِنْ صَدَقَةٍ يَتْبَعُهَا أَذًى وَاللَّهُ غَنِيٌّ حَلِيمٌ (263) يَا أَيُّهَا الَّذِينَ آمَنُوا لَا تُبْطِلُوا صَدَقَاتِكُمْ بِالْمَنِّ وَالأذَى كَالَّذِي يُنْفِقُ مَالَهُ رِئَاءَ النَّاسِ وَلا يُؤْمِنُ بِاللَّهِ وَالْيَوْمِ الآخِرِ فَمَثَلُهُ كَمَثَلِ صَفْوَانٍ عَلَيْهِ تُرَابٌ فَأَصَابَهُ وَابِلٌ فَتَرَكَهُ صَلْدًا لَا يَقْدِرُونَ عَلَى شَيْءٍ مِمَّا كَسَبُوا وَاللَّهُ لَا يَهْدِي الْقَوْمَ الْكَافِرِينَ (264) }🤗'
  global.tips4 = 'الَّذِينَ يَلْمِزُونَ الْمُطَّوِّعِينَ مِنَ الْمُؤْمِنِينَ فِي الصَّدَقَاتِ وَالَّذِينَ لَا يَجِدُونَ إِلا جُهْدَهُمْ فَيَسْخَرُونَ مِنْهُمْ سَخِرَ اللَّهُ مِنْهُمْ وَلَهُمْ عَذَابٌ أَلِيمٌ (79) } 🤗️'
  global.tips5 = 'خُذْ مِنْ أَمْوَالِهِمْ صَدَقَةً تُطَهِّرُهُمْ وَتُزَكِّيهِمْ بِهَا وَصَلِّ عَلَيْهِمْ إِنَّ صَلاتَكَ سَكَنٌ لَهُمْ وَاللَّهُ سَمِيعٌ عَلِيمٌ🤗'

  // Edit Sesuai Kemauan Mu
  global.rpg = {
  limitEnd: 'Limit Anda Habis\n\n📝 Note : Limit Akan Di Reset Setiap Jam 21:00',
  }

  // Edit Sesuai Kemauanmu
  global.mess = {
  admin: '_Mhon Maaf Kamu Bukan Admin🙃_',
  botAdmin: '_Hehe Kamu Ngapain🙂_',
  owner: '_Ada Apa Yah🧐_',
  group: '_Khusus Group Ngab 😏_',
  private: '_Khusus Private Chat Ngab_',
  bot: '_Khusus Pengguna Nomer Bot_',
  wait: '_Sabar Yah😍_',
  done: '_Udah Nih🤗_',
  }

  // Kalo Mau Menyesuaikan Nama File Foto Nya
  global.thumb = fs.readFileSync('./media/hinata.jpg')
    
  // Ini Gausah Diubah
  let file = require.resolve(__filename)
  fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright(`Update'${__filename}'`))
  delete require.cache[file]
  require(file)
  })
