let React = require('react');
let ReactDOM = require('react-dom');
let {Route, Router, IndexRoute, hashHistory} = require('react-router');
let Main = require('Main');
let TodoApp = require('TodoApp');
let MenuItem2 = require('MenuItem2');

// App css
require('style!css!sass!applicationStyles');

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
      <Route path="menu2" component={MenuItem2}/>
      <IndexRoute component={TodoApp}/>
    </Route>
  </Router>,
  document.getElementById('app')
);
