import React from 'react';
import Header from '../Components/Header/Header';
import { Outlet, useNavigation } from 'react-router';
import Footer from '../Components/Footer/Footer';

const Body = () => {


    return (
        <div className='w-11/12 mx-auto' >

            <Header></Header>

            <Outlet></Outlet>
            <Footer></Footer>



        </div>
    );
};

export default Body;