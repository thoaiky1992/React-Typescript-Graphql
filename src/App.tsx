import React from 'react';
import './App.sass';
import { BrowserRouter as Router, Switch } from "react-router-dom";
import { CustomRoute } from './routes/configRoute';
import { ListRoutes } from './routes/routes';
const App: React.FC = () => {
  return (
    <Router>
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
