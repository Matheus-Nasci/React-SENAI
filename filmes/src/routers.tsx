import React from 'react';
import{BrowserRouter, Route} from 'react-router-dom';
import Cadastro from './Pages/Cadastro';
import Home from './Pages/Home/index';
import Login from './Pages/Login/index';

function Routers(){
    return(
        <BrowserRouter>
            <Route path="/" exact component={Home}/>
            <Route path="/login" component={Login}/>
            <Route path="/cadastro" component={Cadastro}/>
        </BrowserRouter>
    )
}
export default Routers;