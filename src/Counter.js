import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from './Slice'
function Counter() {
  const count = useSelector((state) => state.counter1.value)
  const cart1 = useSelector((state) => state.example.cart)
  const dispatch = useDispatch()
  console.log(count);
  console.log(cart1);
  return (
    <div>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
        <h1>{cart1}</h1>
      </div>
    </div>
  )
}
export default Counter;