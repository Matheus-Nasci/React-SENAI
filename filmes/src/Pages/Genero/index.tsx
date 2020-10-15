import React, { useState, useEffect } from 'react';
import Footer from '../../Componets/footer/index';
import Header from '../../Componets/Header/Index';
import imgTheater from '../../Assets/Images/theater.png'


function Genero() {

    const [genero, setGenero] = useState('');
    const [idGenero, setIdGenero] = useState(0);

    const [generos, setGeneros] = useState([]);

    //useEffect(() => {
    //    listar();
    //}, [])

    return (
        <div>
            <Header description="Cadastre os gêneros dos filmes" />
            <div className="genero">
                <main>
                    <title>Gêneros</title>
                    <form>
                        <h1>Gêneros</h1>
                        <div className="imgTitulo">
                            <img src={imgTheater} alt="" className="theater" width="100"/>
                        </div>
                    </form>
                </main>
            </div>
            <Footer />
        </div>
    );
}

export default Genero;