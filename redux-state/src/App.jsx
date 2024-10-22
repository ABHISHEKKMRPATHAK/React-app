import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increment , decrement} from './features/counter/counterSlice'


function App() {

const count = useSelector((state)=>state.counter.value)
const dispatch = useDispatch()

  return (
    <>
    <h1>State Management</h1>
    <h2>Counter value : {count} </h2>
    <button onClick={()=>dispatch(increment())}>+</button>
    <button onClick={()=>dispatch(decrement())}>-</button>
    </>
  )
}

export default App
