const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;
const bodyParser = require('body-parser');
const bot = require('./routes');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({urlencoded: true}));

app.get('/', (req,res)=> {
  console.log('hello');
 res.json('challenge');
});

app.use('/bot', bot)

app.listen(PORT, ()=> {
 console.log('listening on port: ', PORT);
});
