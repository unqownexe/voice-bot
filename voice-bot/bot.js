var Discord = require('discord.js');
var bot = new Discord.Client();
var aktif = true;

bot.on('message', message => {
  if (aktif && message.content === '!konus')
  {
  aktif = false;
  var voiceChannel = message.guild.members.get(message.author.id).voiceChannel;
  if(!voiceChannel) return message.reply("Bir sesli kanala bağlan.")
  voiceChannel.join().then(connection =>
  {const dispatcher = connection.playFile('./Ses Dosyalari/geceyi-anlat.mp3');
      dispatcher.on("end", end => {
      voiceChannel.leave();
      });
    }).catch(err => console.log(err));
    aktif = true;}});


bot.login('');