import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { BreadCrumb, Loader } from '../components'
import { formatTimestamp } from '../utils/formatTime'

const API_KEY = import.meta.env.VITE_API_KEY
const BASE_IMG_URL = `https://image.tmdb.org/t/p/w500/`

const Movie = () => {
  const { slug } = useParams()
  const [movie, setMovie] = useState({})
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        setLoading(true)
        await axios
          .get(
            `https://api.themoviedb.org/3/search/movie?query=${slug}&api_key=${API_KEY}`
          )
          .then((response) => {
            // console.log(response?.data?.results)
            setMovie(response?.data?.results[0])
            setLoading(false)
          })
      } catch (error) {
        console.log(error)
        setLoading(false)
      } finally {
        setLoading(false)
      }
    }
    fetchMovie()
  }, [slug])

  return (
    <section className='bg-black text-white'>
      {loading && (
        <div className='absolute inset-0 z-0 flex justify-center items-center bg-[rgba(0,0,0,0.5)] rounded-lg'>
          <Loader />
        </div>
      )}
      <BreadCrumb movieTitle={movie ? movie.title : ''} />
      <div className='flex lg:flex-row flex-col w-full'>
        <div className='flex  items-center justify-center m-1 lg:w-1/2 w-full p-2'>
          <img
            src={
              movie.poster_path ? `${BASE_IMG_URL}${movie.poster_path}` : null
            }
            alt=''
            loading='lazy'
            className='rounded-xl shadow-lg object-contain'
          />
        </div>
        <div className='flex flex-col items-start justify-start m-1 lg:w-1/2 w-full p-2'>
          <h1 className='font-semibold text-3xl'>{movie.title}</h1>
          <h3 className='mx-2 mt-3 font-semibold'>Overview</h3>
          <p className='m-2 text-[gray]'>{movie.overview}</p>
          <p className='mx-2 text-sm'>
            Released: {formatTimestamp(movie.release_date)}
          </p>
          <p className='mx-2'>Rating: {movie.vote_average / 2}</p>
        </div>
      </div>
    </section>
  )
}

export default Movie
