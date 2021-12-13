const { response } = require('express')
const express = require('express')
const { Server, request } = require('http')

const movies = require('./movies')

const app = express()
const bodyParser = require('body-parser')

app.get('/movies', (request, response) => {
  return response.send(movies)
})

app.get('/movies/:directors', (request, response) => {
  const directors = request.params.directors
  const foundDirectors = movies.filter((movie) => movie.director == directors)

  return response.send(foundDirectors)
})

app.get('/movies/:title', (request, response) => {
  const title = request.params.title
  const foundMovie = movies.filter((movie) => movie.title == title)

  return response.send(foundMovie)
})

app.post('/', bodyParser.json(), (request, response) => {
  const {
    title, directors, releaseDate, rating, runTime, genres
  } = request.body

  if (!title || !directors || !releaseDate || !rating || !runTime || !genres) {
    return response.status(400).send('This is an error 400')
  }
  const newMovie = {
    title, directors, releaseDate, rating, runTime, genres
  }

  movies.push(newMovie)

  return response.status(201).send(newMovie)
})

app.put('/',)

app.all('*', (request, response) => {
  return response.status(404).send('This is a 404 error')
})

app.listen(1334)






