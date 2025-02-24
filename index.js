const express = require('express');
const { resolve } = require('path');
const mongoose = require('mongoose');

const app = express();
const port = 3010;

app.use(express.static('static'));



const DB_URL = 'mongodb+srv://Venkata_Eswar:ESWAR20062006@project.fowoq.mongodb.net/?retryWrites=true&w=majority&appName=Project';

mongoose.connect(DB_URL)
.then(()=>{console.log('Mongodb connected Successfully!')})
.catch(err => console.log('Mongodb connection failed : ',err));


app.get('/', (req, res) => {
  res.sendFile(resolve(__dirname, 'pages/index.html'));
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});