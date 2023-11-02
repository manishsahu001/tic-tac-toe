import React, { useState } from 'react'
const initialGameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
]
const GameBoard = ({onSelectSquare, activePlayerSymbol }) => {

    const [GameBoard, setGameBoard] = useState(initialGameBoard);
    const handleSelectSqare = (rowIndex, colIndex)=>{
        
        setGameBoard((prevGameBoard)=> {
            const updateBoard = [...prevGameBoard.map((innerArray)=> [...innerArray])]
            updateBoard[rowIndex][colIndex] = activePlayerSymbol;
            return updateBoard;
        })

        onSelectSquare()
    }




  return (
    <>
            <ol id="game-board">
                {GameBoard.map((row, rowIdx)=>{return <li key={rowIdx}>
                    <ol>
                        {row.map((playerSymbol, colIdx)=>{return <li key={colIdx}><button onClick={()=> {handleSelectSqare(rowIdx, colIdx)}}>{playerSymbol}</button></li>})}
                    </ol>
                </li>})}
            </ol>
    </>
  )
}

export default GameBoard