import React, { useEffect, useState } from 'react';
import Products from '../Products/Products';
import offer from '../../assets/offer.jpg'
import { useNavigation } from 'react-router';
import Loading from '../Loading/Loading';

const Product = () => {
    const navigation = useNavigation()
    if (navigation.state === 'loading') return <Loading></Loading>

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
                    prodcut.map(p => <Products productsList={p}  ></Products>)
                }
            </div>
            <div className='offer-conatiner '>

                <section className="dark:bg-gray-100 dark:text-gray-800 bg-[#C2EFD4] my-12  ">
                    <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between ">
                        <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
                            <img className='rounded-2xl' src={offer} />
                        </div>
                        <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left text-[#224F34]">
                            <h1 className="text-5xl font-bold leading-none sm:text-6xl">Exclusive offer

                            </h1>
                            <p className="mt-6 mb-8 text-lg sm:mb-12 text-[#224F34]">Unlock the ultimate style upgrade with our exclusive
                                <br className="hidden md:inline lg:hidden" />offer Enjoy savings of up to 40% off on our latest New Arrivals
                            </p>
                            <div className='flex m-4'>
                                <div className='w-20 h-8 bg-white m-3'> <h1 className='flex justify-center'>
                                    6 Days</h1></div>
                                <div className='w-20 h-8 bg-white m-3'> <h1 className='flex justify-center'>
                                    18 Hours</h1></div>
                                <div className='w-20 h-8 bg-white m-3'> <h1 className='flex justify-center'>
                                    6 mins</h1></div>
                            </div>
                            <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">

                                <a rel="noopener noreferrer" href="#" className="px-8 py-3 text-lg font-semibold border rounded dark:border-gray-800 bg-[#224F34] text-white">BUY NOW</a>


                            </div>

                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Product;