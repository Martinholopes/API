const express = require('express')
var router = require('express').Router();
const app = express()
const port = 3000

// nom i --save body-parser
var bodyParser = require('body-parser')
app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
})); 

// ----

//router.use('/a', require('./clients'));

app.listen(port, () => console.log(`Example app listening on localhost:${port}!`))

app.get('/', function (req, res) {
    res.send('Hello World!')
  })

  app.post('/', function (req, res) {
    console.log(req.body);
    res.send('Got a POST request')
  })

  app.put('/user', function (req, res) {
    res.send('Got a PUT request at /user')
  })

  app.delete('/user', function (req, res) {
    res.send('Got a DELETE request at /user')
  })


// -- Clients
app.get('/clients', function (req, res) {
  res.send(clients)
})

var clients = [
  { id: 1, name: 'Suri', morada:'Mafra', cod_postal: 2640, marca: 'Iphone', operadora:'Meo'},
  { id: 2, name: 'Rodas', morada:'Ericeira', cod_postal: 2655, marca: 'Iphone', operadora:'Vodafone'},
  { id: 3, name: 'Piquenino', morada:'Sintra', cod_postal: 2710, marca: 'Huawei', operadora:'Nos'},
  { id: 4, name: 'Stonas', morada:'Mafra', cod_postal: 2640, marca: 'Huawei', operadora:'Nos'},
  { id: 5, name: 'Moura', morada:'Malveira', cod_postal: 2665, marca: 'Huawei', operadora:'Vodafone'},
  { id: 6, name: 'Estatua', morada:'Malveira', cod_postal: 2665, marca: 'LG', operadora:'Meo'},
  { id: 7, name: 'Lula', morada:'Ericeira', cod_postal: 2655, marca: 'Samsung', operadora:'Meo'},
  { id: 8, name: 'Caseiro', morada:'Ericeira', cod_postal: 2710, marca: 'Samsung', operadora:'Nos'},
  { id: 9, name: 'Rui', morada:'Mafra', cod_postal: 2640, marca: 'LG', operadora:'Vodafone'},
  { id: 10, name: 'Alex', morada:'Sintra', cod_postal: 2710, marca: 'Samsung', operadora:'Nos'},
  { id: 11, name: 'Joao', morada:'Ericeira', cod_postal: 2655, marca: 'Samsung', operadora:'Uzo'}
];
// -----