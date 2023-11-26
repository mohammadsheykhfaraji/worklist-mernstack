import React from 'react';
import {BrowserRouter,Routes,Route} from 'react-router-dom';

import Home from './core/Home';
import Aboutus from './core/Aboutus';
import Signin from './user/Signin';
import Signup from './user/signup';


const Routers=()=>{

    return( 
        <BrowserRouter>
        
            <Routes>
              
                <Route path='/' exact element={<Home/>}/>
                <Route path='/signin' exact element={<Signin/>}/>
                <Route path='/signup' exact element={<Signup/>}/>
                <Route path='/aboutus'  element={<Aboutus/>}/>
         
            </Routes>
        </BrowserRouter>
    );
};

export default Routers;