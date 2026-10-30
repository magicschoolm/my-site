import "./adviceApp.css"
import React, { useState, useEffect } from "react";

export const AdviceApp = () => {
  const [advice, setAdvice] = useState("refresh")
  const [count, setCount] = useState(0)

  async function getAdvice () {
    const res = await fetch ("https://api.adviceslip.com/advice")
    const data = await res.json() 
    setAdvice(data.slip.advice) 
    setCount((c) => c+1)
  }

  useEffect (function (){
    getAdvice()
  }, [])
  return (

<div className="advice-app">          
  <h3>{advice}</h3>
          <button onClick = {getAdvice}> Get Advice</button>
          <Counter count={count} />
    </div>
  )
}


function Counter(props) {
  return (
    <p>
      this is your <b> {props.count} </b> pice of advice.
    </p>
  )
}