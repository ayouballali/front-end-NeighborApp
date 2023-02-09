import { useEffect, useState } from "react";
import axios from "../CustomAxios"


const Home = ()=>{

    const [users,setUsers] = useState();
    const [isLoading,setIsLoading] = useState(false);

    useEffect(()=>{
        setIsLoading(true);
        const res = axios.get("api/auth/all");
        res.then((res)=>  { 
            console.log(res.data); 
            setUsers(res.data); 
            setIsLoading(false);
            
        });

      
    },[]);
    

    return (
        <>
          {isLoading  ? <p>isLoading</p> : 
            users==null? <p>no users </p> : users.map((user) => <li key={user.id} > {user.name}</li> )}
        
    
        </>
    );
}

export default Home;