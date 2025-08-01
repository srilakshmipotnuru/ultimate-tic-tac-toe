export type cellValue = 0 | 1 | null;
export type boardType = cellValue[][];

export const createEmptyBoard = (size: number): boardType => {
  return Array.from({ length: size }, () => Array(size).fill(null));
};

export const checkIfWinner = (board: boardType, lastMove: number[]) => {
  const [row, col] = lastMove;
  const player = board[row][col];
  const size = board.length;

  if (player === null) return null;

  // Check row
  if (board[row].every(cell => cell === player)) {
    return { winner: player, line: returnWinningLine({ type: 'row', index: row, length: size }) };
  }

  // Check column
  if (board.every(row => row[col] === player)) {
    return { winner: player, line: returnWinningLine({ type: 'column', index: col, length: size }) };
  }

  // Check diagonals
  if (row === col && board.every((row, i) => row[i] === player)) {
    return { winner: player, line: returnWinningLine({ type: 'diagonal', index: 0, length: size }) };
  }
  if (row + col === board.length - 1 && board.every((row, i) => row[board.length - 1 - i] === player)) {
    return { winner: player, line: returnWinningLine({ type: 'diagonal', index: 1, length: size }) };
  }

  return null;
};

const returnWinningLine = (line: { type: string, index: number, length: number }) => {
    const winningLine: number[][] = [];
    switch (line.type) {
        case 'row':
            for (let i = 0; i < line.length; i++) {
                winningLine.push([line.index, i]);
            }
            break;
        case 'column':
            for (let i = 0; i < line.length; i++) {
                winningLine.push([i, line.index]);
            }
            break;
        case 'diagonal':
            if (line.index === 0) {
                for (let i = 0; i < line.length; i++) {
                    winningLine.push([i, i]);
                }
            } else {
                for (let i = 0; i < line.length; i++) {
                    winningLine.push([i, line.length - 1 - i]);
                }
            }
            break;
    }
    return winningLine;
};

