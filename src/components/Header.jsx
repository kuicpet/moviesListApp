import { NavLink, Link } from 'react-router-dom'
import { PiTelevisionSimpleDuotone } from 'react-icons/pi'

const Header = () => {
  return (
    <header className='w-full flex justify-between items-center bg-black  px-4 py-2  lg:sticky lg:top-0'>
      <Link to={`/`} className='text-3xl'>
        <PiTelevisionSimpleDuotone className='text-white' />
      </Link>
      <NavLink
        style={({ isActive }) => ({ color: isActive ? 'white' : 'gray' })}
        to={`/movie-list`}
        className='font-semibold px-4 hover:text-white'>
        MovieList
      </NavLink>
    </header>
  )
}

export default Header
