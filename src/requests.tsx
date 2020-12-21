const API_KEY = '4d6322cf6a2b7554c7e6ffbaec593010'

const dataRequests = (mediaType: string) => {
  return {
    fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
    fetchNetflixOriginals: `/discover/${mediaType}?api_key=${API_KEY}&with_networks=213`,
    fetchTopRated: `/${mediaType}/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchActionMovies: `/discover/${mediaType}?api_key=${API_KEY}&with_genres=28`,
    fetchComedyMovies: `/discover/${mediaType}?api_key=${API_KEY}&with_genres=35`,
    fetchHorrorMovies: `/discover/${mediaType}?api_key=${API_KEY}&with_genres=27`,
    fetchRomanceMovies: `/discover/${mediaType}?api_key=${API_KEY}&with_genres=10749`,
    fetchDocumentaries: `/discover/${mediaType}?api_key=${API_KEY}&with_genres=99`,
  }
}

const trailerWithTypeRequests = (id: string, type: string) => {
  return `/${type}/${id}?api_key=${API_KEY}&language=en-US&append_to_response=videos`
}

const movieTrailerRequests = (id: string) => {
  return `/movie/${id}?api_key=${API_KEY}&language=en-US&append_to_response=videos`
}

const tvTrailerRequests = (id: string) => {
  return `/tv/${id}?api_key=${API_KEY}&language=en-US&append_to_response=videos`
}

const requests = {
  trailerWithTypeRequests,
  movieTrailerRequests,
  tvTrailerRequests,
  dataRequests,
}

export default requests
