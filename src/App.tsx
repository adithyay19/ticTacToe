import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Tile from './Tile'



function App() {
  const [count, setCount] = useState(0)
  const [player, setPlayer] = useState(0)
  const [value, setValue] = useState('');

  const player1 = document.getElementById('1');
  const player2 = document.getElementById('2');

  function switchPlayer() {
    player1?.classList.toggle('hidden');
    player2?.classList.toggle('hidden');
    setPlayer(player===0 ? 1 : 0);
    setValue(player===0 ? 'X' : "O");
    console.log(value);
    

    // props.setTileValue;
      
  }
  

  return (
    <>
      <div>
        <div className='card'>
          <div className='players'>
            <label className='' id='1'>PLAYER 1</label>
            <label className='hidden' id='2'>PLAYER 2</label>
          </div>
          <div className='gridbox'>
            <div onClick={switchPlayer}>
              <Tile player={player} value={value}/>
            </div>
            <div onClick={switchPlayer}>
              <Tile player={player} change={switchPlayer} value={value}/>
            </div>
            <div onClick={switchPlayer}>
              <Tile player={player} change={switchPlayer} value={value}/>
            </div>
            <div onClick={switchPlayer}>
              <Tile player={player} change={switchPlayer} value={value}/>
            </div>
            <div onClick={switchPlayer}>
              <Tile player={player} change={switchPlayer} value={value}/>
            </div>
            <div onClick={switchPlayer}>
              <Tile player={player} change={switchPlayer} value={value}/>
            </div>
            <div onClick={switchPlayer}>
              <Tile player={player} change={switchPlayer} value={value}/>
            </div>
            <div onClick={switchPlayer}>
              <Tile player={player} change={switchPlayer} value={value}/>
            </div>
            <div onClick={switchPlayer}>
              <Tile player={player} change={switchPlayer} value={value}/>
            </div>
          </div>
          <button onClick={switchPlayer}>Switch</button>
        </div>
      </div>
    </>
  )
}

export default App
