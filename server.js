var express = require('express');
var app = express();

var notes = ['shoppinglista', 'nyckelord', 'lösenord'];

app.get('/', (req,res) => {
    res.send('Tjena');
});

app.get('/notes', (req, res) => {
    notes.forEach(element => res.send(element));
});

app.listen(8080);

console.log('Server running...')