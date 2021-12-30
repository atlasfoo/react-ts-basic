import { CounterAction } from "../actions/counter.actions"
import { CounterState } from "../interfaces/counter.interfaces"

export const CounterReducer = (
	state: CounterState,
	action: CounterAction
): CounterState => {
	switch (action.type) {
		case 'increaseBy': {
			return {
				changes: state.changes + 1,
				counter: state.counter + action.payload.value,
				previous: state.previous + action.payload.value,
			}
		}
		case 'reset': {
			return {
				changes: 0,
				counter: 0,
				previous: 0,
			}
		}
	}
}
