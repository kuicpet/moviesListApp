import { useState } from 'react'
import axios from 'axios'
import { HiOutlineSearch } from 'react-icons/hi'

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState('')
  // const [searchResults, setSearchResults] = useState([])
  const API_KEY = import.meta.env.VITE_API_KEY

  const handleSearch = async (e) => {
    const query = e.target.value
    setSearchQuery(query)
    if (query.trim() !== '') {
      try {
        await axios
          .get(
            `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${query}`
          )
          .then((response) => {
            console.log(response)
          })
      } catch (error) {
        console.log(error)
      }
    }
  }
  return (
    <section className='flex w-full border border-black p-4 items-center justify-center'>
      <div className='flex lg:w-1/2 w-full items-center justify-center border-2 border-black px-3 rounded-md'>
        <HiOutlineSearch className='text-xl' />
        <input
          className='border-none outline-none w-full py-2 px-3 rounded-md font-semibold'
          type='text'
          placeholder='Search for movies...'
          value={searchQuery}
          onChange={handleSearch}
        />
      </div>
    </section>
  )
}

export default SearchBar
