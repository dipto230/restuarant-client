import React, { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import useAuth from '../../hooks/useAuth';
import Swal from 'sweetalert2';
import { useLocation, useNavigate } from 'react-router-dom';

import axios from 'axios';
import UseCart from '../../hooks/UseCart';



const FoodCard = ({item}) => {
    const{name, image ,price,recipe, _id}=item;
    const{user} = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const [,refetch] = UseCart();
   
    const handleAddToCart= food=>{
      if(user && user.email){
        console.log(user.email,food);
        const cartItem ={
              menuId:_id,
              email: user.email,
              name,
              image,
              price 
        }
        axios.post('http://localhost:5000/carts',cartItem)
        .then(res =>{
          console.log(res.data)
          if(res.data.insertedId){
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: `${name} added to your cart `,
              showConfirmButton: false,
              timer: 1500
            });
            refetch();
          }
        })

      }else{
        Swal.fire({
          title: "you are not logged in",
          text: "please login to add to the cart!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, login in!"
        }).then((result) => {
          if (result.isConfirmed) {
            navigate('/login',{state:{from:location}})
            
          }
        });
      }
    }
    return (
        <div className="card bg-base-100 w-96 shadow-xl">
        <figure>
          <img
            src={image}
            alt="foods" />
        </figure>
        <p className='absolute right-0 mr-4 mt-4 px-4 bg-slate-800 text-white'>${price}</p>
        <div className="card-body text-center">
          <h2 className="card-title">{name}</h2>
          <p>{recipe}</p>

          <div className="card-actions justify-end">
            <button
            onClick={()=>handleAddToCart(item)}
             className="btn btn-primary">Add to Cart</button>
          </div>
        </div>
      </div>
    );
};

export default FoodCard;