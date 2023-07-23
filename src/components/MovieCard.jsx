import Button from './Button'
import useMovieStore from '../store/movieStore'
/* eslint-disable react/prop-types */
const MovieCard = ({
  title,
  handleClick,
  clickable,
  btnTitle,
  handlebtnClick,
  releaseDate,
  retable,
  // handleRating,
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
          <>
            <label>
              <input
                className='mx-1'
                type='checkbox'
                checked={title.watched}
                onChange={() => handleWatchedChange()}
              />
              Watched
            </label>
          </>
        )}
      </div>
      {clickable && <Button title={btnTitle} onClick={handlebtnClick} />}
    </div>
  )
}

export default MovieCard
