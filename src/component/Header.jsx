import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo.png"
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import toast from "daisyui/components/toast";
const Header = () => {
    const { user, Logout } = useContext(AuthContext);
    const links = <>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/donation">Donation Campaigns</NavLink></li>
        {/* <li><NavLink to="/help">How to Help</NavLink></li> */}
        <li><NavLink to="/dashboard">Dashboard</NavLink></li>
    </>

    const handleSignOut = () => {
        Logout()
            .then(() => { 
                toast('User Sign Out Successfully');
            })
            .catch(error => console.log(error));
    }
    return (
        <div className="navbar bg-base-100 py-5">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        {links}
                    </ul>
                </div>
                <a className="text-xl">
                    <img src={logo} alt="" className='w-16 ' />
                </a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user ? 
                        <div className="avatar flex items-center gap-4">
                            <div className="w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                <img src={user.photoURL} title={user.displayName} />
                            </div>
                            <span>{user.displayName}</span>
                            <a className="btn btn-soft btn-primary" onClick={handleSignOut}>Logout</a>
                        </div>                         
                        : 
                        <>
                            <Link to="/login" className="btn">Login</Link>
                        </>
                }
                
            </div>
        </div>
    );
};

export default Header;