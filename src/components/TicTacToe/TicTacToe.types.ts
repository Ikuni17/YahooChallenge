export enum SquareState {
  empty = '',
  X = 'X',
  O = 'O'
}

export type BoardState = SquareState[];

export interface GameState {
  currentPlayerSymbol: SquareState.X | SquareState.O;
  isDraw: boolean;
  moveNumber: number;
  outputString: string;
  winner: null | SquareState.X | SquareState.O;
}
