const Discord = require('discord.js');
const SALMAN = new Discord.Client();

console.log("BOT ONLINE");
 
SALMAN.on("guildMemberAdd", member => {
  member.createDM().then(function (channel) {
  return channel.send(` 
**
إجعل لنا من لُقياك نصيب:black_heart::sparkles:..
 [ http://discord.gg/mVmkTNH ] 
**`) 
}).catch(console.error)
})
SALMAN.login('NTE1ODUzMjkyODAzNDU3MDM0.Dts2cg.zMyBNSFMB0NonE2I749yEEPOjwM');