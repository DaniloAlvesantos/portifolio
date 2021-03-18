import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter,Switch, Route } from 'react-router-dom'
import Landing from './components/landing-page/landin';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path='/' component={Landing} exact />
      <Route path='/Home' component={App} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);
