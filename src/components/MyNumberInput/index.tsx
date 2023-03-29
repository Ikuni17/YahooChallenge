import React from 'react';
import {NumberInput, NumberInputProps} from '@mantine/core';

export const MyNumberInput = React.forwardRef<
  HTMLInputElement,
  NumberInputProps
>((props, ref) => {
  return <NumberInput ref={ref} {...props} />;
});
