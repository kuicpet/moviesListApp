/* eslint-disable react/prop-types */
const Button = ({ title, onClick }) => {
  return (
    <button
      className='border-2 border-black px-2 rounded-md hover:bg-black hover:text-white cursor-pointer'
      onClick={onClick}>
      {title}
    </button>
  )
}

export default Button
