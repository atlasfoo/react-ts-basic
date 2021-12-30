import { useCounter } from '../../hooks/useCounter';

interface Props {
	initialValue?: number
}

const Counter = ({ initialValue = 0 }: Props) => {
	const {counter, counterElement, handleClick} = useCounter(initialValue)

	return (
		<>
			<h1>CounterHook: </h1>
			<h2 ref={counterElement}>{counter}</h2>
			<button onClick={() => handleClick(1)}>+1</button>
		</>
	)
}

export default Counter
