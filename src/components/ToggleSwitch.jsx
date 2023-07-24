/* eslint-disable react/prop-types */
const ToggleSwitch = ({ checked, onChange, text }) => {
  const handleChange = (e) => {
    if (onChange) {
      onChange(e.target.checked)
    }
  }
  return (
    <>
      <label className='relative flex justify-between items-center group cursor-pointer'>
        <input
          type='checkbox'
          checked={checked}
          onChange={handleChange}
          className='absolute left-1/2 -translate-x-1/2 w-full h-full peer appearance-none rounded-md'
        />
        <span className='w-12 h-5 border-2 border-white flex items-center flex-shrink-0 ml-4 p-1  rounded-full duration-300 ease-in-out peer-checked:bg-[green] after:w-3 after:h-3 after:bg-white after:rounded-full after:shadow-md after:duration-300 peer-checked:after:translate-x-6 group-hover:after:translate-x-1'></span>
        <span className='mx-2'>
          <h2 className="lg:flex md:flex hidden">{text}</h2>
        </span>
      </label>
    </>
  )
}

export default ToggleSwitch
