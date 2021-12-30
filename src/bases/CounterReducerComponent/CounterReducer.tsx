import React, { useReducer, useState } from 'react'

interface Props {
  initialValue?: number
}

interface CounterState {
  counter: number
  previous: number
  changes: number
}

const INITAL_STATE : CounterState = {
  counter : 0,
  previous: 0,
  changes: 0
}

type CounterAction = | 
{
  type: "increaseBy",
  payload: { value: number }
} 
|{type: "reset"
}

const CounterReducer = (state:CounterState, action:CounterAction) : CounterState => {
  switch(action.type){
    case 'increaseBy':{
      return {
        changes: state.changes+1,
        counter: state.counter + action.payload.value,
        previous: state.previous + action.payload.value
      }
    }
    case 'reset':{
      return {
        changes :0,
        counter: 0,
        previous : 0
      }
    }
  }
}

const Counter = ({initialValue = 0} : Props) => {
  const [{counter}, dispatch] = useReducer(CounterReducer, INITAL_STATE)

	const handleReset = () => {
		dispatch({type: 'reset'})
	}

	const handleIncrease = (value:number) => {
		dispatch({type: 'increaseBy', payload: {value}})
	}

	return (
		<>
			<h1>Counter reducer: {counter}</h1>
			<button onClick={() => handleIncrease(1) }>+1</button>
			<button onClick={() => handleIncrease(2) }>+2</button>
			<button onClick={() => handleIncrease(3) }>+3</button>
			<button onClick={() => handleIncrease(5) }>+5</button>
			<button onClick={handleReset}>reset</button>
		</>
	)
}

export default Counter
