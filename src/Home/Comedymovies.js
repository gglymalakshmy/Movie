import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { ComedyMovies, imageUrl} from '../Api'
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBRipple
} from 'mdb-react-ui-kit';

function Comedymovies({title}) {
  const [movie, setmovie]= useState([]);
  useEffect(() => {
    axios.get(ComedyMovies).then((yasir) => setmovie(yasir.data.results))
  }, [])   
    return (
      <div>
        <section>
          <div className='container'>
          <h1>{title}</h1>
            <div className='row'>
            {movie.map((item)=>{
          return(
              <div className='col-md-4'>
              <MDBCard>
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
export default Comedymovies