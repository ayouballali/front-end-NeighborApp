
import './App.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';


import Home from './pages/Home';
import Register from './pages/Register';
import ProtectedRoutesUser from './components/protectedRoutes/ProtectedRouteUser';
import Login from './pages/login/Login';



function App() {

    



  
  return (
     <BrowserRouter>
      <Routes>
          <Route path='/login' element={<Login/>} />
          <Route path='/register' element={<Register/>} />
          <Route element={<ProtectedRoutesUser/> }>
              <Route path='/home' element={<Home/>} />
          </Route>
      </Routes>
     </BrowserRouter>
  );
}

export default App;
