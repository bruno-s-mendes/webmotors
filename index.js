const express = require('express');
const bodyParser = require('body-parser');

const controller = require('./controller');

const app = express();
app.use(express.json());

app.use(bodyParser.urlencoded({ extended: false }));

app.delete('/ads/:id', controller.deleteById);

app.get('/', );
app.get('/ads', controller.getAll);

app.put('/ads/:id', controller.updateById);

app.post('/ads', controller.create);

app.listen(3000, () => console.log('ouvindo porta 3000!'));