import React from 'react';

// ! Only use functional components when we don't need the state and we are only primarily concerned with the UI or accepting state to be output in the UI. Functional components can not be used to access it's own state.

const Ninjas = ({ ninjas, deleteNinja }) => { // ? auto destructuring props menjadi const ninjas

    // * Dalam CLASS-BASED COMPONENTS, props secara otomatis terikat pada instance component, sehingga harus dipanggil menggunakan "this"

    // * DESTRUCTURING PROPERTIES / PROPS
    // ? simpan props name ke variabel bernama "name", dst (nama variabel harus sama dengan nama props)
    // ? Destructuring memungkinkan agar tidak perlu selalu memanggil props dengan "this.state"
    // const { name, age, belt } = this.props;

    // * Dalam FUNCTION, tidak perlu merefer pada class instance, sehingga tidak perlu menggunakan "this", dan hanya akan merefer props yang dipassing ke function sebagai parameter
    // const { ninjas } = props;
    // const ninjas = this.props.ninjas;

    // * Membuat konstanta array yang menyimpan per baris data array ninjas (array 2 dimensi menjadi 1 dimensi)
    // * CONDITIONAL OUTPUT : 1
    // const ninjaList = ninjas.map(ninja => {
        // if (ninja.age > 20) {
        //     return (
        //         <div className="ninja" key={ ninja.id }>
        //             <div>Name: { ninja.name }</div>
        //             <div>Age: { ninja.age }</div>
        //             <div>Belt: { ninja.belt }</div>
        //             <hr />
        //         </div>
        //     )
        // } else {
        //     return null;
        // }
    // })

    // * CONDITIONAL OUTPUT : 2
    // const ninjaList = ninjas.map(ninja => {
    //     // * ternary operators: condition ? (true) : (false)
    //     return ninja.age > 20 ? (
    //         <div className="ninja" key={ ninja.id }>
    //             <div>Name: { ninja.name }</div>
    //             <div>Age: { ninja.age }</div>
    //             <div>Belt: { ninja.belt }</div>
    //             <hr />
    //         </div>
    //     ) : null;
    // })

    // * Menampilkan nilai konstanta array ninjaList sebanyak data mapping yang dihasilkan
    return(
        <div className="ninja-list">
            {/* { ninjaList } */}

            {/* 
                ///* CONDITIONAL OUTPUT : 3 /// 
            */}

            { 
                ninjas.map(ninja => {
                    return ninja.age > 20 ? (
                        <div className="ninja" key={ ninja.id }>
                            <div>Name: { ninja.name }</div>
                            <div>Age: { ninja.age }</div>
                            <div>Belt: { ninja.belt }</div>
                            {/* //* Anonymous Function.
                                //? Because we add parentheses after function deleteNinja, we are automatically invoking the function instead of reference it. So, we have to add an anonymous funtion
                             */}
                            {/* <button onClick={deleteNinja(ninja.id)}>Delete</button> */}
                            <button onClick={() => {deleteNinja(ninja.id)}}>Delete</button>

                            {/* 
                                //* Anonymous function make it not automatically going to be invoked, it's only gonna be invoked when the function surrounding it fires, and thats only fires when we clicked it (onClick)
                             */}
                            <hr />
                        </div>
                    ) : null;
                })
            }
        </div>
    )
}

export default Ninjas;