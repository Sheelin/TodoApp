let React = require('react');
let Navigation = require('Navigation');

let Main = (props) => {
  return (
    <div className="container">
      <Navigation/>
      <div className="content">
        <main>
          {props.children}
        </main>
        <aside>

        </aside>
      </div>
    </div>
  );
};

module.exports = Main;
