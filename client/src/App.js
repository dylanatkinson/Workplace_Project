import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Home from './components/Home';
import Browser from './components/pages/Browser';
import Basket from './components/pages/Basket';
import Stores from './components/pages/Stores';
import Responsibility from './components/pages/Responsibility';
import OrderNow from './components/pages/OrderNow';
import Clearance from './components/pages/Clearance';
import Sofasizer from './components/pages/Sofasizer';

import './App.css';

const App = () => {
  const [basket, setBasket] = useState(0);

  const addToBasket = () => {
    setBasket( basket + 1 )
  };

  return (
    <div>
      <Router>
        <Navigation items={basket} />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/browser" render={() => <Browser addToBasket={addToBasket} />} />
          <Route path="/basket" component={Basket} />
          <Route path="/stores" component={Stores} />
          <Route path="/responsibility" component={Responsibility} />
          <Route path="/order-now" component={OrderNow} />
          <Route path="/clearance" component={Clearance} />
          <Route path="/sofasizer" component={Sofasizer} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
