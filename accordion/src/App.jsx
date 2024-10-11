import { useState } from "react"
import Comp from './Comp'

function App(props) {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className="title">Accordion</h1>
      <Comp/>
      <Comp/>
      <Comp/>
      <Comp/>
      <Comp/>
    </>
  )
}

export default App
