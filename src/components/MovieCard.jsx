import { AiFillDelete } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import Button from './Button'
import useMovieStore from '../store/movieStore'
import Rating from './Rating'
import { formatTimestamp } from '../utils/formatTime'
/* eslint-disable react/prop-types */
const MovieCard = ({
  title,
  handleClick,
  clickable,
  btnTitle,
  handlebtnClick,
  releaseDate,
  retable,
  rating,
  handleRating,
  handleWatchedChange,
  //  movieId,
  slug,
}) => {
  const { moviesList } = useMovieStore()
  const isAdded = moviesList.some((m) => m.title === title)

  return (
    <div
      className={`border-2 border-white m-1 w-full flex items-center justify-start p-2 rounded-md ${
        isAdded ? 'border-[green]' : ''
      }`}>
      <div
        className='flex flex-col items-start justify-between w-full cursor-pointer'
        onClick={handleClick}>
        <h2 className='font-semibold capitalize'>{title}</h2>
        <p>
          {releaseDate ? `Release Year : ${formatTimestamp(releaseDate)}` : ''}
        </p>
        {retable && (
          <div className=''>
            <div className=''>
              <Rating initialRating={rating} onChange={handleRating} />
            </div>
            <div>
              <label className='flex justify-center items-center space-x-2 cursor-pointer px-2'>
                <input
                  className='mx-1 form-checkbox h-3 w-4 text-blue-500 focus:ring-blue-400 focus:border-blue-400 border border-gray-300 rounded'
                  type='checkbox'
                  checked={title.watched}
                  onChange={() => handleWatchedChange()}
                />
                <span className='text-sm'> Watched</span>
              </label>
            </div>
            <div className='border-2 border-[orange] px-2 rounded-md cursor-pointer hover:bg-[orange] hover:text-black text-[orange] my-2'>
              <Link to={`/${slug}`}>Movie details</Link>
            </div>
          </div>
        )}
      </div>
      {clickable && (
        <Button
          title={btnTitle}
          onClick={handlebtnClick}
          icon={
            <AiFillDelete className='mx-2 text-2xl text-white hover:text-[red]' title='Remove From MoviesList' />
          }
        />
      )}
    </div>
  )
}

export default MovieCard
