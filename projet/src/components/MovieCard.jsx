import React from 'react'

const MovieCard = ({movie}) => {
  return (
    <div className='container'> 
      <div className='poster'  >
             <div className='poster__img"'> 
               <img src={movie.image}  alt=''></img>
               </div>
                  <div class="poster__info">
                      <h1 className='poster_titlle' style={{color: "red"}}>{movie.name}</h1> 
                      <p style={{color: "white"}}> {movie.description}</p>
                  </div>
     </div>
     
     
     
    </div>
    
      	
    
  )
}

export default MovieCard