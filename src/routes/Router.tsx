import React from 'react';
import {Route, Switch, HashRouter} from 'react-router-dom';
import {Routes} from './routes';
import {Home} from '../views/Home';
import {NotFound} from '../views/NotFound';

export const Router: React.FC<{children?: React.ReactNode}> = ({children}) => {
  return (
    <HashRouter>
      {children}
      <Switch>
        <Route exact path={Routes.Home} component={Home} />
        <Route component={NotFound} />
      </Switch>
    </HashRouter>
  );
};
