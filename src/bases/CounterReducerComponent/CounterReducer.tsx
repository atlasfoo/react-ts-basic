import { useReducer } from 'react'
import { CounterState } from './interfaces/counter.interfaces'
import { CounterReducer } from './state/counterReducer'
import { doIncrease, doReset } from './actions/counter.actions';

const INITAL_STATE: CounterState = {
	counter: 0,
	previous: 0,
	changes: 0,
}

const Counter = () => {
	const [{ counter }, dispatch] = useReducer(CounterReducer, INITAL_STATE)

	const handleReset = () => {
		dispatch(doReset())
	}

	const handleIncrease = (value: number) => {
		dispatch(doIncrease(value))
	}

	return (
		<>
			<h1>Counter reducer: {counter}</h1>
			<button onClick={() => handleIncrease(1)}>+1</button>
			<button onClick={() => handleIncrease(2)}>+2</button>
			<button onClick={() => handleIncrease(3)}>+3</button>
			<button onClick={() => handleIncrease(5)}>+5</button>
			<button onClick={handleReset}>reset</button>
		</>
	)
}

export default Counter
