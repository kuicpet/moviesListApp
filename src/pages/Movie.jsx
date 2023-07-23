import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { BreadCrumb } from '../components'

const API_KEY = import.meta.env.VITE_API_KEY
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
    <div>
      <BreadCrumb movieTitle={movie ? movie.title : ''} />
    </div>
  )
}

export default Movie
