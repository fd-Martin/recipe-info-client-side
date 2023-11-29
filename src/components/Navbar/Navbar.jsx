import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';
import recipe from '../Navbar/Recipe-Info.png'

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    // console.log(user);
    const handleLogOut = () => {
        logOut()
            .then()
            .catch()
    }
    return (
        <div className='bg-error'>
            <div className="navbar container mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <li><a>Item 1</a></li>
                            <li>
                                <a>Parent</a>
                                <ul className="p-2">
                                    <li><a>Submenu 1</a></li>
                                    <li><a>Submenu 2</a></li>
                                </ul>
                            </li>
                            <li><a>Item 3</a></li>
                        </ul>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1 text-xl font-bold">
                            <li><Link to='/'>Home</Link></li>
                            <li><Link to='blog'>Blog</Link></li>
                        </ul>
                    </div>
                </div>
                <div>
                    <Link to='/' className=""> <img className='w-18 mx-auto' src={recipe} /></Link>
                </div>
                <div className="navbar-end">
                    {user ?
                        <div className="avatar">
                            <span className="w-16 tooltip  tooltip-bottom rounded-full" data-tip={user.displayName}>
                                <img src={user.photoURL} />
                            </span>
                        </div>
                        : null}
                    {
                        user ? <button className="btn btn-warning text-xl ms-5" onClick={handleLogOut}>LogOut</button> :
                            <Link to='/login'>
                                <button className="btn btn-primary text-xl">Login</button></Link>
                    }

                </div>
            </div>
        </div>
    );
};

export default Navbar;