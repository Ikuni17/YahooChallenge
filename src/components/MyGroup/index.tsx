import React from 'react';
import {Group, GroupProps} from '@mantine/core';

export const MyGroup = React.forwardRef<HTMLDivElement, GroupProps>(
  (props, ref) => {
    return <Group ref={ref} {...props} />;
  }
);
