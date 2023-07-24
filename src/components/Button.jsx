/* eslint-disable react/prop-types */
const Button = ({ title, onClick, icon, disabled }) => {
  return (
    <button
      className={
        icon
          ? ''
          : 'border-2 border-black px-2 rounded-md hover:bg-black hover:text-white cursor-pointer'
      }
      onClick={onClick}
      disabled={disabled}>
      <span>{icon}</span>
      {title}
    </button>
  )
}

export default Button
