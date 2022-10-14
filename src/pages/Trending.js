import React from 'react'
import { MovieCard } from '../components/MovieCard';
import { useFetchTrending } from '../hooks/useFetchTrending'
import { FilterTrending } from '../components/FilterTrending';

export const Trending = () => {

  const { movies } = useFetchTrending();
  const [filter, setFilter] = React.useState("all");

  let filteredMovies;

  if (filter === "all") {
    filteredMovies = movies;
  } else filteredMovies = movies.filter(movie => movie.media_type === filter);

  return (
    <>
      <FilterTrending filter={filter} setFilter={setFilter}/>
      <div className='container row row-cols-1 row-cols-md-3 g-3'>
        {filteredMovies.map((movie) =>
          <MovieCard
            key={movie.id}
            {...movie}
          />
        )}
      </div>
    </>
  )
}
