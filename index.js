const Discord = require('discord.js');
const bot = new Discord.Client();

const token = 'NjMzNDUwMjg5MzY1NTE2Mjk4.Xae5cA.-WkMZ7ppVOX0KiGen45s0mtKxVU';

const PREFIX = "!";

var version = 'Version 1.0.1'

bot.on('ready', () =>{
   console.log('This bot is online!');
})

bot.on('message', message=>{
   let args = message.content.substring(PREFIX.lenght).split(" ");

   switch(args[0]){
      case 'Go Griz':
         message.reply('Fuck You!!')
         break;
      case 'ping':
         message.channel.sendMessage('pong!')
         break;
      case 'website':
         message.channel.sendMessage('https://www.montana.edu/')
         break;
      case 'info':
         if(args[1] === 'version'){
            message.channel.sendMessage(version);
         }else{
            message.channel.sendMessage('Invalid Argument')
         }
      break;   
   }
})

bot.login(token);