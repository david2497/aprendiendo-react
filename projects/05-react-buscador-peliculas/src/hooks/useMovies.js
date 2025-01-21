import { useState, useRef, useMemo, useCallback } from 'react'
import { searchMovies } from '../services/movies.js'


export const useMovies = ({ search, sort }) => {
    const [movies, setMovies] = useState([])

    const previousSearch = useRef(search)

    const getMovies = useCallback(async ({ search }) => {
        if (previousSearch.current === search) return
        previousSearch.current = search
        const newMovies = await searchMovies({ search })
        setMovies(newMovies)
    }, [])

    const sortedMovies = useMemo(() => {
        return sort ? [...movies].sort((a, b) => a.title.localeCompare(b.title)) : movies
    }, [sort, movies])

    return { movies: sortedMovies, getMovies }
}