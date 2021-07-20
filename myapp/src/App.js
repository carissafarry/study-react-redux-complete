import React, { Component } from 'react';
import Ninjas from './Ninjas';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>My first react app!</h1>
        <p>Welcome :)</p>

        <Ninjas />
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
