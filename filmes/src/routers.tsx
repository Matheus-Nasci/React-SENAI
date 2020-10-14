import React from 'react';
import{BrowserRouter, Route} from 'react-router-dom';
import Cadastro from './Pages/Cadastro';
import Filmes from './Pages/Filmes';
import Genero from './Pages/Genero';
import Home from './Pages/Home/index';
import Login from './Pages/Login/index';
import Perfil from './Pages/Perfil';

function Routers(){
    return(
        <BrowserRouter>
            <Route path="/" exact component={Home}/>
            <Route path="/login" component={Login}/>
            <Route path="/cadastro" component={Cadastro}/>
            <Route path="/genero" component={Genero}/>
            <Route path="/perfil" component={Perfil}/>
            <Route path="/filme" component={Filmes}/>
        </BrowserRouter>
    )
}
export default Routers;