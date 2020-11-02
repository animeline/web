require('dotenv/config');

const express = require("express");
const { Client } = require('discord.js');

const app = express();

app.get('/',(req,res) => res.send("This is a sample express app"));
app.listen(3000, () => console.log('Server is booming on port 3000'));

const client = new Client();

client.on('ready', () => client.user.setPresence({ activity: { name: 'Bot online' } }));
client.login(process.env.TOKEN, () => console.log('Bot online'));
