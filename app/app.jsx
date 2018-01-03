let React = require('react');
let ReactDOM = require('react-dom');
let {Route, Router, IndexRoute, hashHistory} = require('react-router');
let Main = require('Main');
let MenuItem1 = require('MenuItem1');
let MenuItem2 = require('MenuItem2');

// App css
require('style!css!sass!applicationStyles');

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
      <Route path="menu2" component={MenuItem2}/>
      <IndexRoute component={MenuItem1}/>
    </Route>
  </Router>,
  document.getElementById('app')
);
