import { useState, useEffect } from 'react'
import axios from '../axios'
import requests from '../requests'
import './Banner.css'
import { useSelector } from 'react-redux'

const baseUrl = 'https://image.tmdb.org/t/p/original/'

function Banner() {
  const [movie, setMovie] = useState([])
  const type = useSelector((state) => state.MediaType)

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.dataRequests(type).fetchNetflixOriginals)
      setMovie(request.data.results[Math.floor(Math.random() * request.data.results.length)])
    }

    fetchData()
  }, [type])

  return (
    <header
      className="banner"
      style={{
        backgroundImage: `url(${baseUrl}${movie?.backdrop_path})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center center',
      }}>
      <div className="banner-contents">
        <h1 className="banner-title">{movie?.name || movie?.title}</h1>
        <div className="banner-buttons">
          <button className="banner-button">Play</button>
          <button className="banner-button">My List</button>
        </div>
        <h1 className="banner-desc"> {movie?.overview}</h1>
      </div>

      <div className="banner-fadeBottom" />
    </header>
  )
}

export default Banner
