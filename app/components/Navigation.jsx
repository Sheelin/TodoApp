let React = require('react');
let {Link, IndexLink} = require('react-router');

let Navigation = React.createClass({
  render: function () {
    return (
      <nav>
        <div className="main-nav">
          <ul>
            <li>
              <mark>My App</mark>
            </li>
            <li><IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>todos</IndexLink></li>
            <li><Link to="/menu2" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Menu 2</Link></li>
          </ul>
        </div>
        <div className="right aside-nav">
          <ul>
            <li>
              Created by <mark>Sheelin</mark>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
});

module.exports = Navigation;
