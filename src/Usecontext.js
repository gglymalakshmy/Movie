import React, { useContext } from 'react';
import { Newcontext } from './Test';
function Usecontext() {
  const [a,seta]=useContext(Newcontext);
  return (
    <div>
      <h1>
      Usecontext Purpose...
        </h1>
        <h2>{a}</h2>
        </div>
  )
}
export default Usecontext