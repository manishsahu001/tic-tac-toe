import React from 'react'
import Player from './components/Player'

const App = () => {



 
  return (
    <main>

      <div id="game-container">
        <ol id='players'>
          <Player name="Player 1" symbol="X" />
          <Player name="Player 2" symbol="0" />
        </ol>
        Game board
      </div>

      Log

    </main>
  )
}

export default App