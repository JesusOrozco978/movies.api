
const movies = require('../movies')

const getALLMovies = (request, response) => {
  return response.send(movies)
}

const getTitleAndDirector = (request, response) => {
  const { id } = request.params
  const movie = movies.filter((movie) => {
    return movie.title.toLowerCase().includes(id.toLowerCase()) ||
      movie.directors.find((director) => director.toLowerCase().includes(id.toLowerCase()))
  })

  if (!movie.length) return response.sendStatus(404)

  return response.send(movie)
}

const saveNewMovie = (request, response) => {
  const {
    title, directors, releaseDate, rating, runTime, genres
  } = request.body

  if (!title || !directors || !releaseDate || !rating || !runTime || !genres) {
    return response.status(400).send('Please Enter Correectly ')
  }
  const newMovie = {
    title, directors, releaseDate, rating, runTime, genres
  }

  movies.push(newMovie)

  return response.status(201).send(newMovie)
}

module.exports = { getALLMovies, getTitleAndDirector, saveNewMovie }
