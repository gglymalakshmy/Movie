import React, { createContext, useState } from 'react'
import Usecontext from './Usecontext';
const Newcontext=createContext();
function Test() {
    const [glyma,setglyma]=useState("This is Glyma");
  return (
    <div>
        <Newcontext.Provider value={[glyma,setglyma]}>
            <Usecontext/>
        </Newcontext.Provider>
    </div>
  )
}
export default Test
export {Newcontext};