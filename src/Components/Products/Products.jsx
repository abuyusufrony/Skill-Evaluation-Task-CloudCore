import React from 'react';
import { Link } from 'react-router';

const Products = ({ productsList }) => {
    const { image, name, product_images, price, discount_amount } = productsList






    return (
        <div>

            <div className="max-w-xs rounded-md shadow-md dark:bg-gray-50 dark:text-gray-800  hover:scale-105 mb-3.5 p-2.5 ">

                {
                    product_images.length > 0 && (
                        < img src={`https://admin.refabry.com/storage/product/${product_images[0].name}`} alt="" className="object-cover object-center w-full rounded-t-md h-72 p-3 rounded-2xl dark:bg-gray-500" />
                    )
                }

                <div className="flex flex-col justify-between p-6 space-y-8">
                    <div className="space-y-2">
                        <h2 className="text-3xl font-semibold tracking-wide">{name}</h2>
                        <div className='flex justify-between'>
                            <div>
                                <h2 className=''>Price:{price} BDT</h2>
                            </div>
                            <div>
                                <h2 className=''>  Discount Price:{discount_amount}</h2>
                            </div>
                        </div>
                    </div>
                    <button type="button" className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md dark:bg-violet-600 dark:text-gray-50 cursor-pointer bg-[#224F34] text-white">See Details</button>
                </div>
            </div>



        </div>
    );
};

export default Products;