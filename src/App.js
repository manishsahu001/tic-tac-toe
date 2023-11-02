import React, { useState } from 'react'
import Player from './components/Player'
import GameBoard from './components/GameBoard'

const App = () => {


  const [activePlayer, setActivePlayer] = useState('X');
  
  function handleSelectSquare() {
    setActivePlayer((currentPlayer)=> currentPlayer === 'X' ? '0' : 'X')
  }


  return (
    <main>

      <div id="game-container">
        <ol id='players' className='highlight-player'>
          <Player name="Player 1" symbol="X" isActive={activePlayer === 'X'} />
          <Player name="Player 2" symbol="0" isActive={activePlayer === '0'}/>
        </ol>
        <GameBoard onSelectSquare={handleSelectSquare} activePlayerSymbol={activePlayer} />
      </div>

      Log

    </main>
  )
}

export default App