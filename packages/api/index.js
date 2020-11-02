require('dotenv/config');

const express = require("express");
const { Client } = require('discord.js');

const app = express();
const client = new Client();

app.get('/',(req,res) => res.send("This is a sample express app"));
client.on('ready', () => client.user.setPresence({ activity: { name: 'Bot online' } }));

client.login(process.env.TOKEN, () => console.log('Bot online'));
app.listen(3000, () => console.log('Server is booming on port 3000'));
