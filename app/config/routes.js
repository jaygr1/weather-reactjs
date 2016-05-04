var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var hashHistory = ReactRouter.hashHistory;
var IndexRoute = ReactRouter.IndexRoute;
var Main = require('../containers/main');
var Home = require('../components/home');

var Routes = (
  <Router history={hashHistory}>

    <Route path='/' component={Main}>
      <IndexRoute component={Home}/>

    </Route>
  </Router>
);

module.exports = Routes;
