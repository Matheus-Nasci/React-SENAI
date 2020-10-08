import React from 'react';
import './main.css';
import Header from '../../Componets/Header/Index';
import Footer from '../../Componets/footer/index';
import '../../Assets/Style/global.css'

function Cadastro() {
    return(
        <div>
            <Header description="Faça o cadastro para o Acesso"/>
            <div className="centro">
                <main>
                    <div className="cadastro">
                        <h1>Cadastro</h1>
                    </div>
                </main>
            </div>
            <Footer/>
        </div>
    );
}

export default Cadastro;