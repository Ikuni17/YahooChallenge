import React from 'react';
import {createPolymorphicComponent, Button, ButtonProps} from '@mantine/core';

export interface MyButtonProps
  extends ButtonProps,
    Omit<
      React.HTMLProps<HTMLButtonElement>,
      'ref' | 'color' | 'size' | 'type'
    > {}

const defaultProps: Partial<MyButtonProps> = {
  variant: 'outline'
};

const _MyButton = React.forwardRef<HTMLButtonElement, MyButtonProps>(
  (props, ref) => {
    return <Button ref={ref} {...defaultProps} {...props} />;
  }
);

export const MyButton = createPolymorphicComponent<'button', MyButtonProps>(
  _MyButton
);
