import { useState } from 'react'
import { Link } from 'react-router-dom'
import { PiTelevisionSimpleDuotone } from 'react-icons/pi'
import { MovieCard, ToggleSwitch } from '../components'
import useMovieStore from '../store/movieStore'

const MovieList = () => {
  const { moviesList, removeFromMovieList, toggleWatched, rateMovie } =
    useMovieStore()
  const [showMatchedMovies, seTshowMatchedMovies] = useState(false)

  const removeMovie = (movie) => {
    removeFromMovieList(movie)
  }

  const markedAsWatched = (movie) => {
    toggleWatched(movie)
  }

  const handleWatchedMovies = () => {
    seTshowMatchedMovies(!showMatchedMovies)
  }

  const handleAddRating = (movie, newRating) => {
    rateMovie(movie, newRating)
  }

  const filteredMoviesList = showMatchedMovies
    ? moviesList.filter((movie) => movie.watched)
    : moviesList

  return (
    <section className='flex flex-col p-4 items-center justify-center'>
      <div className='flex lg:flex-row md:flex-row  lg:w-1/2 w-full items-center justify-between border-2 border-black py-2 px-3 rounded-md sticky top-0 bg-white'>
        <span className='flex items-center justify-center'>
          <PiTelevisionSimpleDuotone className='text-xl mx-2' />
          <h2 className='font-semibold'>MovieList</h2>
        </span>
        <ToggleSwitch
          checked={showMatchedMovies}
          onChange={handleWatchedMovies}
          text={showMatchedMovies ? 'Watched Movies' : 'Show Watched Movies'}
        />
      </div>
      <div className='flex flex-col border-2 border-black rounded-md lg:w-1/2 w-full m-2 p-2'>
        <ul className=''>
          {filteredMoviesList && filteredMoviesList.length > 0 ? (
            filteredMoviesList.map((item, i) => (
              <li className='flex items-center w-full justify-between' key={i}>
                <MovieCard
                  // movieId={item?.id}
                  slug={item?.title}
                  title={item?.title}
                  clickable
                  retable
                  handlebtnClick={() => removeMovie(item)}
                  releaseDate={item?.release_date}
                  handleWatchedChange={() => markedAsWatched(item)}
                  handleRating={(newRating) => handleAddRating(item, newRating)}
                  rating={item?.rating}
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
