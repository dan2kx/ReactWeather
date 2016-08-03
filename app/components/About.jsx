var React = require('react');

// var About = React.createClass({
//   render: function(){
//     return (
//         <h3>About component</h3>
//     )
//   }
// });

var About = (props) => {
  return (
    <div>
      <h1 className="text-center">About</h1>
      <p>
        This is a weather application built on React.
        I have built this for The Complete React Web App Developer Course.
      </p>
      <p>
        Here are some of the tools i used:
      </p>
      <ul>
        <li>
          <a href="https://facebook.github.io/react">React</a> - This was the JavaScript frameword used.
        </li>
      </ul>
    </div>
  )
}

module.exports = About;
