import React, { useContext, useEffect } from 'react';
import { Newcontext } from './Test1';
function Usecontext1() {
  const arr=[
    {place:"Cochin", college:"SOE"},
{place:"TVM",college:"CET"}
];
    const [a,seta]=useContext(Newcontext);
    useEffect(() => {
    seta(arr);
    }, [a]);
    
    return (
      <div>
        <h1>
        Usecontext Purpose...
          </h1>
          {/* <h2>{a}</h2> */}
          </div>
    )
}  
export default Usecontext1