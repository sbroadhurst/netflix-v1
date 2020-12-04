import React, { useState, useEffect } from 'react'
import axios from '../axios'
import './Row.css'
import YouTube from 'react-youtube'
import movieTrailer from 'movie-trailer'

// import { Swiper, SwiperSlide } from 'swiper/react'

// function Slider() {
//   return (
//     <Swiper
//       spaceBetween={50}
//       slidesPerView={3}
//       onSlideChange={() => console.log('slide change')}
//       onSwiper={(swiper) => console.log(swiper)}>
//       <SwiperSlide>Slide 1</SwiperSlide>
//       <SwiperSlide>Slide 2</SwiperSlide>
//       <SwiperSlide>Slide 3</SwiperSlide>
//       <SwiperSlide>Slide 4</SwiperSlide>
//       ...
//     </Swiper>
//   )
// }

const baseUrl = 'https://image.tmdb.org/t/p/original/'

function Row({ title, fetchUrl, isLargeRow }) {
  const [movies, setMovies] = useState([])
  const [trailerUrl, setTrailerUrl] = useState('')
  const [lastClicked, setLastClicked] = useState('')

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl)
      setMovies(request.data.results)
    }

    fetchData()
  }, [fetchUrl])

  const handleClick = (movie) => {
    if (lastClicked === movie.movie) {
      setTrailerUrl('')
      setLastClicked('')
    } else {
      movieTrailer(movie.movie || '')
        .then((url) => {
          const urlParams = new URLSearchParams(new URL(url).search)
          setTrailerUrl(urlParams.get('v'))
          setLastClicked(movie.movie)
        })
        .catch((error) => console.log(error))
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
                onClick={() => handleClick({ movie: movie.name ? movie.name : movie.title })}
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
