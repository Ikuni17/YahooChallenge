import React, {useState, useCallback, useEffect} from 'react';
import {GameState, BoardState, SquareState} from './TicTacToe.types';
import {Board} from './Board';
import {MyGroup} from '../MyGroup';
import {MyStack} from '../MyStack';
import {MyButton} from '../MyButton';
import {MyTitle} from '../MyTitle';
import {MyNumberInput} from '../MyNumberInput';

const EMPTY_BOARD = Array(9).fill(SquareState.empty);
const INITIAL_GAME_STATE: GameState = {
  currentPlayerSymbol: SquareState.X,
  isDraw: false,
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
const checkWinner = (boardState: BoardState) => {
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

const getRandomEmptyIndex = (boardState: BoardState) => {
  const randomIndex = Math.floor(Math.random() * boardState.length);
  for (let i = randomIndex; i < boardState.length; i++) {
    if (boardState[i] === SquareState.empty) {
      return i;
    }
  }
  for (let i = randomIndex - 1; i >= 0; i--) {
    if (boardState[i] === SquareState.empty) {
      return i;
    }
  }

  // Since the AI always goes second, guaranteed to find an index
  return -1;
};

export const TicTacToe: React.FC = () => {
  const [boardState, setBoardState] = useState<BoardState>(EMPTY_BOARD);
  const [gameState, setGameState] = useState<GameState>(INITIAL_GAME_STATE);
  const [numPlayers, setNumPlayers] = useState<number>(1);

  const handlePlayerMove = useCallback(
    (squareIndex: number) => {
      // Disallow state changes on same square or when game is over
      if (boardState[squareIndex] || gameState.winner) return;

      const {currentPlayerSymbol, moveNumber} = gameState;
      const nextBoardState = [...boardState];
      nextBoardState[squareIndex] = currentPlayerSymbol;
      setBoardState(nextBoardState);

      const winner = checkWinner(nextBoardState);
      if (winner) {
        setGameState({...gameState, winner, outputString: `${winner} WINS!`});
      } else if (moveNumber === boardState.length) {
        setGameState({...gameState, isDraw: true, outputString: 'DRAW'});
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

  const handleAIMove = useCallback(() => {
    handlePlayerMove(getRandomEmptyIndex(boardState));
  }, [boardState, handlePlayerMove]);

  const resetGame = useCallback(() => {
    setGameState(INITIAL_GAME_STATE);
    setBoardState(EMPTY_BOARD);
  }, []);

  useEffect(() => {
    if (
      numPlayers === 1 &&
      gameState.currentPlayerSymbol === SquareState.O &&
      !gameState.winner
    ) {
      handleAIMove();
    }
  }, [boardState, gameState, handleAIMove, numPlayers]);

  return (
    <MyGroup spacing={'xl'} align="flex-start" position="center">
      <Board boardState={boardState} handlePlayerMove={handlePlayerMove} />
      <MyStack>
        <MyTitle
          align="left"
          color={gameState.isDraw || gameState.winner ? 'pink' : 'cyan'}
        >
          {gameState.outputString}
        </MyTitle>
        <MyButton onClick={resetGame}>{'Reset Game'}</MyButton>
        <MyNumberInput
          disabled={gameState.moveNumber > 1}
          label="Number of Players"
          max={2}
          min={1}
          onChange={v => setNumPlayers(v ? v : 1)}
          value={numPlayers}
        />
      </MyStack>
    </MyGroup>
  );
};
