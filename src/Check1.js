import React, { useContext } from 'react'
import { Newcontext } from './Test1';

function Check1() {
const [init,setinit]=useContext(Newcontext);
  return (
    <div>
          { init.map((item)=>{
        return(
        <>
        <h4>{item.place}</h4>
        <h4>{item.college}</h4>
        </>
        )
        })}
    </div>
  )
}

export default Check1