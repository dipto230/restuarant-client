import React, { useEffect, useState } from 'react';
import SectionTittle from '../../../components/SectionTittle/SectionTittle';
import MenuItem from '../../Shared/MenuItem';
import useMenu from '../../../hooks/useMenu';

const PopularMenu = () => {
    const [menu] = useMenu();
    const popular = menu.filter(item=>item.category==='popular')
    // const [menu, setMenu] =useState([]);
    // useEffect(()=>{
    //     fetch('menu.json')
    //     .then(res=>res.json())
    //     .then(data=> {
    //         const popularItems = data.filter(item=>item.category==='popular'); 
    //         setMenu(popularItems)})
    // },[])
    return (
        <section className='mb-12'>
            <SectionTittle 
                heading="From Our Menu" 
                subHeading="Order Now" 
            />
            <div className='grid md:grid-cols-2 gap-8'>
                {
                    popular.map(item=><MenuItem key={item._id}
                     item={item}
                    >
                        
                    </MenuItem>)
                }
            </div>
        </section>
    );
};

export default PopularMenu;