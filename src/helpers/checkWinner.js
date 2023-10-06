import { winCombinations } from "./consts"

export const checkWinner = (board) => {
    for (const combination of winCombinations) {
        const [a, b, c] = combination
        if (
            board[a] &&
            board[a] === board[b] &&
            board[a] === board[c]
        ) {
            return board[a]
            
        }
    }
    return null
}

export const checkEndGame = (board) => {
    return board.every((block) => block!==null)
}