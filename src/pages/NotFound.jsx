import { useNavigate } from 'react-router-dom'
import { LuVideoOff } from 'react-icons/lu'
import { Button } from '../components'

const NotFound = () => {
  const navigate = useNavigate()

  const handleClick = () => {
    navigate('/')
  }

  return (
    <section className='text-white flex items-center justify-center w-full h-[80vh]'>
      <div>
        <div className='flex items-center justify-center flex-col m-2'>
          <LuVideoOff className='text-5xl' />
          <h2 className='text-xl'>oops!</h2>
        </div>
        <h5>We can&apos;t seem to find the page you&apos;re looking for.</h5>
        <p className='text-[red] my-2'>Error code : 404</p>
        <Button title='Go Home' onClick={() => handleClick()} />
      </div>
    </section>
  )
}

export default NotFound
