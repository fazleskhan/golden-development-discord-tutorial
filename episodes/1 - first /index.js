console.log("Hello World!");

const {Client, Events, GatewayIntentBits} = require("discord.js");
const {token} = require("./config.json");

const client = new Client({intents: [GatewayIntentBits.Guilds]});

client.once(Events.ClientReady, c => {
  console.log(`Logged ion as ${c.user.tag}`);
})

client.login(token);