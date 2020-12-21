import './App.css'
import Row from './components/Row'
import Banner from './components/Banner'
import Nav from './components/Nav'
import requests from './requests'
import { useSelector } from 'react-redux'
import { useEffect } from 'react'

function App() {
  const type = useSelector((state: any) => state.MediaType)

  useEffect(() => {
    console.log(type)
  }, [type])

  let titleType = type.toUpperCase() + 'S'
  if (type === 'tv') {
    titleType = 'TVSHOWS'
  }

  return (
    <div className="App">
      <Nav />
      <Banner />
      <Row
        title={`NETFLIX ORIGINAL ${titleType}`}
        type={type}
        fetchUrl={requests.dataRequests(type).fetchNetflixOriginals}
        isLargeRow
      />
      <Row title="TRENDING NOW" type="all" fetchUrl={requests.dataRequests(type).fetchTrending} />
      <Row title={`TOP RATED ${titleType}`} type={type} fetchUrl={requests.dataRequests(type).fetchTopRated} />
      <Row title={`ACTION ${titleType}`} type={type} fetchUrl={requests.dataRequests(type).fetchActionMovies} />
      <Row title={`COMEDY ${titleType}`} type={type} fetchUrl={requests.dataRequests(type).fetchComedyMovies} />
      <Row title={`HORROR ${titleType}`} type={type} fetchUrl={requests.dataRequests(type).fetchHorrorMovies} />
      <Row title={` DOCUMENTARY ${titleType}`} type={type} fetchUrl={requests.dataRequests(type).fetchDocumentaries} />
    </div>
  )
}

export default App
