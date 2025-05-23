import React from 'react';
import { Link, NavLink } from 'react-router';

const Header = () => {
    const link = <><li><NavLink>HOME</NavLink></li>
        <li className='text-[#224F34]'><NavLink to='/Product'>SHOP</NavLink></li>
        <li className='text-[#224F34]'><NavLink>FEATURES</NavLink></li>
        <li className='text-[#224F34]'><NavLink>CONTRACT</NavLink></li>

    </>
    return (
        <div className="navbar  shadow-sm bg-[#C2EFD4]">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        {link}

                    </ul>
                </div>
                <Link to="/" className="btn btn-ghost text-xl text-blue-600">CloudMart </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {link}
                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn">Profile</a>
            </div>
        </div>
    );
};

export default Header;