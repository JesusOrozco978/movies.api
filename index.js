const bodyParser = require('body-parser')
const express = require('express')
const { getALLMovies, getTitleAndDirector, saveNewMovie } = require('./controller/movies')

const app = express()

app.get('/movies', getALLMovies)

app.get('/movies/:id', getTitleAndDirector)

app.post('/movies', bodyParser.json(), saveNewMovie)

app.all('*', (request, response) => {
  return response.status(404).send('This is a 404 error')
})

app.listen(1334)






