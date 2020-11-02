const express = require("express");

const app = express();

const client = require('./lib/client')

app.get("/", (req, res) => res.json({ ok: true, tag: client.user.tag }));

module.exports = app;
