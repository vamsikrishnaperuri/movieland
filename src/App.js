// import { useEffect } from 'react';
// import './App.css';
// import searchIcon from './search.svg';

// const API_url = 'http://www.omdbapi.com/?i=tt3896198&apikey=b04a1857';

// const App = () => {

//   const searchMovies = async (title) => {
//     const response = await fetch(`${API_url}&s=${title}`);
//     const data = await response.json();
//     console.log(data);
//   }

//   useEffect(() => {
//     searchMovies('spiderman');
//   }, []);

//   return (
//     <div className='app'>
//       <h1>MovieLand</h1>
//     </div>
//   );
// }

// export default App;
import { useState, useEffect } from 'react';
import './App.css';
import searchIcon from './search.svg';
import MovieCard from './MovieCard';

const API_url = 'YOUR_API';

// const movie1 = {
//   "Title": "Superman III",
//   "Year": "1983",
//   "imdbID": "tt0086393",
//   "Type": "movie",
//   "Poster": "https://m.media-amazon.com/images/M/MV5BYjcyN2E4NzQtYmUwZC00NmQ5LWJkMWUtMThjZGIwZGIwYzZmXkEyXkFqcGc@._V1_SX300.jpg"
// }

const App = () => {

  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    seacrchMovies('superman');
  }, [])

  const seacrchMovies = async (title) => {
    const response = await fetch(`${API_url}&s=${title}`);
    const data = await response.json();

    setMovies(data.Search);
  }

  return (
    <div className="app">
      <h1>MovieLand</h1>
      <div className="search">
        <input
          placeholder='Search for a movie'
          value={searchTerm}
          onChange={(e) => { setSearchTerm(e.target.value) }}
        />
        <img
          src={searchIcon}
          alt='search'
          onClick={(val) => { seacrchMovies(searchTerm) }}
        />
      </div>

      {
        movies?.length > 0 ?
          (
            <div className='container'>
              {movies.map((movie) => (
                <MovieCard movie={movie} />
              ))}
            </div>
          ) : (
            <div className='empty'>
              <h3>No movies found</h3>
            </div>
          )
      }

    </div>
  );
}

export default App;