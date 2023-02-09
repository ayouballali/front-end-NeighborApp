class AuthenticationService{

    setTokenInStorage(token){
        localStorage.setItem("token","Bearer "+token);
    }

    isUserAuthenticated(){
        return true;
    }
}

const AuthenticationServiceInstanece = new AuthenticationService();

export default AuthenticationServiceInstanece ; 