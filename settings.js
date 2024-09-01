//base by Jean Parker 
//re-upload? recode? copy code? give credit ya :)
//YouTube: @Jean-Parker-tech
//Instagram: its_jeanparker
//Telegram: t.me/Jeanparker100
//GitHub: @Jeanparker100
//WhatsApp: +22898133388
//want more free bot scripts? subscribe to my youtube channel: https://youtube.com/@Jean-Parker-tech

const fs = require('fs')
const chalk = require('chalk')

//contact details
global.ownernomer = "2348144317152"
global.ownername = "WALLY JAY TECH ❤️"
global.ytname = "YT: WALLY JAY TECH"
global.socialm = "GitHub: wallyjaytechy"
global.location = "Nigeria,Osun"

global.ownernumber = 2348144317152'  //creator number
global.ownername = 'WALLY JAY TECH ❤️' //owner name
global.botname = 'WALLY BUG BOT' //name of the bot

//sticker details
global.packname = 'WALLYJAYTECH-MD'
global.author = 'WALLY JAY TECH'

//console view/theme
global.themeemoji = '🧡'
global.wm = "wally jay in©"

//theme link
global.link = 'https://wa.me/2348144317152'

//custom prefix
global.prefa = ','

//false=disable and true=enable
global.autoRecording = false //auto recording
global.autoTyping = false //auto typing
global.autorecordtype = true //auto typing + recording
global.autoread = true //auto read messages
global.autobio = true //auto update bio
global.anti92 = false //auto block +92 
global.autoswview = true //auto view status/story

//menu type 
//v1 is image menu, 
//v2 is link + image menu,
//v3 is video menu,
//v4 is call end menu
global.typemenu = 'v1'

//text bug
global.xbugtex = {
xtxt: '😈 WALLY BUG BOT 👿',
}
global.bimg = 'https://graph.org/file/99c8f663a3df96a5a54de.jpg'
//reply messages
global.mess = {I no fit lie you, me self no guide Ajeh. I'm broke for real, I no get up to 200 naira for my Aza talkless of having money Wey I go use do sub or use chop I'm sorry boss, I no fit render
any help now cuz me self I'm going through a lot ajeh, and I go happy if I fit see 100mb or even it na 500naira only from you make I fit use am chop today and tomorrow. My mom self talk say make I borrow her some change, I just Dey give her scope say make she chill meanwhile I no get shishi, family and friends need me but I'm not there for them, you need me right now too and i could not render any help because in fucking broke, boss please shey make I paste my Aza ni make you do your boi at all at all, ajeh we gather dey, please bro don't tell me that you don't have, I'll collect any amount you give me please. I'm suffering. you people just Dey think say I get money ni, ajeh i no
get Shingbain for hand, I just Dey
    done: '𝐃𝐨𝐧𝐞 !',
    prem: '𝐓𝐡𝐢𝐬 𝐟𝐞𝐚𝐭𝐮𝐫𝐞 𝐜𝐚𝐧 𝐛𝐞 𝐮𝐬𝐞𝐝 𝐛𝐲 𝐩𝐫𝐞𝐦𝐢𝐮𝐦 𝐮𝐬𝐞𝐫 𝐨𝐧𝐥𝐲',
    admin: '𝐓𝐡𝐢𝐬 𝐟𝐞𝐚𝐭𝐮𝐫𝐞 𝐜𝐚𝐧 𝐛𝐞 𝐮𝐬𝐞𝐝 𝐛𝐲 𝐚𝐝𝐦𝐢𝐧 𝐨𝐧𝐥𝐲',
    botAdmin: '𝐓𝐡𝐢𝐬 𝐟𝐞𝐚𝐭𝐮𝐫𝐞 𝐜𝐚𝐧 𝐨𝐧𝐥𝐲 𝐛𝐞 𝐮𝐬𝐞𝐝 𝐰𝐡𝐞𝐧 𝐭𝐡𝐞 𝐛𝐨𝐭 𝐢𝐬 𝐚 𝐠𝐫𝐨𝐮𝐩 𝐚𝐝𝐦𝐢𝐧',
    owner: '𝐓𝐡𝐢𝐬 𝐟𝐞𝐚𝐭𝐮𝐫𝐞 𝐜𝐚𝐧 𝐛𝐞 𝐮𝐬𝐞𝐝 𝐛𝐲 𝐨𝐰𝐧𝐞𝐫 𝐨𝐧𝐥𝐲',
    group: '𝐓𝐡𝐢𝐬 𝐟𝐞𝐚𝐭𝐮𝐫𝐞 𝐢𝐬 𝐨𝐧𝐥𝐲 𝐟𝐨𝐫 𝐠𝐫𝐨𝐮𝐩𝐬',
    private: '𝐓𝐡𝐢𝐬 𝐟𝐞𝐚𝐭𝐮𝐫𝐞 𝐢𝐬 𝐨𝐧𝐥𝐲 𝐟𝐨𝐫 𝐩𝐫𝐢𝐯𝐚𝐭𝐞 𝐜𝐡𝐚𝐭𝐬',
    wait: '𝐈𝐧 𝐩𝐫𝐨𝐜𝐞𝐬𝐬...',    
    error: '𝐄𝐫𝐫𝐨𝐫!',
}

global.thumb = fs.readFileSync('./parkyMedia/thumb.jpg')

let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright(`Update'${__filename}'`))
    delete require.cache[file]
    require(file)
})
