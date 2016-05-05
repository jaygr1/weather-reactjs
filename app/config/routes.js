var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var HashHistory = ReactRouter.hashHistory;
var IndexRoute = ReactRouter.IndexRoute;
var Main = require('../containers/Main');

var Routes = (
  <Router history={HashHistory}>
    <Route path='/' component={Main}>
      // <IndexRoute component={Main} />
    </Route>
  </Router>
);

module.exports = Routes;
