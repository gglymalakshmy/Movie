import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { PopularMovies } from '../urls/Urls';
import { MDBBtn } from 'mdb-react-ui-kit';
function Banner1() {
    const [mvbnr, setmvbnr] = useState([]);
    useEffect(() => {
      axios.get(PopularMovies).then((movibnr) => setmvbnr(movibnr.data.results[5]))
    });
   console.log(mvbnr)
  return (
<div>

<div
        className='p-5 text-center bg-image'
        style={{ backgroundImage: "url('https://mdbootst
<div
        className='p-5 text-center bg-image'
        style={{ backgroundImage: "url('https://mdbootstrap.com/img/new/slides/041.webp')", height: '400px' }}
      >
        <div className='mask' style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}>
          <div className='d-flex justify-content-center align-items-center h-100 p-5'>
            <div className='text-white'>
         <h1 className='mb-3'>{mvbnr.original_title}</h1>
             <p className='mb-3'>{mvbnr.overview}</p>
             <MDBBtn tag="a" outline size="lg">
                Call to action
              </MDBBtn>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Banner1;