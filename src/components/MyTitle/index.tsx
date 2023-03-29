import React from 'react';
import {Title, TitleProps} from '@mantine/core';

const defaultProps: Partial<TitleProps> = {
  order: 3,
  color: 'indigo',
  align: 'center'
};

export const MyTitle: React.FC<TitleProps> = props => {
  return <Title {...defaultProps} {...props} />;
};
