import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Switch, Route, IndexRoute } from 'react-router-dom';
import reduxThunk from 'redux-thunk';

import Header from './components/Header';
import Feature from './components/Feature';
import SignIn from './components/auth/SignIn';
import SignOut from './components/auth/SignOut';
import SignUp from './components/auth/SignUp';
import App from './components/app';
import reducers from './reducers';
import requireAuth from './components/auth/RequireAuth';

const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <div>
        <Header />
        <Switch>
          <Route path="/feature" component={requireAuth(Feature)} />
          <Route path="/signout" component={SignOut} />
          <Route path="/signup" component={SignUp} />
          <Route path="/signin" component={SignIn} />
          <Route path="/" component={App} />
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>
  , document.querySelector('.container'));
