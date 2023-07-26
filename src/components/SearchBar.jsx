/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react'
import axios from 'axios'
import { HiOutlineSearch } from 'react-icons/hi'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import MovieCard from './MovieCard'
import Loader from './Loader'
import Pagination from './Pagination'
import Button from './Button'
import { API_KEY, BASE_IMG_URL, BACKDROP_SIZE } from '../config'
import Error from './Error'
import useMovieStore from '../store/movieStore'

// Constants
const PAGE_SIZE = 8

const SearchBar = ({ onAddMovie }) => {
  // Store State
  const { searchQuery, setSearchQuery, searchResults, setSearchResults } =
    useMovieStore()
  
    // useState Variables

  const [loading, setLoading] = useState(false)
  const [image, setImage] = useState('')
  const [page, setPage] = useState(1)
  const [error, setError] = useState(false)

  // Pagination
  const pageCount = searchResults.length / PAGE_SIZE
  const steps = page * PAGE_SIZE - PAGE_SIZE

  // UseEffect hook to fetch random images
  useEffect(() => {
    const fetchData = async () => {
      try {
        await axios
          .get(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`)
          .then((response) => {
            // console.log(response?.data?.results[0]?.backdrop_path)
            const randomIndex = Math.floor(
              Math.random() * response.data.results.length
            )
            const randomMovie = response?.data?.results[randomIndex]
            // console.log(randomMovie.backdrop_path)
            setImage(randomMovie?.backdrop_path)
          })
      } catch (error) {
        console.log(error)
      }
    }
    fetchData()
  }, [])

  // Function to search for movies by title
  const handleSearch = async (e) => {
    const query = e.target.value
    setSearchQuery(query)
    if (query.trim() !== '') {
      try {
        setLoading(true)
        setError(false)
        await axios
          .get(
            `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${query}`
          )
          .then((response) => {
            // console.log(response)
            setSearchResults(response?.data?.results)
            setLoading(false)
            setError(false)
          })
      } catch (error) {
        console.log(error)
        setError(true)
      } finally {
        setLoading(false)
      }
    } else {
      setSearchResults([])
    }
  }

  // Function to add movie to movie list
  const handleAddToMovieList = (movie) => {
    onAddMovie(movie)
  }

  // Handle page reload on error
  useEffect(() => {
    if (error) {
      const reloadPage = () => window.location.reload()
      setTimeout(reloadPage, 3000) // Reload the page after 3 seconds
    }
  }, [error])

  return (
    <section
      style={{
        '--image-url': `url(${BASE_IMG_URL}${BACKDROP_SIZE}${image})`,
        background:
          'linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.5)), var(--image-url)',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
      className={`flex flex-col h-[100vh] w-full p-4 items-center justify-start`}>
      {loading && (
        <div className='absolute inset-0 z-0 flex justify-center items-center bg-[rgba(0,0,0,0.5)] rounded-lg'>
          <Loader />
        </div>
      )}
      {error && (
        <div>
          <Error />
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
            searchResults.slice(steps, steps + PAGE_SIZE).map((item, i) => (
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
        <div className='flex w-full items-center justify-center'>
          {searchResults.length > 2 && (
            <Pagination>
              <Button
                disabled={page <= 1}
                onClick={() => setPage((prev) => prev - 1)}
                icon={<FaChevronLeft />}
              />
              <Button
                disabled={page >= pageCount}
                onClick={() => setPage((prev) => prev + 1)}
                icon={<FaChevronRight />}
              />
            </Pagination>
          )}
        </div>
      </div>
    </section>
  )
}

export default SearchBar
