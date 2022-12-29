import React, { createContext, useState } from 'react'
import Check from './Check';
import Check1 from './Check1';
import Hello from './Hello';
import Usecontext1 from './Usecontext1';
const Newcontext=createContext();
function Test1() {
    const [glyma,setglyma]=useState([]);
    return (
      <div>
          <Newcontext.Provider value={[glyma,setglyma]}>
              <Usecontext1/>
              <Hello />
              <Check />
              <Check1 />
          </Newcontext.Provider>
      </div>
    )
}

export default Test1
export {Newcontext};