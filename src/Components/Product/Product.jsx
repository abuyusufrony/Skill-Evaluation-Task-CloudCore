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





    return (
        <div>
            <h2 className='text-center text-2xl font-bold mt-2.5 text-[#224F34]'>Our products  </h2>

            <div className='flex justify-around mb-2.5 text-[#454545] font-bold'>
                <div> <h1 className=''>SALE</h1>
                </div>
                <div> <h1>HOT</h1>
                </div>
                <div> <h1>New Arrivals</h1>
                </div>
                <div> <h1>Accessories</h1>
                </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-11/12 mx-auto '>
                {
                    prodcut.map(p => <Products productsList={p}></Products>)
                }
            </div>
        </div>
    );
};

export default Product;