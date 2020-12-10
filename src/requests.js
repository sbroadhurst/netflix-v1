const API_KEY = '4d6322cf6a2b7554c7e6ffbaec593010'

const dataRequests = {
  fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
  fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
  fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
  fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
  fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
  fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
}

const trailerWithTypeRequests = (id, type) => {
  return `/${type}/${id}?api_key=${API_KEY}&language=en-US&append_to_response=videos`
}

const movieTrailerRequests = (id) => {
  return `/movie/${id}?api_key=${API_KEY}&language=en-US&append_to_response=videos`
}

const tvTrailerRequests = (id) => {
  return `/tv/${id}?api_key=${API_KEY}&language=en-US&append_to_response=videos`
}

const requests = {
  trailerWithTypeRequests,
  movieTrailerRequests,
  tvTrailerRequests,
  dataRequests,
}

export default requests