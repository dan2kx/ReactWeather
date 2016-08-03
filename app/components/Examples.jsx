var React = require('react');
var {Link} = require('react-router');

// var Examples = React.createClass({
//   render: function(){
//     return (
//         <h3>Examples component</h3>
//     )
//   }
// });

var Examples = (props) => {
  return (
    <div>
      <h1 className="text-center">Examples</h1>
      <p>Here are a few examples to try out</p>
      <ol>
        <li>
          <Link to='/?location=Grimsby'>Grimsby, UK</Link>
        </li>
        <li>
          <Link to='/?location=Irvine'>Irvine, CA</Link>
        </li>
      </ol>
    </div>
  )
};

module.exports = Examples;
