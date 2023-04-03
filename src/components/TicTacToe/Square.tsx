import React from 'react';
import {MyButton} from '../MyButton';
import {SquareState} from './TicTacToe.types';

interface SquareProps {
  handleClick: () => void;
  squareState: SquareState;
}

export const Square: React.FC<SquareProps> = ({handleClick, squareState}) => {
  return (
    <MyButton radius={0} w={50} onClick={handleClick}>
      {squareState}
    </MyButton>
  );
};
