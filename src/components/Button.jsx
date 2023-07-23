/* eslint-disable react/prop-types */
const Button = ({ title, onClick, icon }) => {
  return (
    <button
      className={
        icon
          ? ''
          : 'border-2 border-black px-2 rounded-md hover:bg-black hover:text-white cursor-pointer'
      }
      onClick={onClick}>
      <span>{icon}</span>
      {title}
    </button>
  )
}

export default Button
