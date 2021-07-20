import React, { Component } from 'react';

class Ninjas extends Component {
    render() {
        // console.log(this.props);

        // * DESTRUCTURING PROPERTIES / PROPS
        // ? simpan props name ke variabel bernama "name", dst (nama variabel harus sama dengan nama props)
        // ? Destructuring memungkinkan agar tidak perlu selalu memanggil props dengan "this.state"
        // const { name, age, belt } = this.props;

        const { ninjas } = this.props;
        // const ninjas = this.props.ninjas;

        // * Membuat konstanta array yang menyimpan per baris data array ninjas (array 2 dimensi menjadi 1 dimensi)
        const ninjaList = ninjas.map(ninja => {
            return (
                <div className="ninja" key={ ninja.id }>
                    <div>Name: { ninja.name }</div>
                    <div>Age: { ninja.age }</div>
                    <div>Belt: { ninja.belt }</div>
                    <hr />
                </div>
            )
        })

        // * Menampilkan nilai konstanta array ninjaList sebanyak data mapping yang dihasilkan
        return(
            <div className="ninja-list">
                { ninjaList }
            </div>
        )
    }
}

export default Ninjas;