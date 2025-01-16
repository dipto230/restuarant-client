import { FaEdit, FaTrashAlt, FaUser } from "react-icons/fa";
import SectionTittle from "../../../components/SectionTittle/SectionTittle";
import useMenu from "../../../hooks/useMenu";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { Link } from "react-router-dom";


const ManagedItems = () => {
    const [menu, loading,  refetch] = useMenu();
    const axiosSecure = useAxiosSecure();
    const handleDeleteItem =  (item) =>{
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then(async(result) => {
            refetch();
            if (result.isConfirmed) {
                const res = await axiosSecure.delete(`/menu/${item._id}`);

                console.log(res.data);
                if(res.data.deletedCount>0){
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: `${item.name} has been deleted`,
                        showConfirmButton: false,
                        timer: 1500
                      });

                }
           
            }
          });

    }
    return (
        <div>
           <SectionTittle heading="Manage All Items" subHeading="Hurry Up"          ></SectionTittle>
           <div>
           <div className="overflow-x-auto">
  <table className="table w-full">
    {/* head */}
    <thead>
      <tr>
        <th>
         #
        </th>
        <th>Image</th>
        <th>Item Name </th>
        <th>Price</th>
        <th>Update</th>
        <th>Delete</th>
      </tr>
    </thead>
    <tbody>
      {
        menu.map((item,index) => <tr key={item._id}>
       <td>
       {
        index + 1
       }

       </td>
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle h-12 w-12">
                <img
                  src={item.image}
                   />
              </div>
            </div>
           
          </div>
        </td>
        <td>
        {
            item.name
        }
        
          
        </td>
        <td className="text-left">${item.price}</td>
        <td>
         <Link to={`/dashboard/updateItem/${item._id}`}>
         <button
                              
                              className="btn btn-ghost btn-sm">
                             <FaEdit className="text-white text-2xl"></FaEdit>
                             </button>
         </Link>
        </td>
        <td>
        <button
                    onClick={()=>handleDeleteItem(item)}
                     className="btn btn-ghost btn-xs">
                      <FaTrashAlt></FaTrashAlt>
                    </button>
        </td>
      </tr>)
      }
      
 
    </tbody>
  
  </table>
</div>
           </div> 
        </div>
    );
};

export default ManagedItems;