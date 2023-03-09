import { useState, useRef } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

import { useGetPokemonByNameQuery } from './api/poke-api';

function App() {
  const [count, setCount] = useState<string>('')
  const ref = useRef<HTMLInputElement>(null);

  const { data, isError, isLoading } = useGetPokemonByNameQuery(count);

  const handleClick = (): void => {
    setCount(ref.current!.value);
  }

  console.log('poke api', data, isError, isLoading)

  return (
    <div className="App">
      <input ref={ref} />
      <button onClick={handleClick} >search pokemon</button>
    </div>
  )
}

export default App
