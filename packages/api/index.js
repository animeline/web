const express = require("express");
const app = express();

app.get('/',(req,res) => {
  res.send("This is a sample express app");
});

app.listen(3000, () => console.log('Server is booming on port 5000'));
