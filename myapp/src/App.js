import React, { Component } from 'react';
import Ninjas from './Ninjas';
import AddNinja from './AddNinja';

class App extends Component {
  state = {
    ninjas : [
      // * Each array item is a object
      {name: 'Ryu', age: 30, belt: 'black', id: 1},
      {name: 'Yoshi', age: 25, belt: 'green', id: 2},
      {name: 'Crystal', age: 20, belt: 'pink', id: 3},
    ]
  }

  addNinja = (ninja) => {
    // console.log(ninja);
    ninja.id = Math.random();

    // * Create local variable (let), and use Spread Operator, then Add new ninja state from user input
    // ? Spread Operator, change every line of array in Ninjas (bcs we have '...'), change into individual object, and putting those objects in the new array (because we have square brackets '[]')
    let ninjas = [...this.state.ninjas, ninja];

    this.setState({
      ninjas: ninjas
    })

    // ? Editing state ninjas secara langsung menggunakan setState tanpa menyalin state terlebih dahulu ke variabel baru ninjas, akan mereset nilai state ninjas. Jadi, state ninjas harus dicopy dulu, baru ditambahkan array state baru, kemudian baru menggunakan setState.
  }

  render() {
    return (
      <div className="App">
        <h1>My first react app!</h1>
        <p>Welcome :)</p>

        {/* <Ninjas name="Ryu" age="25" belt="black"/> */}
        <Ninjas ninjas={this.state.ninjas} />
        <AddNinja addNinja={this.addNinja}/>
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
