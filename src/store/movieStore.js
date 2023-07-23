import { create } from 'zustand'
import { persist } from 'zustand/middleware'

const movieStore = (set) => ({
  moviesList: [],
  addToMoviesList: (movie) =>
    set((state) => ({ moviesList: [movie, ...state.moviesList] })),
  removeFromMovieList: (movie) =>
    set((state) => ({
      moviesList: state.moviesList.filter((m) => m.title !== movie.title),
    })),
  rateMovie: (movieToUpdate, rating) =>
    set((state) => {
      const updatedMoviesList = state.moviesList.map((movie) =>
        movie.title === movieToUpdate.title ? { ...movie, rating } : movie
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
