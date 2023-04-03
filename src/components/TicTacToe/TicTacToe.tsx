import React, {useState, useCallback} from 'react';
import {GameState, SquareState} from './TicTacToe.types';
import {Board} from './Board';
import {MyGroup} from '../MyGroup';
import {MyStack} from '../MyStack';
import {MyButton} from '../MyButton';
import {MyTitle} from '../MyTitle';

const EMPTY_BOARD = Array(9).fill(SquareState.empty);
const INITIAL_GAME_STATE: GameState = {
  currentPlayerSymbol: SquareState.X,
  moveNumber: 1,
  outputString: `Current Player: ${SquareState.X}`,
  winner: null
};
const WINNING_LINES = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];
const checkWinner = (boardState: SquareState[]) => {
  for (const line of WINNING_LINES) {
    const firstLineSymbol = boardState[line[0]];

    if (
      firstLineSymbol &&
      firstLineSymbol === boardState[line[1]] &&
      firstLineSymbol === boardState[line[2]]
    ) {
      return firstLineSymbol;
    }
  }

  return null;
};

export const TicTacToe: React.FC = () => {
  const [boardState, setBoardState] = useState<SquareState[]>(EMPTY_BOARD);
  const [gameState, setGameState] = useState<GameState>(INITIAL_GAME_STATE);
  const handlePlayerMove = useCallback(
    (squareIndex: number) => {
      // Disallow clicking same square
      if (boardState[squareIndex]) return;

      const {currentPlayerSymbol, moveNumber} = gameState;
      const nextBoardState = [...boardState];
      nextBoardState[squareIndex] = currentPlayerSymbol;
      setBoardState(nextBoardState);

      const winner = checkWinner(nextBoardState);
      if (winner) {
        setGameState({...gameState, winner, outputString: `${winner} WINS!`});
      } else if (moveNumber === boardState.length) {
        setGameState({...gameState, outputString: 'DRAW'});
      } else {
        // Setup next turn
        const nextPlayerSymbol =
          currentPlayerSymbol === SquareState.X ? SquareState.O : SquareState.X;
        setGameState({
          ...gameState,
          currentPlayerSymbol: nextPlayerSymbol,
          moveNumber: moveNumber + 1,
          outputString: `Current Player: ${nextPlayerSymbol}`
        });
      }
    },
    [boardState, gameState]
  );
  const resetGame = useCallback(() => {
    setGameState(INITIAL_GAME_STATE);
    setBoardState(EMPTY_BOARD);
  }, []);

  return (
    <MyGroup spacing={'xl'} align="flex-start">
      <Board boardState={boardState} handlePlayerMove={handlePlayerMove} />
      <MyStack>
        <MyTitle align="left">{gameState.outputString}</MyTitle>
        <MyButton onClick={resetGame}>{'Reset Game'}</MyButton>
      </MyStack>
    </MyGroup>
  );
};
