require('dotenv/config');

require('./app').listen(3000, () => console.log('Server is booming on port 3000'));

require('./client').login(process.env.TOKEN, () => console.log('Bot online'));
