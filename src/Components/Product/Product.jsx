import React, { useEffect, useState } from 'react';
import Products from '../Products/Products';

const Product = () => {

    const [prodcut, setproduct] = useState([])

    useEffect(() => {
        fetch('https://admin.refabry.com/api/all/product/get')
            .then((res) => res.json())
            .then((data) => setproduct(data.data.data))
            .catch((err) => console.error("Error fetching data:", err));

    }, [])
    if (!prodcut) {
        return <h2>Loading...</h2>;
    }




    return (
        <div>
            <h2>This are prodcut section {prodcut.length}  </h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-11/12 mx-auto '>
                {
                    prodcut.map(p => <Products productsList={p}></Products>)
                }
            </div>
        </div>
    );
};

export default Product;