//═══════════════════════════════════════════════════════//

//

//                              𝙶𝙾𝙹𝙾-𝚂𝙰𝚃𝙾𝚁𝚄 𝓫𝔂 𝓷𝓮𝔁𝓾𝓼𝓝𝔀

//𝙰𝙳𝙾𝙿𝚃𝙴𝙳 𝙵𝚁𝙾𝙼  𝚂𝙲𝚁𝙸𝙿𝚃 𝙾𝙵 𝙲𝙷𝙴𝙴𝙼𝚂𝙱𝙾𝚃 𝚅2 𝙱𝚈 𝙳𝙶𝚇𝚎𝚘𝚗 

//

//════════════════════════════//



const fs = require('fs')

const chalk = require('chalk')



//Api Website\\

global.APIs = {

	zenz: 'https://zenzapis.xyz',
}



//Api Key\\

global.APIKeys = {

	'https://zenzapis.xyz': '0b0df72a76', //credit goes to sanzy yt, if api key expire, buy it and put it here?\\

}



//customize settings\\

global.owner = ['Siro Bot']

global.premium = ['👑Siro Bot👑']

global.ownernomer = '79586848937'

global.ownername = 'Siro Bot💎'

global.botname = '💎Siro Bot💎'

global.footer = '©💗Siro Bot.'

global.ig = 'https://wa.me/+79586848937'

global.region = 'Sri Lanka, North Central Peovince, Anuradhapura'

global.sc = 'https://wa.me/+79586848937'

global.myweb = 'https://youtube.com/channel/UCeGgOY9B-5fYrYD5ELPgMkQ'

global.packname = '💎Siro Bot💎'

global.author = '💎Siro Bot💎'

global.sessionName = 'session'

global.prefa = ['','!','.','❄','🖤','☃']

global.sp = '◈'

global.mess = {

    success: 'تم ✓🌹⃝⃘̉̉̉̉̉̉🧚',

    admin: 'هذه الميزة للمشرف فقط!!✾ـٰٰٰٰٖٖٖٖٜ۬ـٰٰٰٖٖٖٜ۬ـٰٰٖٖٜ۬ـٰٖٜ۬ـٰٖٜ۬ـٰٰٖٖٜ۬ـٰٰٰٖٖٖٜ۬ـٰٰٰٰٖٖٖٖٜ۬ـٰٰٰٖٖٖٜ۬ـٰٰٖٖٜ۬ـٰٖٜ۬ـٰٖٜ۬ـٰٰٖٖٜ۬ـٰٰٰٖٖٖٜ۬ـٰٰٰٰٖٖٖٖٜ۬✾➣',

    botAdmin: 'يجب أن يكون الروبوت مسؤولاً أولاً!❤️⃟✦⃝̮̮̮̯̯̯😌',

    owner: 'هذه الميزة للمالك فقط!،😯⃟💦᭄᭄̊̊̊̊࿔!',

    group: 'الميزة مستخدمة فقط للمجموعات!،😒⃝⃟ꦾ👌ꦿ',

    private: 'الميزات المستخدمة فقط في الدردشة الخاصة😯⃟💦᭄᭄̊̊̊̊࿔!',

    bot: 'هذه الميزة مخصصة للبوت فقط❤️⃝➤⃟̱̱̱̱̄̄̄̄😢',

    wait: 'انتظر لحظة ...🦋⃝❉⃟࿔ꦿ',

    error: 'خطأ! ربما انتهت صلاحية مفتاح Api! ،‏🤔!',

    endLimit: 'انتهت صلاحية الحد اليومي الخاص بك ، سيتم إعادة تعيين الحد كل 12 ساعة',

}

    global.limitawal = {

    premium: "Infinity",

    free: 12,

    monayawal: 1000

}

   global.rpg = {

   darahawal: 100,

   besiawal: 15,

   goldawal: 10,

   emeraldawal: 5,

   umpanawal: 5,

   potionawal: 1

}

global.thumb = fs.readFileSync('./GojoMedia/HD-wallpaper-little-queen-red-pretty-dress-queen-beautiful-magic-sweet-throne-anime-beauty-anime-girl-long-hair-blue-art-lovely-blonde-hair-swet-cute-girl-purple-crown.jpg')

global.flaming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='

global.fluming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='

global.flarun = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='

global.flasmurf = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='

let file = require.resolve(__filename)

fs.watchFile(file, () => {

	fs.unwatchFile(file)

	console.log(chalk.redBright(`Update'${__filename}'`))

	delete require.cache[file]

	require(file)

})
