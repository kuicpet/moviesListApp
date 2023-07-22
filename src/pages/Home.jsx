import { toast, Toaster } from 'react-hot-toast'
import { SearchBar } from '../components'
import useMovieStore from '../store/movieStore'

const Home = () => {
  // const movies = useMovieStore((state) => state.moviesList)
  // const addMovies = useMovieStore((state) => state.addToMoviesList())
  // const [movies, setMovies] = useState([])

  const { addToMoviesList, moviesList } = useMovieStore()
  const addMovies = (movie) => {
    const existingMovie = moviesList.find(
      (m) => m.title.toLowerCase() === movie.title.toLowerCase()
    )
    if (!existingMovie) {
      addToMoviesList(movie)
      toast.success('Movie added to MovieList Succesfully')
    } else {
      toast.error('Movie Already added to MovieList')
      return
    }
  }
  /*const addMovies = (movie) => {
    const existingMovie = movies.find(
      (m) => m.title.toLowerCase() === movie.title.toLowerCase()
    )

    if (!existingMovie) {
      setMovies([...movies, movie])
      toast.success('Movie added to MovieList Succesfully')
      // Save updated movielist data to localStorage
      localStorage.setItem('moviesList', JSON.stringify([...movies, movie]))
    } else {
      toast.error('Movie Already added to MovieList')
    }
  }*/

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
