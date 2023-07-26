/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom'

const BreadCrumb = ({ movieTitle }) => {
  return (
    <section className='flex items-center justify-start p-2 mx-6'>
      <div>
        <Link to='/movie-list'>
          <span className='px-2 text-[gray] hover:text-white'>Movies List</span>
        </Link>
        <span>|</span>
        <span className='px-2 font-semibold'>{movieTitle}</span>
      </div>
    </section>
  )
}

export default BreadCrumb
