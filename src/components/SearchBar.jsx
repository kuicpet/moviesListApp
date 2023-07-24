/* eslint-disable react/prop-types */
import { useState } from 'react'
import axios from 'axios'
import { HiOutlineSearch } from 'react-icons/hi'
import MovieCard from './MovieCard'
import Loader from './Loader'
import BgImg from '../assets/flash_img.jpg'

const API_KEY = import.meta.env.VITE_API_KEY
// const BASE_IMG_URL = `https://image.tmdb.org/t/p/`
// const BACKDROP_SIZE = `w1280`

const SearchBar = ({ onAddMovie }) => {
  const [searchQuery, setSearchQuery] = useState('')
  const [searchResults, setSearchResults] = useState([])
  const [loading, setLoading] = useState(false)
  // const [image, setImage] = useState('')

  /* useEffect(() => {
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
  }, [])*/

  const handleSearch = async (e) => {
    const query = e.target.value
    setSearchQuery(query)
    if (query.trim() !== '') {
      try {
        setLoading(true)
        await axios
          .get(
            `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${query}`
          )
          .then((response) => {
            // console.log(response)
            setSearchResults(response?.data?.results)
            setLoading(false)
          })
      } catch (error) {
        console.log(error)
      } finally {
        setLoading(false)
      }
    } else {
      setSearchResults([])
    }
  }

  const handleAddToMovieList = (movie) => {
    onAddMovie(movie)
  }

  return (
    <section
      style={{ '--image-url': `url(${BgImg})` }}
      className={`flex flex-col h-[100vh] w-full p-4 items-center justify-start bg-[image:var(--image-url)] bg-no-repeat bg-cover bg-center`}>
      {loading && (
        <div className='absolute inset-0 z-0 flex justify-center items-center bg-[rgba(0,0,0,0.5)] rounded-lg'>
          <Loader />
        </div>
      )}
      <div className='flex lg:w-1/2 w-full items-center justify-center border-2 border-white px-3 rounded-md sticky top-0 bg-black'>
        <HiOutlineSearch className='text-xl text-white' />
        <input
          className='border-none outline-none w-full py-2 px-3 rounded-md font-semibold bg-black text-white'
          type='text'
          placeholder='Search for movies...'
          value={searchQuery}
          onChange={handleSearch}
        />
      </div>
      <div className='flex flex-col border-2 border-white rounded-md lg:w-1/2 w-full m-2 p-2 bg-black text-white'>
        <ul>
          {searchResults && searchResults.length > 0 ? (
            searchResults.map((item, i) => (
              <li key={i}>
                <MovieCard
                  title={item.title}
                  handleClick={() =>
                    handleAddToMovieList({
                      movieId: item.id,
                      title: item.title,
                      rating: 0,
                      release_date: item.release_date,
                      watched: false,
                    })
                  }
                />
              </li>
            ))
          ) : (
            <p>No Movies Found</p>
          )}
        </ul>
      </div>
    </section>
  )
}

export default SearchBar
