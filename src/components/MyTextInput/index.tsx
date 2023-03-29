import React from 'react';
import {TextInput, TextInputProps} from '@mantine/core';

export const MyTextInput = React.forwardRef<HTMLInputElement, TextInputProps>(
  (props, ref) => {
    return <TextInput ref={ref} {...props} />;
  }
);
