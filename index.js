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
        .setDescription('Says hello to someone"');        

  client.application.commands.create(ping, "1209532674558140516");

  client.application.commands.create(hello, "1209532674558140516");

});

client.on(Events.InteractionCreate, interaction => {
  if(!interaction.isChatInputCommand()) return;
  if(interaction.commandName === "ping"){
    interaction.reply("Pong!");
  }
  if(interaction.commandName === "hello"){
    interaction.reply(`Hello ${interaction.user.username}`)
  }
});

client.login(token);