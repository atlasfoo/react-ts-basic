import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'

const MAX_VAL: number = 10

export const useCounter = (initial_value: number) => {
	const [counter, setCounter] = useState(initial_value)

	const counterElement = useRef<HTMLHeadingElement>(null)

	const handleClick = (value: number) => {
		setCounter((prev) =>
			counter + value <= MAX_VAL ? counter + value : counter
		)
	}

	const timeline = useRef(gsap.timeline())

	useLayoutEffect(() => {
		timeline.current
			.to(counterElement.current, {
				y: -10,
				duration: 0.2,
				ease: 'ease.out',
			})
			.to(counterElement.current, { y: 0, duration: 1, ease: 'bounce.out' })
      .pause()
	}, [])

	useEffect(() => {
		if (counter < MAX_VAL) return
    timeline.current.play(0)
	}, [counter])

	return {
		counter,
		counterElement,
		handleClick,
	}
}
