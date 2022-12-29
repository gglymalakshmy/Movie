import axios from 'axios';
import React, { useEffect, useState } from 'react'

function Banner() {
const imageUrl = "https://image.tmdb.org/t/p/original";
const API_KEY = "9948beaa1978b07ef733bcbe5e8d2849";

const ComedyMovies = `https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&with_networks=213`;
  const [movie, setmovie]= useState([]);
  useEffect(() => {
    axios.get(ComedyMovies).then((yasir) => setmovie(yasir.data.results[0]))
  }, []) 
  console.log(movie);
  return (
    <div style={{backgroundImage:`url(${imageUrl+movie.backdrop_path})`,backgroundPosition:"100% 100%", height:"500px"}}>
      <h1 className='text-light'>{movie.name}</h1>
      <p className='text-light'>{movie.overview}</p>
    </div>
  )
}

export default Banner