const express = require('express');
const jsonParser = require('body-parser').json();
const Word = require('./db');

const app = express();

app.use(express.static('./public/dist'));

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
    res.header('Access-Control-Allow-Headers', 'Content-Type,X-Requested-With');
    next();
});

app.get('/word', (req, res) => {
    Word.find({})
    .then(words => res.send(words))
    .catch(err => res.send(err));
});

app.get('/word/:id', (req, res) => {
    const { id } = req.params;
    Word.findById(id)
    .then(word => res.send(word))
    .catch(err => res.send(err));
});

app.delete('/word/:id', (req, res) => {
    const { id } = req.params;
    Word.findByIdAndRemove(id)
    .then(word => res.send(word))
    .catch(err => res.send(err));
});

//create
app.post('/word', jsonParser, (req, res) => {
    const { en, vn } = req.body;
    const word = new Word({ en, vn });
    word.save()
    .then(w => res.send(w))
    .catch(err => res.send(err));
});

//update
app.put('/word/:id', jsonParser, (req, res) => {
    const { id } = req.params;
    Word.findByIdAndUpdate(id, req.body)
    .then(() => res.send({ message: 'OK' }))
    .catch(err => res.send(err));
});

app.listen(3000, () => console.log('Server started!'));
