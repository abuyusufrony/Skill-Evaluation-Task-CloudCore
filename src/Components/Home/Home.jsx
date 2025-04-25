import React from 'react';
import Banner from '../Banner/Banner';
import Product from '../Product/Product';
import Footer from '../Footer/Footer';
import { Outlet, useNavigation } from 'react-router';
import Loading from '../Loading/Loading';

const Home = () => {

    const nav = useNavigation()
    if (nav.state === 'loading') return <Loading></Loading>
    return (
        <div>
            <Banner></Banner>

            <Outlet></Outlet>
            <Product></Product>
            <Footer></Footer>

        </div>
    );
};

export default Home;