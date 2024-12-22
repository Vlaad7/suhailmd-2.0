const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/suhailmd-2.0";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© SuhailTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "237698947449";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "237699692556";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_11_10_12_22_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODAsXG4gICAgICAgIDIyLFxuICAgICAgICAzNCxcbiAgICAgICAgOTYsXG4gICAgICAgIDIzOCxcbiAgICAgICAgODgsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTAyLFxuICAgICAgICAxNCxcbiAgICAgICAgNjYsXG4gICAgICAgIDE5MSxcbiAgICAgICAgNDcsXG4gICAgICAgIDk2LFxuICAgICAgICA0NyxcbiAgICAgICAgMTczLFxuICAgICAgICA1MixcbiAgICAgICAgMjIzLFxuICAgICAgICA5NyxcbiAgICAgICAgMTkzLFxuICAgICAgICA5OCxcbiAgICAgICAgOTUsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMjA1LFxuICAgICAgICAyNDQsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTYwLFxuICAgICAgICAyMTMsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMjUxLFxuICAgICAgICA0NixcbiAgICAgICAgNjYsXG4gICAgICAgIDkxXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDg1LFxuICAgICAgICAxOTcsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTUxLFxuICAgICAgICAxOSxcbiAgICAgICAgMTU0LFxuICAgICAgICAxNzcsXG4gICAgICAgIDQsXG4gICAgICAgIDc1LFxuICAgICAgICA3NyxcbiAgICAgICAgOTAsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTc0LFxuICAgICAgICAxMTAsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTM5LFxuICAgICAgICA0NSxcbiAgICAgICAgMjUyLFxuICAgICAgICAzNyxcbiAgICAgICAgMTIxLFxuICAgICAgICA5LFxuICAgICAgICAxNTUsXG4gICAgICAgIDkwLFxuICAgICAgICA4NixcbiAgICAgICAgMTA2LFxuICAgICAgICAyNDksXG4gICAgICAgIDEwOSxcbiAgICAgICAgMjQ1LFxuICAgICAgICA2NCxcbiAgICAgICAgNDgsXG4gICAgICAgIDE4MixcbiAgICAgICAgNzNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0LFxuICAgICAgICA2LFxuICAgICAgICAyNTMsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTc2LFxuICAgICAgICA3OCxcbiAgICAgICAgMzYsXG4gICAgICAgIDI0LFxuICAgICAgICAxMjgsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTU3LFxuICAgICAgICA2LFxuICAgICAgICA2NixcbiAgICAgICAgNTEsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTA2LFxuICAgICAgICAyNDAsXG4gICAgICAgIDU3LFxuICAgICAgICAyMzAsXG4gICAgICAgIDgxLFxuICAgICAgICA0LFxuICAgICAgICAxMzEsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTA0LFxuICAgICAgICA2NyxcbiAgICAgICAgNTYsXG4gICAgICAgIDczLFxuICAgICAgICA4OCxcbiAgICAgICAgMTM5LFxuICAgICAgICA4MyxcbiAgICAgICAgNTgsXG4gICAgICAgIDg2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEzNSxcbiAgICAgICAgODYsXG4gICAgICAgIDEwMixcbiAgICAgICAgMjE2LFxuICAgICAgICAxNjEsXG4gICAgICAgIDUyLFxuICAgICAgICAyNDAsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMjI3LFxuICAgICAgICAxNTUsXG4gICAgICAgIDAsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMjA1LFxuICAgICAgICAxNTAsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMCxcbiAgICAgICAgMTIwLFxuICAgICAgICA1MyxcbiAgICAgICAgMzgsXG4gICAgICAgIDc3LFxuICAgICAgICA2NyxcbiAgICAgICAgMTYyLFxuICAgICAgICAyNDcsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTMwLFxuICAgICAgICAxMjMsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTUwLFxuICAgICAgICA1NCxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxODMsXG4gICAgICAgIDExM1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTM2LFxuICAgICAgICAyMjEsXG4gICAgICAgIDEzMixcbiAgICAgICAgMjM5LFxuICAgICAgICAxNjUsXG4gICAgICAgIDQwLFxuICAgICAgICAyMDUsXG4gICAgICAgIDEzLFxuICAgICAgICAyMjAsXG4gICAgICAgIDIxLFxuICAgICAgICAyMTAsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTc1LFxuICAgICAgICAxNzYsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTA5LFxuICAgICAgICA2NixcbiAgICAgICAgMjcsXG4gICAgICAgIDI0MixcbiAgICAgICAgMjUzLFxuICAgICAgICA2NyxcbiAgICAgICAgMjI1LFxuICAgICAgICAxNCxcbiAgICAgICAgNzQsXG4gICAgICAgIDkwLFxuICAgICAgICA4NixcbiAgICAgICAgMjQ2LFxuICAgICAgICA5NyxcbiAgICAgICAgMTg4LFxuICAgICAgICAxMTksXG4gICAgICAgIDI1MCxcbiAgICAgICAgOTFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTkzLFxuICAgICAgICAxMjgsXG4gICAgICAgIDI1LFxuICAgICAgICAxNTUsXG4gICAgICAgIDExMixcbiAgICAgICAgNzIsXG4gICAgICAgIDk0LFxuICAgICAgICAxNCxcbiAgICAgICAgMjI4LFxuICAgICAgICAxMDYsXG4gICAgICAgIDk3LFxuICAgICAgICA0MixcbiAgICAgICAgMjIwLFxuICAgICAgICAxNCxcbiAgICAgICAgMTAsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTQ1LFxuICAgICAgICAyNTUsXG4gICAgICAgIDE3LFxuICAgICAgICAxMDksXG4gICAgICAgIDc5LFxuICAgICAgICAzOCxcbiAgICAgICAgMTk2LFxuICAgICAgICAxNTgsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTgxLFxuICAgICAgICAxNjEsXG4gICAgICAgIDQ4LFxuICAgICAgICA5MyxcbiAgICAgICAgNzcsXG4gICAgICAgIDIsXG4gICAgICAgIDExNFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICA2NlxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDExMixcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgODksXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICA2M1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyOSxcbiAgICAgICAgMzMsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMjE4LFxuICAgICAgICAxMCxcbiAgICAgICAgMjM3LFxuICAgICAgICAyMTcsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTg2LFxuICAgICAgICAxLFxuICAgICAgICAxMTcsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTA3LFxuICAgICAgICA4OSxcbiAgICAgICAgMTQ4LFxuICAgICAgICAyMSxcbiAgICAgICAgNzcsXG4gICAgICAgIDEzNixcbiAgICAgICAgMjI1LFxuICAgICAgICAyMjEsXG4gICAgICAgIDY1LFxuICAgICAgICAxMzksXG4gICAgICAgIDk1LFxuICAgICAgICAyMTksXG4gICAgICAgIDIzOSxcbiAgICAgICAgOTUsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTE5LFxuICAgICAgICAxMTAsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMjQ2LFxuICAgICAgICAyNDksXG4gICAgICAgIDExNixcbiAgICAgICAgMjA4LFxuICAgICAgICAxMzUsXG4gICAgICAgIDY0LFxuICAgICAgICAxMDgsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMjE2LFxuICAgICAgICAxMTAsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTUsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMjI0LFxuICAgICAgICAyMzksXG4gICAgICAgIDQwLFxuICAgICAgICA2OSxcbiAgICAgICAgODMsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTMyLFxuICAgICAgICAyMDksXG4gICAgICAgIDE1MyxcbiAgICAgICAgMjIxLFxuICAgICAgICAxMzEsXG4gICAgICAgIDEyLFxuICAgICAgICAyMjUsXG4gICAgICAgIDEyNSxcbiAgICAgICAgNzUsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMjQsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTAyLFxuICAgICAgICAyNTIsXG4gICAgICAgIDEzXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiA3MyxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJHcTF4eHhvWTlJanFkTG9KQ2FURzZJVW1uNUk3RGtjYlRXbUkxek5qTm1RPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJJQ3VZelJxLVNVLVZlWDktcmdGNFRRXCIsXG4gIFwicGhvbmVJZFwiOiBcImEwMmVkZTgxLTQ1YjItNGQ3NC1iYTUxLTViOWQwNDgwYjczOVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyNyxcbiAgICAgIDUzLFxuICAgICAgNjksXG4gICAgICAxODAsXG4gICAgICA3OCxcbiAgICAgIDE2NixcbiAgICAgIDgzLFxuICAgICAgMjE0LFxuICAgICAgMTkyLFxuICAgICAgMTMwLFxuICAgICAgMzEsXG4gICAgICAxNTQsXG4gICAgICAyNDIsXG4gICAgICA2NixcbiAgICAgIDU5LFxuICAgICAgNDQsXG4gICAgICA1MixcbiAgICAgIDIwNSxcbiAgICAgIDUsXG4gICAgICA3MlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMTUsXG4gICAgICAyMTYsXG4gICAgICAyMzksXG4gICAgICAyNDksXG4gICAgICAxNjQsXG4gICAgICAyMjYsXG4gICAgICA5NSxcbiAgICAgIDY1LFxuICAgICAgMTY3LFxuICAgICAgODgsXG4gICAgICAyNTEsXG4gICAgICAxMzYsXG4gICAgICAyMzYsXG4gICAgICA5MCxcbiAgICAgIDIxNSxcbiAgICAgIDIwMCxcbiAgICAgIDg4LFxuICAgICAgMTk1LFxuICAgICAgMTgsXG4gICAgICAxMjRcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiVEU1Uk1IUUhcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNzY5OTY5MjU1Njo4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiQWZyaWNhVGVjaFwiLFxuICAgIFwibGlkXCI6IFwiMTkwMDk1MzAyODczMzA4OjhAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTDZ4NzZRRkVKSG5uN3NHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJYR2ttRVZucURwY2NTUDFMMjdSZktvOGFBZ2tkNWtiSGZUaFRBZGhoeWw4PVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIlAxZjRhWFg4RndhUEh4RlpFTFlvRndDTTNkcUtHbU5PS3o3eXJDc09nUThiLzFNUHNNa2U3WWp4cmY0YzFORlBuNWJibVlwRk1JbEYzc3JzUzJQcGhnPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIkhVNXluVnFvZUJ0RitEQ3FFenI0ejE1aE5WWDZNQ2tTNUIvQkdLVjAySG9zQkpXSXlLODVLNE9ZRzFnYzNZajlRaUcwTnFtVktveTBESW1UWWxOS0FnPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNzY5OTY5MjU1Njo4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDIsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICA1NixcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgOTVcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmlcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTczNDg2NTgxM1xufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS11bmRlZmluZWQuanNvbiI6IHt9Cn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
