import Counter from './bases/Counter'
import CounterBy from './bases/CounterBy'
import CounterEffect from './bases/CounterEffect'
import CounterHook from './bases/CounterHook'

function App() {
	return (
		<>
			<h1>React</h1>
			<hr />
			<Counter initialValue={15}/>
			<hr />
			<CounterBy initialValue={15}/>
			<hr />
			<CounterEffect initialValue={0}/>
			<hr />
			<CounterHook initialValue={0}/>
		</>
	)
}

export default App
