import { useState, useEffect } from 'react'
import axios from '../axios'
import requests from '../requests'
import styles from './Banner.module.css'
import { useSelector } from 'react-redux'

const baseUrl = 'https://image.tmdb.org/t/p/original/'

interface BannerInfo {
  backdrop_path: string
  title?: string
  name?: string
  overview: string
}

function Banner() {
  const [movie, setMovie] = useState<BannerInfo>()
  const type = useSelector((state: any) => state.MediaType)

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.dataRequests(type).fetchNetflixOriginals)
      setMovie(request.data.results[Math.floor(Math.random() * request.data.results.length)])
    }

    fetchData()
  }, [type])

  return (
    <header
      className={styles.banner}
      style={{
        backgroundImage: `url(${baseUrl}${movie?.backdrop_path})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center center',
      }}>
      <div className={styles.bannerContents}>
        <h1 className={styles.bannerTitle}>{movie?.name || movie?.title}</h1>
        <div className={styles.bannerButtons}>
          <button className={styles.bannerButton}>Play</button>
          <button className={styles.bannerButton}>My List</button>
        </div>
        <h1 className={styles.bannerDesc}> {movie?.overview}</h1>
      </div>

      <div className={styles.bannerFadeBottom} />
    </header>
  )
}

export default Banner
