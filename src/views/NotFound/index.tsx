import React from 'react';
import {Link} from 'react-router-dom';
import {MyButton, MyContainer} from '../../components';
import {Routes} from '../../routes';

export const NotFound: React.FC = () => {
  return (
    <MyContainer sx={{textAlign: 'center'}}>
      {'Page Not Found'}
      <MyButton ml="xl" component={Link} to={Routes.Home}>
        Return Home
      </MyButton>
    </MyContainer>
  );
};
