import { toast, Toaster } from 'react-hot-toast'
import { SearchBar } from '../components'
import useMovieStore from '../store/movieStore'

const Home = () => {
  const { addToMoviesList, moviesList } = useMovieStore()

  // add movies to movielist
  const addMovies = (movie) => {
    const existingMovie = moviesList.find(
      (m) => m.title.toLowerCase() === movie.title.toLowerCase()
    )
    if (!existingMovie) {
      addToMoviesList(movie)
      toast.success(`${movie.title} added to MovieList successfully`)
    } else {
      toast.error(`${movie.title} already added to MovieList`)
      return
    }
  }

  return (
    <div className=''>
      <Toaster />
      <div>
        <SearchBar onAddMovie={addMovies} />
      </div>
    </div>
  )
}

export default Home
