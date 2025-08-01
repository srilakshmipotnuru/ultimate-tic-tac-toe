import clsx from 'clsx';
import { CircleIcon, XIcon } from 'raster-react';
import type { boardType } from '../utils/utils';

interface MiniBoardProps {
    disabled: boolean;
    board: boardType;
    winningLine?: number[][] | null;
    onMove: (row: number, col: number) => void;
}
const MiniBoard = (props: MiniBoardProps) => {
    const { disabled, board, winningLine = null, onMove } = props;
    const size = board.length;
    const isWinningCell = (row: number, col: number) => {
        return winningLine?.some(([r, c]) => r === row && c === col);
    }
    const renderCell = (row: number, col: number) => {
        const cellValue = board[row][col];
        const isWinning = isWinningCell(row, col);  
        return (
            <button key={`${row}-${col}`} className={clsx(
                "flex items-center justify-center border border-gray-300",
                { "bg-green-200": isWinning }
            )}
            style={{ 
              width: '100%',
              height: '100%',
              fontSize: '2.5vw', // Responsive font/icon size
              userSelect: 'none',
              cursor: disabled ? 'not-allowed' : 'pointer' }}
              onClick={() => !disabled && onMove(row, col)}>
                {cellValue === 1 && <XIcon />}
                {cellValue === 0 && <CircleIcon />}
            </button>
        );
    };
    return (
        <div className='mini-board'
        style={{
          display: 'grid',
          gridTemplateColumns: `repeat(${size}, 1fr)`,
          gridTemplateRows: `repeat(${size}, 1fr)`,
          width: '30vw',
          height: '30vw',
          maxWidth: 480,
          maxHeight: 480,
          minWidth: 180,
          minHeight: 180,
          pointerEvents: disabled ? 'none' : 'auto',
        }} >
            {board.map((row, rowIndex) => (
                row.map((cell, colIndex) => renderCell(rowIndex, colIndex))
            ))}                                                              
        </div>
    );
};

export default MiniBoard;