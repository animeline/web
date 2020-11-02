const discord = require('discord.js');
const client = new discord.Client();

client.on('ready', () => client.user.setPresence({ activity: { name: 'Bot online' } }));

module.exports = client;