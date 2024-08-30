console.log("Hello World!");

const { Client, Events, GatewayIntentBits, SlashCommandBuilder } = require('discord.js');
const { token } = require("./config.json");

const client = new Client({ intents: [GatewayIntentBits.Guilds] });

client.once(Events.ClientReady, c => {
  console.log(`Logged in as ${c.user.tag}`);

  const ping = new SlashCommandBuilder()
        .setName('ping')
        .setDescription('Replies with "Pong!"');

  const hello = new SlashCommandBuilder()
        .setName('hello')
        .setDescription('Says hello to someone')
        .addUserOption( option => 
            option
                .setName('user')
                .setDescription('The user to say hi to')
                .setRequired(false)
        );      
        
  const echo = new SlashCommandBuilder()
        .setName('echo')
        .setDescription('Repeats what you say')
        .addStringOption( option => 
            option
                .setName('text')
                .setDescription('The text to repeat')
                .setRequired(true)
        );            

  client.application.commands.create(ping, "1209532674558140516");
  client.application.commands.create(hello, "1209532674558140516");
  client.application.commands.create(echo, "1209532674558140516");

});

client.on(Events.InteractionCreate, interaction => {
  if(!interaction.isChatInputCommand()) return;
  if(interaction.commandName === "ping"){
    interaction.reply("Pong!");
  }
  if(interaction.commandName === "hello"){
    const user = interaction.options.getUser('user') || interaction.user;
    interaction.reply(`Hello ${user.username}`)
  }
  if(interaction.commandName === "echo"){
    const text = interaction.options.getString('text');
    interaction.reply(text);
  }  
});

client.login(token);