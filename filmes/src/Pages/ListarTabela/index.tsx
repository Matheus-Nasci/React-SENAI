import React, { useEffect, useState } from 'react';
import Footer from '../../Componets/footer';
import Header from '../../Componets/Header/Index';
import imgCinema from '../../Assets/Images/cinema.png';

function ListarFilme() {

    const [filmes, setFilmes] = useState([]);

    useEffect(() => {
        listar();
    }, []);

    const listar = () => {
        fetch('http://localhost:5000/api/filmes', {
            method: 'GET',
            headers: {
                authorization: 'Bearer' + localStorage.getItem('token-filmes')
            }
        })
            .then(response => response.json())
            .then(dados => {
                setFilmes(dados);
                console.log('' + filmes)
            })
            .catch(err => console.error(err));
    }

    return (
        <div>
            <Header description="Filmes" />
            <div className="listar">
                <div className="centro">
                    <main>
                        <h1>Filmes</h1>
                        <div className="imgTitulo">
                            <img className="theater" src={imgCinema} alt="" width="100" />
                        </div>
                        <table id="tabelaFilmes">
                            <thead>
                                <tr>
                                    <th>Filme</th>
                                    <th>Gênero</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    filmes.map((item: any) => {
                                        return (
                                            <tr key={item.idFilme}>
                                                <td>{item.titulo}</td>
                                                <td>{item.genero.nome}</td>
                                            </tr>
                                        )
                                    })
                                }
                            </tbody>
                        </table>
                    </main>
                </div>
            </div>
            <br/>
            <br/>
            <br/>
            <br/>
            <Footer />
        </div>
    );
}

export default ListarFilme;