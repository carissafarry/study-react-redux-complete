import React, { Component } from 'react';
import Ninjas from './Ninjas';

class App extends Component {
  state = {
    ninjas : [
      // * Each array item is a object
      {name: 'Ryu', age: 30, belt: 'black', id: 1},
      {name: 'Yoshi', age: 25, belt: 'green', id: 2},
      {name: 'Crystal', age: 20, belt: 'pink', id: 3},
    ]
  }

  render() {
    return (
      <div className="App">
        <h1>My first react app!</h1>
        <p>Welcome :)</p>

        {/* <Ninjas name="Ryu" age="25" belt="black"/> */}
        <Ninjas ninjas={this.state.ninjas} />
      </div>
    )
  }
}


// function App() {
//   return (
//     <div className="App">
//       <h1>My first react app!</h1>
//       <p>Welcome :)</p>
//     </div>
//   );
// }

export default App;
