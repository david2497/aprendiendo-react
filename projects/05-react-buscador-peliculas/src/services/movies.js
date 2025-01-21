const API_KEY = '4287ad07'

export const searchMovies = async ({search}) => {
    if(search.trim() === '') return null

    try {
        const response = await fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=${search}`)
        const data = await response.json()
        const movies = data.Search

        return movies?.map(movie => ({
            id: movie.imdbID,
            title: movie.Title,
            year: movie.Year,
            poster: movie.Poster
        }))

    }catch(error){
        console.error(error)
        throw new Error('Error al buscar las películas')       
    }
}