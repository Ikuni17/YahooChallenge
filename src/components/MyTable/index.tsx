import React from 'react';
import {Table, TableProps} from '@mantine/core';

const defaultProps: Partial<TableProps> = {
  highlightOnHover: true,
  horizontalSpacing: 'xl',
  verticalSpacing: 'xs',
  withBorder: true,
  withColumnBorders: true
};

export const MyTable: React.FC<TableProps> = props => {
  return <Table {...defaultProps} {...props} />;
};
