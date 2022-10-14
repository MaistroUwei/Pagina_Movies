import { useEffect, useState } from "react"
import { getMovieById } from "../helpers/getMovieById";

export const useFetchMovieById =(movieId, media_type, language) => {
    const [movie, setMovie] = useState(); 
    const [isLoading, setIsLoading] = useState(true);

    const getMovie = async (movieId, media_type, language ) => {
        const result = await getMovieById(movieId, media_type, language);
        setMovie(result);
        console.log(result);
        setIsLoading(false);
    }

    useEffect(() => {
        getMovie(movieId, media_type, language);
    }, []);
    
    return {
        movie,
        isLoading
    }
}