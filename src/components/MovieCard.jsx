/* eslint-disable react/prop-types */
const MovieCard = ({ title, handleClick }) => {
  return (
    <div className='border border-black m-1 flex items-center justify-start p-2 rounded-md'>
      <div className='flex items-center justify-between w-full'>
        <h2 className='font-semibold capitalize'>{title}</h2>
        <div className='mx-1'>
          <button
            onClick={handleClick}
            className='border-2 border-black px-2 rounded-md hover:bg-black hover:text-white cursor-pointer'>
            Add Movie
          </button>
        </div>
      </div>
    </div>
  )
}

export default MovieCard
