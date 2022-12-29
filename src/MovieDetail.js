import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { MovieContext } from './App';

function MovieDetail() {
    const {id}=useParams()
    console.log(id);
    const[glyma,setglyma]=useContext(MovieContext);
   // console.log(glyma);
    const detailData=glyma.filter((item)=>item.id == id);
    console.log(detailData);
  return (
    <div>
       <h2>{detailData[0].original_title || detailData[0].title}</h2>
        {/* <h2>{detailData[0].title}</h2> */}
    </div>
  )
}
export default MovieDetail