import React from 'react';
import ReactDOM from 'react-dom';
import './styles/global.css';
import {BrowserRouter,Switch,Route} from 'react-router-dom';

import Home from './pages/home/';
import WishList from './pages/Wishlist';


ReactDOM.render(
  <React.StrictMode>

    <BrowserRouter>
        <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/wishlist" component={WishList} exact />
        </Switch>
    </BrowserRouter>

  </React.StrictMode>,
  document.getElementById('root')
);

