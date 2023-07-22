import { Route, Routes } from 'react-router-dom'
import { Home, MovieList } from './pages'
import { Header, Footer } from './components'

function App() {
  return (
    <>
      <div>
        <Header />
        <main className='sm:p-8 px-4 py-8 w-full min-h-[calc(100vh-90px)]'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route exact path='/movie-list' element={<MovieList />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </>
  )
}

export default App
