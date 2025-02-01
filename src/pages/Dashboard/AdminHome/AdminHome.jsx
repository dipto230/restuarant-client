import React from 'react';
import useAuth from '../../../hooks/useAuth';
import { useQuery } from '@tanstack/react-query';
import useAxiosSecure, { axiosSecure } from './../../../hooks/useAxiosSecure';
import { FaBook, FaDollarSign, FaUsers } from 'react-icons/fa';

const AdminHome = () => {
    const {user} = useAuth();
    const axiosSecure = useAxiosSecure();
    const {data: stats} = useQuery({
        queryKey: ['admin-stats'],
        queryFn: async() =>{
            const res  = await axiosSecure.get('/admin-stats');
            return res.data;
        }
    })
    return (
        <div>
            <h2 className='text-3xl'>
                hi welcome to the home page 
                {
                    user?.displayName ? user.displayName : 'Back'
                }
            </h2>
            <div className="stats shadow">
  <div className="stat">
    <div className="stat-figure text-secondary">
     <FaDollarSign className='text-5xl'></FaDollarSign>
    </div>
    <div className="stat-title">Revenue</div>
    <div className="stat-value">${stats.revenue}</div>
    <div className="stat-desc">Jan 1st - Feb 1st</div>
  </div>

  <div className="stat">
    <div className="stat-figure text-secondary">
   <FaUsers className='text-5xl'></FaUsers>
    </div>
    <div className="stat-title"> Users</div>
    <div className="stat-value">${stats.users}</div>
    <div className="stat-desc">↗︎ 400 (22%)</div>
  </div>
  <div className="stat">
    <div className="stat-figure text-secondary">
   <FaBook className='text-5xl'></FaBook>
    </div>
    <div className="stat-title">Menu Item</div>
    <div className="stat-value">${stats.menuItems}</div>
    <div className="stat-desc">↗︎ 400 (22%)</div>
  </div>

  <div className="stat">
    <div className="stat-figure text-secondary">
     
    </div>
    <div className="stat-title">Orders</div>
    <div className="stat-value">${stats.orders}</div>
    <div className="stat-desc">↘︎ 90 (14%)</div>
  </div>
</div>
        </div>
    );
};

export default AdminHome;