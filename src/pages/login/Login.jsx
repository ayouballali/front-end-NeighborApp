import {  useState } from "react";
import { useNavigate } from "react-router-dom";
import loginService from "../../api/Login/loginService";
import "./login.css"

const Login = ()=>{

    const [credentials,setCredentials] = useState({
        username:"",
        password:""
    })
    const [isLoading ,setIsLoading] = useState(false);
    const [errors,setErrors] = useState({});
    const navigate = useNavigate();

    //todo validate the credentials 
    const validate = (credentials)=>{
        let errors ={};
        if(credentials.username.length===0)    {errors.username = "username is required ";console.log(" iam required")}
        else if(credentials.username.length <=4) errors.username = "username  has to be more than 4 characters "
        if(credentials.password.length===0)    errors.password = "password is required "
        else if(credentials.password.length <=4) errors.password = "password has to be more than 4 characters "
        return errors;
    }

    const handleClick = async  (e)=>{
        e.preventDefault();
        setErrors({}); // clear the errors state object
        let credentialErrors = validate(credentials);
        setErrors(credentialErrors);
        if (Object.keys(credentialErrors).length === 0) {
          setIsLoading(true);
          const errorsRes = await loginService(credentials.username, credentials.password);
          setIsLoading(false);
          if (errorsRes == null) {
            navigate("/home");
          } else {
            setErrors({ ...credentialErrors, loginState: errorsRes.response.data.message });
          }
        }
    }

  


    return (
            <div className="container">
                <h1>Login</h1>
                <form method="POST" >
                    {isLoading ? <p>isLoading</p>:""}
                    {errors.loginState && <p className="error">{ "*"+ errors.loginState}</p>}
                    <div>
                        <label htmlFor="username">username</label>
                        <input 
                            onChange={(event)=>setCredentials({...credentials,username :event.target.value})} 
                            id="username"
                            type="text" />
                        <span>{errors.username && <p className="error"> {"*"+errors.username}</p>}</span>
                    </div>

                    <div>
                        <label htmlFor="password" >password </label>
                        <input 
                            id="password" 
                            onChange={(event)=>setCredentials({...credentials,password : event.target.value})}
                            type="text" />
                        <span>{errors.password && <p className="error"> {"*"+errors.password}</p>}</span>
                    </div>

                    <button onClick={handleClick}>submit</button>
                </form>
            </div>
    );
}

export default Login;