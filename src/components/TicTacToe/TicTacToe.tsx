import React, {useState, useCallback} from 'react';
import {SquareState} from './TicTacToe.types';
import {Board} from './Board';
import {MyGroup} from '../MyGroup';
import {MyStack} from '../MyStack';
import {MyButton} from '../MyButton';
import {MyTitle} from '../MyTitle';

const EMPTY_BOARD = Array(9).fill(SquareState.empty);

export const TicTacToe: React.FC = () => {
  const [boardState, setBoardState] = useState<SquareState[]>(EMPTY_BOARD);
  const [isPlayerOneTurn, setIsPlayerOneTurn] = useState(true);
  const currentPlayerSymbol = isPlayerOneTurn ? SquareState.X : SquareState.O;
  const handlePlayerMove = useCallback(
    (squareIndex: number) => {
      // TODO: disallow clicking same square

      const nextBoardState = [...boardState];
      nextBoardState[squareIndex] = currentPlayerSymbol;
      setBoardState(nextBoardState);

      // TODO: check winner // check last move

      // Move to next turn
      setIsPlayerOneTurn(!isPlayerOneTurn);
    },
    [boardState, isPlayerOneTurn, currentPlayerSymbol]
  );
  const resetGame = useCallback(() => {
    setIsPlayerOneTurn(true);
    setBoardState(EMPTY_BOARD);
  }, []);

  console.log(boardState);

  return (
    <MyGroup>
      <Board boardState={boardState} handlePlayerMove={handlePlayerMove} />
      <MyStack>
        <MyTitle>{`Current Player: ${currentPlayerSymbol}`}</MyTitle>
        <MyButton onClick={resetGame}>{'Reset Game'}</MyButton>
      </MyStack>
    </MyGroup>
  );
};
