import { create } from 'zustand'
import { persist } from 'zustand/middleware'

const movieStore = (set) => ({
    moviesList: [],
    addToMoviesList: (movie) => set((state) => ({moviesList: [...state.moviesList, movie ]})),
    removeFromMovieList: (movie) => set((state) => ({moviesList: state.moviesList.filter((m) => m.title !== movie.title)}))
})

const useMovieStore = create(persist(movieStore, {name: 'moviesList'}))

export default useMovieStore