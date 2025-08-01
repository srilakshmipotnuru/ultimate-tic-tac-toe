import { useEffect, useState } from "react";
import MiniBoard from "./MiniBoard"
import Players from "./Players"
import { checkIfWinner, type cellValue } from "../utils/utils";

interface ClassicProps {
    mode: number
}

const Classic = ({ mode }: ClassicProps) => {
    const [playerX, setPlayerX] = useState<string>('');
    const [playerO, setPlayerO] = useState<string>('');
    const [currentPlayer, setCurrentPlayer] = useState<cellValue>(1); // 1 for X, 0 for O
    const [winningLine, setWinningLine] = useState<number[][] | null>(null);
    const [start, setStart] = useState<boolean>(false);
    const size = mode || 3; // Default to 3x3 if mode is not provided
    const [board, setBoard] = useState<cellValue[][]>(Array.from({ length: size }, () => Array(size).fill(null)));

    const handleMove = (row: number, col: number) => { 
        if (start && winningLine === null) {
            const newBoard = [...board];
            newBoard[row][col] = currentPlayer;
            setBoard(newBoard);
            setCurrentPlayer(currentPlayer === 1 ? 0 : 1);
            const result = checkIfWinner(newBoard, [row, col]);
            if (result) {
                setWinningLine(result.line);
                setStart(false);
                alert("Player " + (currentPlayer === 1 ? "X" : "O") + " wins!");
            }
        }
    }

    const resetGame = () => {
        setBoard(Array.from({ length: size }, () => Array(size).fill(null)));
        setCurrentPlayer(1);
        setWinningLine(null);
        setStart(false);
    }

    return (
        <div className="flex flex-col gap-20 p-4">
            <Players playerX={playerX} playerO={playerO} setPlayerX={setPlayerX} setPlayerO={setPlayerO} />
            <div className="justify-center items-center flex-col">
                <MiniBoard
                    winningLine={winningLine}
                    disabled={!start}
                    onMove={handleMove}
                    board={board}
                />

                <button onClick={() => {
                    if (!start) setStart(true)
                    else resetGame()
                }}>Start</button>

            </div>
        </div>
    )
}

export default Classic