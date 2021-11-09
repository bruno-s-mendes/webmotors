const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(express.json());

app.use(bodyParser.urlencoded({ extended: false }));

app.delete('/ads/:id', );

app.get('/', );
app.get('/ads', );

app.put('/ads/:id', );

app.post('/ads', );

app.listen(3000, () => console.log('ouvindo porta 3000!'));