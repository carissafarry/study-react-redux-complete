import React from 'react';

// ! Only use functional components when we don't need the state and we are only primarily concerned with the UI or accepting state to be output in the UI. Functional components can not be used to access it's own state.

const Ninjas = ({ ninjas }) => { // ? auto destructuring props menjadi const ninjas

    // * Dalam CLASS-BASED COMPONENTS, props secara otomatis terikat pada instance component, sehingga harus dipanggil menggunakan "this"

    // * DESTRUCTURING PROPERTIES / PROPS
    // ? simpan props name ke variabel bernama "name", dst (nama variabel harus sama dengan nama props)
    // ? Destructuring memungkinkan agar tidak perlu selalu memanggil props dengan "this.state"
    // const { name, age, belt } = this.props;

    // * Dalam FUNCTION, tidak perlu merefer pada class instance, sehingga tidak perlu menggunakan "this", dan hanya akan merefer props yang dipassing ke function sebagai parameter
    // const { ninjas } = props;
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

export default Ninjas;