const express = require('express');
var app = express();

var notes = ['shoppinglista', 'nyckelord', 'lösenord'];


app.get('/', (req,res) => {
    res.header("Content-Type", "application/json; charset=utf-8");
    res.send('Tjena');
});

app.get('/:id', (req, res) => {
    res.header("Content-Type", "application/json; charset=utf-8");
    if (req.params.id == 'notes') {
        
        notes.forEach(function myFunction(item) {
        res.write(item + ' ');
        });

        res.end();

    } else {
        res.send('404 page not found');
    }
    
});

app.listen(8080);

console.log('Server running...')