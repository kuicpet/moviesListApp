import { useState } from 'react'
import { Link } from 'react-router-dom'
import { PiTelevisionSimpleDuotone } from 'react-icons/pi'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import { Button, MovieCard, Pagination, ToggleSwitch } from '../components'
import useMovieStore from '../store/movieStore'
import BgImg from '../assets/flash_img.jpg'

const PAGE_SIZE = 2

const MovieList = () => {
  const { moviesList, removeFromMovieList, toggleWatched, rateMovie } =
    useMovieStore()
  const [showMatchedMovies, seTshowMatchedMovies] = useState(false)
  const [page, setPage] = useState(1)
  const pageCount = moviesList.length / PAGE_SIZE
  const steps = page * PAGE_SIZE - PAGE_SIZE

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
    <section
      style={{ '--image-url': `url(${BgImg})` }}
      className={`flex flex-col p-4  items-center justify-start  bg-[image:var(--image-url)] bg-no-repeat bg-cover bg-center ${
        moviesList.length > 2 && 'h-[100%]'
      } h-[100vh]`}>
      <div className='flex lg:flex-row md:flex-row  lg:w-1/2 w-full items-center justify-between  py-2 px-3 rounded-md sticky top-0 bg-black border-2 text-white'>
        <span className='flex items-center justify-center'>
          <PiTelevisionSimpleDuotone className='text-xl mx-2' />
          <h2 className='font-semibold'>MovieList</h2>
        </span>
        {filteredMoviesList && filteredMoviesList.length > 0 && (
          <ToggleSwitch
            checked={showMatchedMovies}
            onChange={handleWatchedMovies}
            text={showMatchedMovies ? 'Watched Movies' : 'Show Watched Movies'}
          />
        )}
      </div>
      <div className='flex flex-col  rounded-md lg:w-1/2 w-full m-2 p-2 bg-[rgba(0,0,0,0.8)] text-white border-2'>
        <ul className=''>
          {filteredMoviesList && filteredMoviesList.length > 0 ? (
            filteredMoviesList
              .slice(steps, steps + PAGE_SIZE)
              .map((item, i) => (
                <li
                  className='flex items-center w-full justify-between'
                  key={i}>
                  <MovieCard
                    // movieId={item?.id}
                    slug={item?.title}
                    title={item?.title}
                    clickable
                    retable
                    handlebtnClick={() => removeMovie(item)}
                    releaseDate={item?.release_date}
                    handleWatchedChange={() => markedAsWatched(item)}
                    handleRating={(newRating) =>
                      handleAddRating(item, newRating)
                    }
                    rating={item?.rating}
                  />
                </li>
              ))
          ) : (
            <p>No Movies in MovieList</p>
          )}
        </ul>
        <div className='flex w-full items-center justify-center'>
          <Pagination>
            <Button
              disabled={page <= 1}
              onClick={() => setPage((prev) => prev - 1)}
              icon={<FaChevronLeft />}
            />
            <Button
              disabled={page >= pageCount}
              onClick={() => setPage((prev) => prev + 1)}
              icon={<FaChevronRight />}
            />
          </Pagination>
        </div>
      </div>
      <div>
        <Link
          to={`/`}
          className='border-2 border-white text-white px-2 rounded-md hover:bg-black hover:text-white cursor-pointer'>
          Add More Movies
        </Link>
      </div>
    </section>
  )
}

export default MovieList
