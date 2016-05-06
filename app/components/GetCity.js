var React = require('react');

// var GetLocation = React.createClass({
//   render: function () {
//     return (
//       <div>
//         <input type='text' placeholder='Mineola, New York'/>
//         <button className='btn btn-success'> Get weather </button>
//       </div>
//     )
//   }
// });

function button () {
  return (
    <button type='button'
      style={margin: 10}
      className='btn btn-success'
      onClick={props.onSubmitCity}>
        {props.children}
    </button>
  )
};



module.exports = GetCity;
