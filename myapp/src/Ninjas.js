import React, { Component } from 'react';

class Ninjas extends Component {
    render() {
        // console.log(this.props);

        // * DESTRUCTURING PROPERTIES / PROPS
        // ? simpan props name ke variabel bernama "name", dst (nama variabel harus sama dengan nama props)
        // ? Destructuring memungkinkan agar tidak perlu selalu memanggil props dengan "this.state"
        const { name, age, belt } = this.props;
        
        return(
            <div className="ninja">
            <div>Name: {name}</div>
            <div>Age: {age}</div>
            <div>Belt: {belt}</div>
            </div>
        )
    }
}

export default Ninjas;