import React, { useState, useEffect } from 'react'
import axios from '../axios'
import styles from './Row.module.css'
import YouTube from 'react-youtube'
import requests from '../requests'
import { useWindowSize } from '../windowSize'
import Carousel from '@brainhubeu/react-carousel'
import '@brainhubeu/react-carousel/lib/style.css'

const baseUrl = 'https://image.tmdb.org/t/p/original/'

interface Props {
  title: string
  fetchUrl: string
  isLargeRow?: boolean
  type: string
}

interface Media {
  id: string
  media_type?: string
  poster_path: string
  title?: string
  name?: string
  overview: string
}

function Row({ title, fetchUrl, isLargeRow, type }: Props) {
  const [movies, setMovies] = useState([])
  const [trailerUrl, setTrailerUrl] = useState('')
  const [slidesPerPage, setSlidesPerPage] = useState(6)
  const size = useWindowSize()

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl)
      setMovies(request.data.results)
    }

    function setSlides() {
      // divides the size of the screen by the width of the poster element with padding
      // need to get the elements size instead of hard coding the current sizes
      if (isLargeRow) {
        const slides = size.width / 243
        setSlidesPerPage(slides)
      } else {
        const slides = size.width / 176
        setSlidesPerPage(slides)
      }
    }

    fetchData()
    setSlides()
  }, [fetchUrl, size, isLargeRow])

  const handleClick = async (media: Media) => {
    if (type === 'all') {
      const trailer = await axios.get(requests.trailerWithTypeRequests(media.id, media.media_type!))
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
  }

  const setTrailer = (trailer: any) => {
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
    <div className={styles.row}>
      <h2>{title}</h2>

      <div className={styles.rowPosters}>
        <Carousel
          // arrows={true}
          /* @ts-ignore */
          infinite={true}
          slidesPerPage={slidesPerPage}>
          {movies.map((movie: Media, index: number) => {
            return (
              <div key={index}>
                <img
                  onClick={() => handleClick(movie)}
                  className={`${styles.rowPoster} ${isLargeRow && styles.rowPosterLarge}`}
                  src={`${baseUrl}${movie.poster_path}`}
                  alt={movie.name ? movie.name : movie.title}
                />
              </div>
            )
          })}
        </Carousel>
      </div>
      {/* @ts-ignore */}
      {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
    </div>
  )
}

export default Row
