import React, {useEffect, useState} from 'react';
import './App.css';
import Movie from './Component/Movie';
import Mainheading from './/Component/Navbar.js';
import Poster from './Component/Banner.js';
import Footer from './Component/Footer.js'


const FEATURE_API = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1%22";
  
function App() {

  
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(FEATURE_API)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      setMovies(data.results);
    });

  },[]);

  return (
    <div className="movie-container">
      <Mainheading />
      <Poster />

      {movies.length > 0 && movies.map(movie => (
        <Movie key={movie.id} {...movie} /> 
        ))}

      <Footer />

    </div>
  );
}

export default App;
