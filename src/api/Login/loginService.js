import axiosInstance from "../../CustomAxios"
import AuthenticationService from "../AuthenticationService/AuthenticationService";


const  loginService = async (username,password)=>{
        try {
            
            const response  = await axiosInstance.post("/api/login?username="+username+"&password="+password);
            
            
            AuthenticationService.setTokenInStorage(response.data.access_token);
           
            
          } catch (error) {
           
            //   console.log(error+"i am ctach ");
              return error;    
          }
}

export default loginService;