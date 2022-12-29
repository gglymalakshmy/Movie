import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { imageUrl } from '../Api'
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBRipple
} from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';
import { MovieContext } from '../App';
function Home({title,url}) {
  const [movie, setmovie]= useState([]);
  const [movieitem,setmovieitem]=useContext(MovieContext);
  console.log(movieitem);
useEffect(() => {
  axios.get(url).then((yasir) => setmovie(yasir.data.results))
  setmovieitem(movie);
}, [movie]) 
console.log(movieitem); 
  return (
    <div>
      <section>
        <div className='container'>
        <h1>{title}</h1>
          <div className='row'>
          {movie.map((item)=>{
        return(
            <div className='col-md-4'>
            <Link to={`/detail/${item.id}`}><MDBCard>
      <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
        <MDBCardImage src={imageUrl+item.poster_path} fluid alt='...' />
        <a>
          <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
        </a>
      </MDBRipple>
      <MDBCardBody>
        <MDBCardTitle> <h6>{item.id}</h6></MDBCardTitle>
        <h2>{item.title}</h2>
        <MDBCardText>
        <p>{item.overview}</p>
        </MDBCardText>
      </MDBCardBody>
    </MDBCard>  
    </Link>
              </div>
              );
            }
            )}
          </div>
        </div>
      </section>

</div>
  )
}
export default Home