// Required libraries for repl.it
const Discord = require('discord.js')
const fetch = require('node-fetch');
const axios = require('axios');

// Required keys & tokens
const postman_API_key = 'your-postman-api-key';
const discord_bot_token = "your-discord-bot-token";

const bot = new Discord.Client();
const prefix = '!fn'

bot.on('ready', () => {
  console.log("bot logged on")
})

bot.on('message', async msg => {
  // Checks for !fn prefix and does nothing if not found
  if(msg.content[0] + msg.content[1] + msg.content[2] !== prefix){
    return
  }

  const args = msg.content.slice(prefix.length).trim().split(' ');
  const command = args.shift().toLowerCase();

    if (command === 'user') {
      let name = "Ninja";
      if(args[0]) {
        name = args[0]
      }
      let user = {
        "username": name
      }
      let url = `your-url-from-postman`;
      let response = fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        "body": JSON.stringify(user)
      });
    }

})

bot.login(discord_bot_token);
