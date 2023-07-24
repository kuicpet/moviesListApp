import { Route, Routes } from 'react-router-dom'
import { Home, MovieList, Movie } from './pages'
import { Header, Footer } from './components'

function App() {
  return (
    <>
      <div>
        <Header />
        <main className=' w-full min-h-[calc(100vh-90px)]'>
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route exact path='/movie-list' element={<MovieList />} />
            <Route exact path='/:slug' element={<Movie />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </>
  )
}

export default App
