import Button from './Button'

/* eslint-disable react/prop-types */
const MovieCard = ({
  title,
  handleClick,
  clickable,
  btnTitle,
  handlebtnClick,
}) => {
  return (
    <div className='border border-black m-1 w-full flex items-center justify-start p-2 rounded-md'>
      <div
        className='flex items-center justify-between w-full cursor-pointer'
        onClick={handleClick}>
        <h2 className='font-semibold capitalize'>{title}</h2>
      </div>
      {clickable && <Button title={btnTitle} onClick={handlebtnClick} />}
    </div>
  )
}

export default MovieCard
