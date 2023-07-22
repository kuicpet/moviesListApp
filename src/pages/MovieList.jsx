import { Link } from 'react-router-dom'
import { PiTelevisionSimpleDuotone } from 'react-icons/pi'
import MovieCard from '../components/MovieCard'
import useMovieStore from '../store/movieStore'

const MovieList = () => {
  const { moviesList, removeFromMovieList } = useMovieStore()

  const removeMovie = (movie) => {
    removeFromMovieList(movie)
  }

  return (
    <section className='flex flex-col p-4 items-center justify-center'>
      <div className='flex lg:w-1/2 w-full items-center justify-center border-2 border-black py-2 px-3 rounded-md sticky top-0 bg-white'>
        <PiTelevisionSimpleDuotone className='text-xl mx-2' />
        <h2 className='font-semibold'>MovieList</h2>
      </div>
      <div className='flex flex-col border-2 border-black rounded-md lg:w-1/2 w-full m-2 p-2'>
        <ul className=''>
          {moviesList && moviesList.length > 0 ? (
            moviesList.map((item, i) => (
              <li className='flex items-center w-full justify-between' key={i}>
                <MovieCard
                  title={item.title}
                  clickable
                  btnTitle='Remove'
                  handlebtnClick={() => removeMovie(item)}
                  releaseDate={item.release_date}
                />
              </li>
            ))
          ) : (
            <p>No Movies in MovieList</p>
          )}
        </ul>
      </div>
      <div>
        <Link
          to={`/`}
          className='border-2 border-black px-2 rounded-md hover:bg-black hover:text-white cursor-pointer'>
          Add More Movies
        </Link>
      </div>
    </section>
  )
}

export default MovieList
