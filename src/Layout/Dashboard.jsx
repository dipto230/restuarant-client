import React from 'react';
import { FaAd, FaBook, FaCalendar, FaEnvelope, FaHome, FaList, FaSearch, FaShoppingCart, FaUser, FaUtensils, FaVoicemail } from 'react-icons/fa';
import { NavLink, Outlet } from 'react-router-dom';
import UseCart from '../hooks/UseCart';
import UseAdmin from '../hooks/UseAdmin';

const Dashboard = () => {
   const [isAdmin] = UseAdmin();

    const [cart] = UseCart();
    return (
        <div className='flex'>
        <div className='w-64 min-h-screen bg-orange-400'>
        <ul className='menu p-4'>
     {
      isAdmin?<>
      <li>
     <NavLink to="/dashboard/adminHome">
       <FaHome></FaHome>
        Admin Home </NavLink>
        </li>
        <li>
     <NavLink to="/dashboard/addItems">
       <FaUtensils></FaUtensils>
        Add Item's  </NavLink>
        </li>
        <li>
     <NavLink to="/dashboard/manageItems">
        <FaList></FaList>
        Manage items</NavLink>
        </li>
        <li>
     <NavLink to="/dashboard/bookings">
        <FaBook></FaBook>
        My Bookings</NavLink>
        </li>
      

        <li>
     <NavLink to="/dashboard/users">
        <FaUser></FaUser>
        All User's</NavLink>
        </li>

      </>
      :
      <>
      <li>
     <NavLink to="/dashboard/userHome">
       <FaHome></FaHome>
        User Home </NavLink>
        </li>
        <li>
     <NavLink to="/dashboard/reservation">
       <FaCalendar></FaCalendar>
        Reservation  </NavLink>
        </li>
        <li>
     <NavLink to="/dashboard/cart">
        <FaShoppingCart></FaShoppingCart>
        Add Cart({cart.length})</NavLink>
        </li>
        <li>
     <NavLink to="/dashboard/review">
        <FaAd></FaAd>
        Add a Review</NavLink>
        </li>
      

        <li>
     <NavLink to="/dashboard/bookings">
        <FaList></FaList>
        My Bookings</NavLink>
        </li>
      </>
     }

        {/* shared nav link */}

        <div className='divider'></div>

        <li>
     <NavLink to="/">
       <FaHome></FaHome>
        Home </NavLink>
        </li>
        <li>
     <NavLink to="/order/salad">
       <FaSearch></FaSearch>
        Menu </NavLink>
        </li>
        <li>
     <NavLink to="/order/contact">
       <FaEnvelope></FaEnvelope>
        Contact </NavLink>
        </li>

        </ul>

        </div>
        <div className='flex-1 p-10'>
            <Outlet></Outlet>
        </div>
            
        </div>
    );
};

export default Dashboard;