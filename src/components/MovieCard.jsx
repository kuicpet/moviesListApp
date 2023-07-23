import { AiFillDelete } from 'react-icons/ai'
import Button from './Button'
import useMovieStore from '../store/movieStore'
import Rating from './Rating'
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
}) => {
  const { moviesList } = useMovieStore()
  const isAdded = moviesList.some((m) => m.title === title)

  return (
    <div
      className={`border border-black m-1 w-full flex items-center justify-start p-2 rounded-md ${
        isAdded ? 'border-[green]' : ''
      }`}>
      <div
        className='flex flex-col items-start justify-between w-full cursor-pointer'
        onClick={handleClick}>
        <h2 className='font-semibold capitalize'>{title}</h2>
        <p>{releaseDate ? `Release Year : ${releaseDate}` : ''}</p>
        {retable && (
          <div className=''>
            <div className=''>
              {/*<input
                type='number'
                min='1'
                max='5'
                value={rating}
                className='border border-black'
                onChange={(e) => handleRating(parseInt(e.target.value))}
        />*/}
              <Rating
                initialRating={rating}
                onChange={handleRating}
              />
            </div>
            <div>
              <label className='flex justify-center items-center space-x-2 cursor-pointer px-2'>
                <input
                  className='mx-1 form-checkbox h-3 w-4 text-blue-500 focus:ring-blue-400 focus:border-blue-400 border border-gray-300 rounded'
                  type='checkbox'
                  checked={rating.watched}
                  onChange={() => handleWatchedChange()}
                />
                <span className='text-sm'> Watched</span>
              </label>
            </div>
          </div>
        )}
      </div>
      {clickable && (
        <Button
          title={btnTitle}
          onClick={handlebtnClick}
          icon={
            <AiFillDelete className='text-2xl text-[gray] hover:text-[red]' />
          }
        />
      )}
    </div>
  )
}

export default MovieCard
