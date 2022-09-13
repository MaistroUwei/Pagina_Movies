import { useEffect, useState } from "react"
import { getTrending } from "../helpers/getTrending";
export const useFetchTrending =() => {
    const [movies, setMovies] = useState([]); 
    const [isLoading, setIsLoading] = useState(true);

    const getTrendingMovies = async (media_type, time_window) => {
        const results = await getTrending(media_type, time_window);
        setIsLoading(false);
        setMovies(results);
    }

    useEffect(() => {
        getTrendingMovies();
    }, []);
    
    return {
        movies,
        isLoading
    }
}
