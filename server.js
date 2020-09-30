const express = require('express');
var app = express();

var notes = [ {name: 'shoppinglista', content: '-Mjölk \n -Bröd \n -Choklad'}, {name: 'nyckelord', content: '-Hjälp \n -Mig \n -Snälla'}, {name: 'lösenord', content: '-najs123 \n -hej123 \n -haha123'}];

app.get('/', (req,res) => {
    res.header("Content-Type", "application/json; charset=utf-8");
    res.send('Tjena');
});

app.get('/:id', (req, res) => {
    res.header("Content-Type", "application/json; charset=utf-8");
    if (req.params.id == 'notes') {
        
        notes.forEach(function myFunction(item) {
        res.write(item.content + ' ');
        });

        res.end();

    } else {
        res.send('404 page not found');
    }
    
});

app.listen(8080);

console.log('Server running...');