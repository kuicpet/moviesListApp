import axios from 'axios'
import { useState, useEffect } from 'react'

const API_KEY = import.meta.env.VITE_API_KEY
const BASE_IMG_URL = `https://image.tmdb.org/t/p/`
const BACKDROP_SIZE = `w1280`

const Hero = () => {
  const [image, setImage] = useState('')

  useEffect(() => {
    const fetchData = async () => {
      try {
        await axios
          .get(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`)
          .then((response) => {
            console.log(response?.data?.results[0]?.backdrop_path)
            setImage(response?.data?.results[0]?.backdrop_path)
          })
      } catch (error) {
        console.log(error)
      }
    }
    fetchData()
  }, [])
  return (
    <div className='border border-black'>
      <img src={`${BASE_IMG_URL}${BACKDROP_SIZE}${image}`} alt='' />
    </div>
  )
}

export default Hero
