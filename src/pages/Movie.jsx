import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { BreadCrumb } from '../components'
import { formatTimestamp } from '../utils/formatTime'

const API_KEY = import.meta.env.VITE_API_KEY
const BASE_IMG_URL = `https://image.tmdb.org/t/p/w500/`

const Movie = () => {
  const { slug } = useParams()
  const [movie, setMovie] = useState({})
  useEffect(() => {
    const fetchMovie = async () => {
      try {
        await axios
          .get(
            `https://api.themoviedb.org/3/search/movie?query=${slug}&api_key=${API_KEY}`
          )
          .then((response) => {
            console.log(response?.data?.results)
            setMovie(response?.data?.results[0])
          })
      } catch (error) {
        console.log(error)
      }
    }
    fetchMovie()
  }, [slug])
  return (
    <section>
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
          <p className='m-2 text-[gray]'>{movie.overview}</p>
          <p className='mx-2 text-sm'>
            Released: {formatTimestamp(movie.release_date)}
          </p>
          <p className='mx-2'>Rating: {movie.vote_average}</p>
        </div>
      </div>
    </section>
  )
}

export default Movie
