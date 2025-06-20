const fs = require('fs')
const chalk = require('chalk')

global.sessionID = process.env.SESSIONID || "KAVI-X-SESSION-ID~H9ZXyBrI#UFNouNj_j9Hj23cDjGMr8qf_EfEkBAOZS8aSB3wRMSg"
global.botname = process.env.BOTNAME || "KAVI-X MD"
global.ownernumber = process.env.OWNERNUMBER || "9466384358"
global.ownername = process.env.OWNERNAME || "🗿"
global.websitex = process.env.WEBSITEX || "https://kavi-x-bot-login.up.railway.app/"
global.wagc = process.env.WAGC || "https://chat.whatsapp.com/CG9f0paHJzwDImXiydfuht"
global.botscript = process.env.BOTSCRIPT || "https://github.com/KaviDeveloperSe/KAVI-X-BOT"
global.packname = process.env.PACKNAME || "KAVI-X MD"
global.author = process.env.AUTHOR || "🗿"
global.creator = process.env.CREATOR || "94766384358@s.whatsapp.net"
global.botprefix = process.env.BOTPREFIX || "/"
global.restart = process.env.RESTART || "true"
global.mongoDB = process.env.MONGODB_URI || "mongodb+srv://sam:sam@cluster0.u1smxsv.mongodb.net/?retryWrites=true&w=majority"

let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright(`Update'${__filename}'`))
    delete require.cache[file]
    require(file)
})
