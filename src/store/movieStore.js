import { create } from 'zustand'
import { persist } from 'zustand/middleware'

const movieStore = (set) => ({
  moviesList: [],
  searchQuery: '',
  searchResults: [],
  setSearchResults: (results) => set({ searchResults: results }),
  setSearchQuery: (query) => set({ searchQuery: query }),
  addToMoviesList: (movie) =>
    set((state) => ({ moviesList: [movie, ...state.moviesList] })),
  removeFromMovieList: (movie) =>
    set((state) => ({
      moviesList: state.moviesList.filter((m) => m.title !== movie.title),
    })),
  rateMovie: (movie, rating) =>
    set((state) => {
      const updatedMoviesList = state.moviesList.map((m) =>
        m.title === movie.title ? { ...m, rating } : m
      )
      return { moviesList: updatedMoviesList }
    }),
  toggleWatched: (movie) =>
    set((state) => {
      const updatedMoviesList = state.moviesList.map((m) =>
        m.title === movie.title ? { ...m, watched: !m.watched } : m
      )
      return { moviesList: updatedMoviesList }
    }),
})

const useMovieStore = create(persist(movieStore, { name: 'moviesList' }))

export default useMovieStore
