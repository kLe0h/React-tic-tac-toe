import { useState } from "react"
import { Square } from "./components/Square"
import { turns } from "./helpers/consts"
import { checkEndGame, checkWinner } from "./helpers/checkWinner"
import confetti from "canvas-confetti"
import { WinnerMessage } from "./components/WinnerMessage"




function App() {

  //Definiendo Hooks
  const [board, setBoard] = useState(() => {
    return Array(9).fill(null)
  })

  const [turn, setTurn] = useState(turns.x)

  const [counterX, setCounterX] = useState(0)

  const [counterO, setCounterO] = useState(0)

  const [winner, setWinner] = useState(null)

  const updateBoard = (index) => {
    
    if(board[index] || winner) return;

    const newBoard = [...board]
    newBoard[index] = turn
    setBoard(newBoard)
    const newTurn = turn === turns.x ? turns.o : turns.x
    setTurn(newTurn)
    const newWinner = checkWinner(newBoard)
    if(newWinner){
      //hay un ganador
      confetti()
      setWinner(newWinner)
      if(newWinner === 'O'){
        setCounterO(counterO + 1)
      } else {
        setCounterX(counterX + 1)
      }
    } else if (checkEndGame(newBoard)){
      //hay un empate
      setWinner(false) 
    }
  }

  const resetGame = () => {
    setBoard(Array(9).fill(null))
    setWinner(null)
  }


  return (
    <main className="board">
      <h1>Tic tac toe</h1>
      <button onClick={resetGame}>Reset del juego</button>
      <section className="game">
        {
          board.map((_, index) => {
            return (
              <Square
                key={index}
                index={index}
                updateBoard={updateBoard}
              >
                { board[index] }
              </Square>
            )
          })
        }
      </section>
      <section className="winner-text">
        <WinnerMessage winner={winner}/>
      </section>
      <section className="winner-counter">
        <h1>Contador:</h1>
        <p>O:  {counterO}  ----  X:   {counterX}</p>
      </section>
    </main>
  )
}

export default App
