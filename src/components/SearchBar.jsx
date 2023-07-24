/* eslint-disable react/prop-types */
import { useState } from 'react'
import axios from 'axios'
import { HiOutlineSearch } from 'react-icons/hi'
import MovieCard from './MovieCard'
import Loader from './Loader'

const API_KEY = import.meta.env.VITE_API_KEY

const SearchBar = ({ onAddMovie }) => {
  const [searchQuery, setSearchQuery] = useState('')
  const [searchResults, setSearchResults] = useState([])
  const [loading, setLoading] = useState(false)

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
    <section className='flex flex-col w-full p-4 items-center justify-center '>
      {loading && (
        <div className='absolute inset-0 z-0 flex justify-center items-center bg-[rgba(0,0,0,0.5)] rounded-lg'>
          <Loader />
        </div>
      )}
      <div className='flex lg:w-1/2 w-full items-center justify-center border-2 border-black px-3 rounded-md sticky top-0 bg-white'>
        <HiOutlineSearch className='text-xl' />
        <input
          className='border-none outline-none w-full py-2 px-3 rounded-md font-semibold'
          type='text'
          placeholder='Search for movies...'
          value={searchQuery}
          onChange={handleSearch}
        />
      </div>
      <div className='flex flex-col border-2 border-black rounded-md lg:w-1/2 w-full m-2 p-2'>
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
