import Button from './Button'

/* eslint-disable react/prop-types */
const MovieCard = ({ title, handleClick }) => {
  return (
    <div className='border border-black m-1 flex items-center justify-start p-2 rounded-md'>
      <div className='flex items-center justify-between w-full'>
        <h2 className='font-semibold capitalize'>{title}</h2>
        <div className='mx-1'>
          <Button onClick={handleClick} title='Add Movie' />
        </div>
      </div>
    </div>
  )
}

export default MovieCard
