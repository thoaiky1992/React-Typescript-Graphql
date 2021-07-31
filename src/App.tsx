import React from 'react';
import './App.sass';
import { Router, Switch } from "react-router-dom";
import { CustomRoute } from './routes/configRoute';
import { ListRoutes } from './routes/routes';
import { io, Socket } from 'socket.io-client';
import { history } from './config/history';

export const socket: Socket = io('http://localhost:4000/socket' as string, {
  transports: ['websocket'],
  auth: {
    token: localStorage.getItem('access_token') || ''
  }
})

const App: React.FC = () => {
  return (
    <Router history={history}>
      <Switch>
        {
          ListRoutes.map((route, i) =>
            <CustomRoute
              key={i}
              exact={route.exact}
              component={route.component}
              path={route.path}
              isAuth={route.isAuth}
              layout={route.layout}
            />
          )
        }
      </Switch>
    </Router>
  );
}

export default App;
