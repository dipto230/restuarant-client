import { Navigate, useLocation } from "react-router-dom";
import UseAdmin from "../hooks/UseAdmin";
import useAuth from "../hooks/useAuth";


const AdminRoute = (children) => {
    const [user, loading] = useAuth();
    const [isAdmin, isAdminLoading]= UseAdmin();
    const location = useLocation();
    if(user && isAdmin){
        return children;
    }
    if(loading || isAdminLoading){
        return <progress className='progress w-56'></progress>
    }
    return <Navigate to="/login"state={{from:location}}></Navigate>
  
};

export default AdminRoute;