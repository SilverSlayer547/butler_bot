// Require the necessary discord.js classes
const {Client, Events, GatewayIntentBits} = require("discord.js");
const {token} = require("./../config.json");

// Create a new client instance
const client = new Client({intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
    GatewayIntentBits.GuildMembers
]});

// Runs once when the client is ready
client.once(Events.ClientReady, readyClient => {
    console.log(`Logged in as ${readyClient.user.tag}`);
});

// Runs when user joins guild
client.once(Events.GuildMemberAdd, async newMember => {
    console.log(newMember.user.tag)
});

// Log in to Discord
client.login(token)