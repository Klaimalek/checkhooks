
import './App.css';
import MovieList from './components/MovieList';
import { useState } from 'react';
import { MoviesData } from './components/MoviesData';
import Header from './components/Header';
import { Fragment } from 'react';
function App() {
  
  const [movies,setMovies]=useState(MoviesData)
  const [nameSearch, setNameSearch] = useState("");
  return (
    
    <div className= 'container-fluid movie-app'>
     <Fragment>
         <Header/>  
     </Fragment>
      <div className='row'>
      <MovieList movies={movies}/> 
      </div>
      
    </div>
  );
}

export default App;
