import { gsap } from 'gsap'
import React, { useEffect, useRef, useState } from 'react'

interface Props {
	initialValue?: number
}

interface CounterState {
	counter: number
	clicks: number
}

const MAX_VAL: number = 10

const Counter = ({ initialValue = 0 }: Props) => {
	const [counter, setCounter] = useState<CounterState>({
		counter: initialValue,
		clicks: 0,
	})

	const counterElement = useRef<HTMLHeadingElement>(null)

	const handleClick = (value: number) => {
		setCounter(({ counter, clicks }) => ({
			counter: counter + value <= MAX_VAL ? counter + value : counter,
			clicks: clicks + 1,
		}))
	}

	useEffect(() => {
		;(async () => {
			if (counter.counter < MAX_VAL) return

			console.log('Se llego al val maximo')

			const tl = gsap.timeline()

			tl.to(counterElement.current, {
				y: -10,
				duration: 0.2,
				ease: 'ease.out',
			}).to(counterElement.current, { y: 0, duration: 1, ease: 'bounce.out' })
      
		})()
	}, [counter])

	return (
		<>
			<h1>CounterEffect: </h1>
			<h2 ref={counterElement}>{counter.counter}</h2>
			<button onClick={() => handleClick(1)}>+1</button>
		</>
	)
}

export default Counter
