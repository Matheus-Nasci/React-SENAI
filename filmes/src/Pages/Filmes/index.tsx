import React from 'react';
import Footer from '../../Componets/footer/index';
import Header from '../../Componets/Header/Index';


function Filmes(){
    return(
        <div>
            <Header description="Cadastre os filmes de sua preferência"/>
                <div className="filmes">
                    <title>Filmes</title>
                    <form>
                        
                    </form>
                </div>
            <Footer/>
        </div>
    );
}

export default Filmes;