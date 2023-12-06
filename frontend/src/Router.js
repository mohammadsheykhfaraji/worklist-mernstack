import React from 'react';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Privateroutes from './auth/privateroute';

import Home from './core/Home';
import Aboutus from './core/Aboutus';
import Signin from './user/Signin';
import Signup from './user/signup';
import Userdashboard from './user/Userdashboard';

const Routers=()=>{

    return( 
        <BrowserRouter>
        
            <Routes>
              
                <Route path='/' exact element={<Home/>}/>
                <Route path='/signin'  element={<Signin/>}/>
                <Route path='/signup'  element={<Signup/>}/>
                <Route path='/aboutus'  element={<Aboutus/>}/>


                <Route element={<Privateroutes/>}>
       
                     <Route path="/user/dashboard" element={<Userdashboard />} />
                </Route>
                
         
            </Routes>
        </BrowserRouter>
    );
};

export default Routers;