import React from 'react'
import { useParams } from 'react-router-dom'
import { MovieCard } from '../components/MovieCard';
import { useFetchMovieById } from '../hooks/useFetchMovieById';

export const Movie = () => {
  const { movieId, media_type } = useParams();
  const { movie, isLoading } = useFetchMovieById(movieId, media_type, "en");

  return (
    <div className='text-center'>
        <MovieCard
        {...movie}
        />
    </div>
    
  )
}
