import React from 'react';
import {Container, ContainerProps} from '@mantine/core';

const defaultProps: Partial<ContainerProps> = {
  pt: 'xl'
};

export const MyContainer: React.FC<ContainerProps> = props => {
  return <Container {...defaultProps} {...props} />;
};
