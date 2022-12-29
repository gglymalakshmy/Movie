import React, { useContext } from 'react'
import { Newcontext } from './Test1';

function Hello() {
    const [a,seta]=useContext(Newcontext);
   console.log(a); 
  return (
    <div>
       { a.map((item)=>{
        return(
        <>
        <h2>{item.place}</h2>
        <h2>{item.college}</h2>
        </>
        )
        })}
    </div>
  )
}
export default Hello