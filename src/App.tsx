import { useState, useRef } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

import { useGetPokemonByNameQuery } from './api/poke-api';
import { useGetPokemonSpritesQuery } from './api/poke-sprites';

function App() {
  const [count, setCount] = useState<string>('')
  const ref = useRef<HTMLInputElement>(null);

  const { data, isError, isLoading } = useGetPokemonByNameQuery(count);
  const test = useGetPokemonSpritesQuery(count);

  const handleClick = (): void => {
    setCount(ref.current!.value);
  }

  console.log('poke api', data.sprites)

  return (
    <div className="App">
      <input ref={ref} />
      <img src={data?.sprites.front_default} />
      <button onClick={handleClick} >search pokemon</button>
    </div>
  )
}

export default App
