import React, { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import useAuth from '../../hooks/useAuth';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

const FoodCard = ({item}) => {
    const{name, image ,price,recipe}=item;
    const{user} = useAuth();
    const navigate = useNavigate();
    const handleAddToCart= food=>{
      if(user && user.email){

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
            navigate('/login')
            
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