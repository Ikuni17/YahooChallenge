import React from 'react';
import {BoardState} from './TicTacToe.types';
import {MyGroup} from '../MyGroup';
import {Square} from './Square';
import {MyStack} from '../MyStack';

interface BoardProps {
  boardState: BoardState;
  handlePlayerMove: (squareIndex: number) => void;
}

const BoardRow: React.FC<{children: React.ReactNode}> = ({children}) => {
  return (
    <MyGroup spacing={0} noWrap>
      {children}
    </MyGroup>
  );
};

export const Board: React.FC<BoardProps> = ({boardState, handlePlayerMove}) => {
  return (
    <MyStack spacing={0}>
      <BoardRow>
        <Square
          squareState={boardState[0]}
          handleClick={() => handlePlayerMove(0)}
        />
        <Square
          squareState={boardState[1]}
          handleClick={() => handlePlayerMove(1)}
        />
        <Square
          squareState={boardState[2]}
          handleClick={() => handlePlayerMove(2)}
        />
      </BoardRow>
      <BoardRow>
        <Square
          squareState={boardState[3]}
          handleClick={() => handlePlayerMove(3)}
        />
        <Square
          squareState={boardState[4]}
          handleClick={() => handlePlayerMove(4)}
        />
        <Square
          squareState={boardState[5]}
          handleClick={() => handlePlayerMove(5)}
        />
      </BoardRow>
      <BoardRow>
        <Square
          squareState={boardState[6]}
          handleClick={() => handlePlayerMove(6)}
        />
        <Square
          squareState={boardState[7]}
          handleClick={() => handlePlayerMove(7)}
        />
        <Square
          squareState={boardState[8]}
          handleClick={() => handlePlayerMove(8)}
        />
      </BoardRow>
    </MyStack>
  );
};
