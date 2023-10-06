export const WinnerMessage = ({ winner }) => {
    if (winner === null) return null;
    const winnerText = winner === false ? 'Empate' : `Las ${winner} han ganado!`
    return (
        <>
        <h1>{winnerText}</h1>
        </>
        
    )
}