import { toast, Toaster } from 'react-hot-toast'
import { SearchBar } from '../components'
import useMovieStore from '../store/movieStore'

const Home = () => {
  // Store state
  const { addToMoviesList, moviesList } = useMovieStore()

  // add movies to movielist
  const addMovies = (movie) => {
    const existingMovie = moviesList.find(
      (m) => m.title.toLowerCase() === movie.title.toLowerCase()
    )
    if (!existingMovie) {
      addToMoviesList(movie)
      toast.success(`${movie.title} added to MovieList successfully`, {
        style: {
          backgroundColor: '#e0f5e6',
        },
      })
    } else {
      toast.error(`${movie.title} already added to MovieList`, {
        style: {
          color: 'red',
          backgroundColor: '#ffebee'
        }
      })
      return
    }
  }

  return (
    <div className='w-full'>
      <Toaster />
      <div className='w-full'>
        <SearchBar onAddMovie={addMovies} />
      </div>
    </div>
  )
}

export default Home
