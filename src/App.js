import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Navbar/Navbar';
import Home from './Home/Home';
import { ComedyMovies, LatestMovies, PopularMovies } from './Api';
import Banner from './Banner';
import MovieDetail from './MovieDetail';
import { createContext, useState } from 'react';
const MovieContext=createContext();
// import Comedymovies from './Home/Comedymovies';
// import Latestmovies from './Home/Latestmovies';
function App() {
  const [movieitem,setmovieitem]=useState([]);
  return ( 
    <div>
     <MovieContext.Provider value={[movieitem,setmovieitem]}>
     <BrowserRouter> 
     <Navbar />
    <Banner />
     <Routes>
     {/* <Route path="/" element={<Navbar/>} /> */}
     <Route path="/detail/:id" element={<MovieDetail />}/>
     <Route path="/popularmovies" element={<Home title="popular movies" url={PopularMovies}/>} />
     <Route path="/comedymovies" element={<Home title="Comedy Movies" url={ComedyMovies} />}/>
     <Route path="/latestmovies" element={<Home title="Latest Movies" url={LatestMovies}/>} />
    </Routes>
    </BrowserRouter>
    </MovieContext.Provider>
    </div>
  );
}

export default App;
export {MovieContext};