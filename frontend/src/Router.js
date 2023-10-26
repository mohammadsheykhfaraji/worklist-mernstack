import React from 'react';
import {BrowserRouter,Routes,Route} from 'react-router-dom';

import Home from './core/Home';
import Aboutus from './core/Aboutus';



const Routers=()=>{

    return( 
        <BrowserRouter>
        
            <Routes>
              
                <Route path='/' exact element={<Home/>}/>
                <Route path='/aboutus' exact element={<Aboutus/>}/>
         
            </Routes>
        </BrowserRouter>
    );
};

export default Routers;