import React from 'react'
import MovieCard from './MovieCard'
import { MoviesData } from './MoviesData'
function MovieList({movies}) {
    console.log(movies,"testtttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttt")
  return (
    <div>
     
      <>
			{ movies. map(( index) => (
				<div className='container '  >
               
					<MovieCard movie={index}/>
                 </div>        
			))}
		</>

        
        
    </div>
)
}
export default MovieList
