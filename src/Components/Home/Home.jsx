import React from 'react';

import bannergirl from '../../assets/girl.png'
const Home = () => {
    return (
        <div className="hero  min-h-screen bg-[#C2EFD4]">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img
                    src={bannergirl}
                    className=" max-w-sm  lg:max-w-2xl   rounded-xl shadow-2xl"
                />
                <div>
                    <h1 className="text-5xl font-bold text-[#224F34]">Discover and <br /> Find Your Own <br /> Fashion!</h1>
                    <p className="py-6 text-[#224F34]">
                        Discover trend-forward fashion pieces and timeless accessories that reflect your personal style effortlessly.Explore our curated collection of stylish clothing and accessories tailored to your unique taste.
                    </p>
                    <button className="btn btn-primary mt-5 bg-[#224F34]">Explore More</button>
                </div>
            </div>
        </div>
    );
};

export default Home;