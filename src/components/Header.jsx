import { NavLink, Link } from 'react-router-dom'
import { PiTelevisionSimpleDuotone } from 'react-icons/pi'

const Header = () => {
  return (
    <header className='w-full flex justify-between items-center bg-white  px-4 py-2 border border-b-black'>
      <Link to={`/`} className='text-3xl'>
        <PiTelevisionSimpleDuotone className='' />
      </Link>
      <NavLink
        style={({ isActive }) => ({ color: isActive ? 'black' : 'gray' })}
        to={`/movie-list`}
        className='font-semibold px-4 hover:text-black'>
        My Movies
      </NavLink>
    </header>
  )
}

export default Header
