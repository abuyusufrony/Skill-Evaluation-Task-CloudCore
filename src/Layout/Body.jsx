import React from 'react';
import Header from '../Components/Header/Header';
import { Outlet } from 'react-router';

const Body = () => {
    return (
        <div className='w-11/12 mx-auto' >

            <Header></Header>

            <Outlet></Outlet>


        </div>
    );
};

export default Body;