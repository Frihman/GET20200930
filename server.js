var express = require('express');
var app = express();

var notes = ['shoppinglista', 'nyckelord', 'lösenord'];

app.get('/', (req,res) => {
    res.send('Tjena');
});

app.get('/:id', (req, res) => {
    if (req.params.id == 'notes') {
        notes.forEach(function myFunction(item) {
        res.write(item + ' ');
        });

        res.end();

        
    } else {
        res.send('404 page not found');
    }
    
})

app.get('/notes', (req, res) => {
    
});

app.listen(8080);

console.log('Server running...')