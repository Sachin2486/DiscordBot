const {Client , GatewayIntentBits } = require('discord.js');

const Client = new Client({intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent]

});

Client.on('messageCreate', message => {
  //  console.log(message.content);
  if(message.author.bot) return;
  if(message.content.startsWith('create')){
    const url = message.content.split('create')[1]
    return message.reply({
        content: "Generating Short ID for " + url,
    })
  }
  message.reply({
    content : "Hi from Bot",
  })
}) 

Client.on('interactionCreate', interaction => {
    console.log(interaction);
    interaction.reply('Pong!');
});

client.login = (
    "Auth Token"
)