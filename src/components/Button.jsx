/* eslint-disable react/prop-types */
const Button = ({ title, onClick, icon, disabled }) => {
  return (
    <button
      className={
        icon
          ? 'disabled:cursor-not-allowed disabled:text-[gray]'
          : 'flex items-center justify-center border-2 border-black px-2 rounded-md hover:bg-black hover:text-white cursor-pointer w-full disabled:cursor-not-allowed'
      }
      onClick={onClick}
      disabled={disabled}>
      <span>{icon}</span>
      <span>{title}</span>
    </button>
  )
}

export default Button
