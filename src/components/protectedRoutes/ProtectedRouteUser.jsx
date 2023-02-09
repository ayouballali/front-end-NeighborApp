import { Navigate, Outlet } from "react-router-dom";
import AuthenticationService from "../../api/AuthenticationService/AuthenticationService";


const ProtectedRoutesUser = ({children,redirectPath="/login"})=>{

    const isAuthenticated =  AuthenticationService.isUserAuthenticated();
    if(!isAuthenticated){
        return <Navigate to={redirectPath} replace />
    }

    return children ? children:<Outlet/>;
}


export default ProtectedRoutesUser ;