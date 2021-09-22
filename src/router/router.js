import React from 'react';

import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

import Bundle from './Bundle';

import Home from 'bundle-loader?lazy&name=home!pages/Home/Home';
import Page1 from 'bundle-loader?lazy&name=page1!pages/Page1/Page1';

const Loading = function () {
  return <div>Loading...</div>;
};

const createComponent = (component) => (props) =>
  (
    <Bundle load={component}>
      {(Component) => (Component ? <Component {...props} /> : <Loading />)}
    </Bundle>
  );

const getRouter = () => (
  <Router>
    <div>
      <li>
        <Link to="/">首页</Link>
      </li>
      <li>
        <Link to="/page1">Page1</Link>
      </li>
      <Switch>
        <Route exact path="/" component={createComponent(Home)} />
        <Route path="/page1" component={createComponent(Page1)} />
      </Switch>
    </div>
  </Router>
);

export default getRouter;
