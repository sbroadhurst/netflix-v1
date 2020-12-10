import React, { useState, useEffect } from 'react'
import axios from '../axios'
import './Row.css'
import YouTube from 'react-youtube'
// import movieTrailer from 'movie-trailer'
import requests from '../requests'

const baseUrl = 'https://image.tmdb.org/t/p/original/'

function Row({ title, fetchUrl, isLargeRow, type }) {
  const [movies, setMovies] = useState([])
  const [trailerUrl, setTrailerUrl] = useState('')
  // const [lastClicked, setLastClicked] = useState('')

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl)
      setMovies(request.data.results)
    }

    fetchData()
  }, [fetchUrl])

  const handleClick = async (media) => {
    if (type === 'all') {
      const trailer = await axios.get(requests.trailerWithTypeRequests(media.id, media.media_type))
      setTrailer(trailer)
    }
    if (type === 'tv') {
      const trailer = await axios.get(requests.tvTrailerRequests(media.id))
      setTrailer(trailer)
    }
    if (type === 'movie') {
      const trailer = await axios.get(requests.movieTrailerRequests(media.id))
      setTrailer(trailer)
    }

    // movieTrailer(movie.movie || '')
    //   .then((url) => {
    //     const urlParams = new URLSearchParams(new URL(url).search)
    //     setTrailerUrl(urlParams.get('v'))
    //     setLastClicked(movie.movie)
    //   })
    //   .catch((error) => console.log(error))
  }

  const setTrailer = (trailer) => {
    if (trailer.data.videos.results.length > 0) {
      setTrailerUrl(trailer.data.videos.results[0].key)
    }
  }

  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      autoPlay: 1,
    },
  }

  return (
    <div className="row">
      <h2>{title}</h2>

      <div className="row-posters">
        {movies.map((movie, index) => {
          return (
            <div key={index}>
              <img
                onClick={() => handleClick(movie)}
                className={`row-poster ${isLargeRow && 'row-posterLarge'}`}
                src={`${baseUrl}${movie.poster_path}`}
                alt={movie.name ? movie.name : movie.title}
              />
            </div>
          )
        })}
      </div>
      {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
    </div>
  )
}

export default Row
