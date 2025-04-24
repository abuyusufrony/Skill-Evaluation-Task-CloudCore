import React from 'react';
import { useLoaderData, useParams } from 'react-router';

const ProductsDetails = () => {
    const get = useLoaderData()
    const { id } = useParams()
    const idint = parseInt(id)
    const array = get.data.data;

    console.log(array.name)
    const allProducts = array.find(allp => allp.id === idint)

    const { name, image, price, short_desc, category } = allProducts


    return (
        <div className=''>
            <div className='bg-[#224F34] h-[450px] rounded'>
                <div className="text-section text-center ">
                    <h2 className='text-3xl font-bold text-white pt-2.5 '>Product Details</h2>
                    <p className='text-white font-light text-center pt-2.5'>  Stay warm and stylish this winter with our premium winter dress, crafted for comfort and elegance. Designed using high-quality Suskin fabric <br /> it offers excellent protection against wind and cold.</p>
                </div>
            </div>

            <div>
                <div className=' flex justify-center -mt-52  border-amber-300      ' >

                    <div className="hero bg-base-200  w-[1180px]  rounded-2xl ">
                        <div className="hero-content flex-col lg:flex-row">
                            <img
                                src={`https://admin.refabry.com/storage/product/${image}`}
                                className="max-w-sm rounded-lg shadow-2xl" />
                            <div>
                                <h1 className="text-5xl font-bold ">{name}</h1>
                                <p className="py-6">
                                    <p className='font-bold'> price: {price}BDT</p>



                                    <p> <span className='text-l font-bold mb-2.5'>specification: </span>
                                        <div className="bg-gray-100 p-4 rounded-lg text-sm leading-relaxed whitespace-pre-wrap">
                                            <pre>{short_desc}</pre>
                                        </div>
                                    </p>
                                    <p className='font-bold'>Rating</p>
                                    <div className='flex  '>

                                        <p> </p>

                                        <div className="rating rating-md">
                                            <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" aria-label="1 star" />
                                            <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" aria-label="2 star" defaultChecked />
                                            <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" aria-label="3 star" />
                                            <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" aria-label="4 star" />
                                            <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-500" aria-label="5 star" />
                                        </div>
                                    </div>
                                </p>

                                <button className="btn btn-primary mt-5 bg-[#224F34]">Add Cart</button>
                            </div>
                        </div>


                    </div>


                </div>

            </div>


        </div >

    );
};

export default ProductsDetails;