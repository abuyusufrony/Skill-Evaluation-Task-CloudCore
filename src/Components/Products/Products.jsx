import React from 'react';
import { Link } from 'react-router';

const Products = ({ productsList }) => {
    const { image, name, product_images, price, discount_amount, id } = productsList
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
                        {/* xs */}
                        <div className="rating rating-xs">
                            <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" aria-label="5 star" />
                            <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" aria-label="5 star" defaultChecked />
                            <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" aria-label="5 star" />
                            <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" aria-label="5 star" />
                            <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" aria-label="5 star" />
                        </div>



                        <div className='flex justify-between'>

                            <div>
                                <h2 className=''>Price:{price} BDT</h2>
                            </div>
                            <div>
                                <h2 className=''>  Discount Price:{discount_amount}</h2>
                            </div>
                        </div>
                    </div>
                    <Link to={`/${id}`}>
                        <button type="button" className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md dark:bg-violet-600 dark:text-gray-50 cursor-pointer bg-[#224F34] text-white">See Details</button></Link>
                </div>
            </div>

        </div >
    );
};

export default Products;