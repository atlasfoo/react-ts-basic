import React, { useState } from 'react'

interface Props {
  initialValue?: number
}

interface CounterState {
  counter: number
  clicks: number
}

const Counter = ({initialValue = 0} : Props) => {
	const [counter, setCounter] = useState<CounterState>({
    counter: initialValue,
    clicks: 0
  })

	const handleClick = (value: number) => {
		setCounter(({counter, clicks}) => ({
      counter: counter + value, 
      clicks: clicks + 1
    }))
	}

	return (
		<>
			<h1>CounterBy: {counter.counter}</h1>
			<button onClick={()=>handleClick(1)}>+1</button>
			<button onClick={()=>handleClick(5)}>+5</button>
		</>
	)
}

export default Counter
