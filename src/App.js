import './App.css'
import Row from './components/Row'
import Banner from './components/Banner'
import Nav from './components/Nav'
import requests from './requests'

function App() {
  return (
    <div className="App">
      <Nav />
      <Banner />
      <Row title="NETFLIX ORIGINALS" type="tv" fetchUrl={requests.dataRequests.fetchNetflixOriginals} isLargeRow />
      <Row title="TRENDING NOW" type="all" fetchUrl={requests.dataRequests.fetchTrending} />
      <Row title="TOP RATED" type="movie" fetchUrl={requests.dataRequests.fetchTopRated} />
      <Row title="ACTION MOVIES" type="movie" fetchUrl={requests.dataRequests.fetchActionMovies} />
      <Row title="COMEDY MOVIES" type="movie" fetchUrl={requests.dataRequests.fetchComedyMovies} />
      <Row title="HORROR MOVIES" type="movie" fetchUrl={requests.dataRequests.fetchHorrorMovies} />
      <Row title="DOCUMENTARIES" type="movie" fetchUrl={requests.dataRequests.fetchDocumentaries} />
    </div>
  )
}

export default App
