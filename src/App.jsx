import { Route, Routes } from 'react-router-dom'
import { Home, MovieList } from './pages'
import { Header, Footer } from './components'

function App() {
  return (
    <div>
      <div>
        <Header />
        <div>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route exact path='/movielist' element={<MovieList />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </div>
  )
}

export default App
