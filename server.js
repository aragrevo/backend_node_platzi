const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();

const response = require('./network/response');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(router);

// app.use('/', (req, res) => {
//     res.send('Hola');
// });

router.get('/message', (req, res) => {
  res.send('Listado');
});

router.post('/message', (req, res) => {
  console.log(req.query);
  console.log(req.body);
  response.success(req, res, 'Ok, creado', 201);
});

app.use('/app', express.static('public'));

app.listen(3000);
console.log('Escuchando en http://localhost:3000');
