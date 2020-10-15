import React from 'react';
import './main.css'
import Footer from '../../Componets/footer/index';
import Header from '../../Componets/Header/Index';
import imgCinema from '../../Assets/Images/cinema.png'

function Filmes(){
    return(
        <div>
            <Header description="Cadastre os filmes de sua preferência"/>
                <div className="filmes">
                    <title>Filmes</title>
                    <form>
                        <h1>Filmes</h1>
                        <div className="imgTitulo">
                            <img src={imgCinema} alt="" className="theater" width="100"/>
                        </div>
                    </form>
                </div>
            <Footer/>
        </div>
    );
}

export default Filmes;