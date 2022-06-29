import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import ModBook from '../pages/modifiedBook';
import Principal from '../pages/principal';
import WelcomePage from '../pages/welcomePage';

function Router (){
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<WelcomePage/>} />
                <Route path='/principal' element={<Principal/>} />
                <Route path='/modifiedBook' element={<ModBook/>} />
                
            </Routes>
        </BrowserRouter>
    )
}

export default Router;