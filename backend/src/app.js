const express = require('express');
const cors = require('cors');
const knex = require('knex');

const app = express();
app.use(cors());
app.use(express.json());

const db = knex({
    client: 'sqlite3',
    connection: {
        filename: 'movies.db'
    },
    useNullAsDefault: true
});

app.get('/movies', async (req, res) => {
    const movies = await db('movies').select('*');
    res.status(200).json(movies);
});

app.get('/movies/:movieId', async (req, res) => {
    const movie = await db('movies').select('*').where({ id: req.params.movieId }).first();
    res.status(200).json(movie);
});

app.post('/movies', async (req, res) => {
    await db('movies').insert({
        title: req.body.title,
        description: req.body.description,
        year: req.body.year
    });

    res.status(201).json({});
});

app.put('/movies/:movieId', async (req, res) => {
    await db('movies').update({
        title: req.body.title,
        description: req.body.description,
        year: req.body.year
    }).where({id: req.params.movieId});

    res.status(204).json({});
});

app.delete('/movies/:title', (req, res) => {

});

app.patch('/movies/:title', (req, res) => {

});


app.listen(8081, () => {
    console.log('El backend ha iniciado en el puerto 8081');
});