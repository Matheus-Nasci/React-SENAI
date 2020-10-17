import React, { useState, useEffect } from 'react';
import Footer from '../../Componets/footer/index';
import Header from '../../Componets/Header/Index';
import Input from '../../Componets/input/index';
import Button from '../../Componets/button/index';

import imgCinema from '../../Assets/Images/cinema.png';
import imgRefresh from '../../Assets/Images/refresh.png';
import imgTrash from '../../Assets/Images/trash.png';
import '../../Assets/Style/global.css';
import './main.css'

function Filmes() {

    const [idFilme, setIdFilme] = useState(0);
    const [filme, setFilme] = useState('');

    const [filmes, setFilmes] = useState([]);

    useEffect(() => {
        listar();
    }, [])

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
            })
            .catch(erro => console.error(erro));
    }

    //Deletar
    const trash = (id: number) => {
        if (window.confirm('Deseja excluir o Filme?')) {
            fetch('http://localhost:5000/api/filmes' + id, {
                method: 'DELETE',
                headers: {
                    authorization: 'Bearer' + localStorage.getItem('token-filmes')
                }

            })

                .then(response => response.json())
                .then(dados => {
                    dados.listar()
                })
                .catch(erro => console.error(erro))

        }
    }

    //Atualizar
    const refresh = (id: number) => {
        fetch('http://localhost:5000/api/filmes/' + id, {
            method: 'GET',
            headers: {
                authorization: 'Bearer' + localStorage.getItem('token-filmes')
            }
        })
            .then(response => response.json())
            .then(dados => {
                setIdFilme(dados.idFilme);
                setFilme(dados.nome);
            })
            .catch(erro => console.error(erro));
    }

    //Cadastrar Genero

    const salvar = () => {
        const form = {
            nome: filme
        };

        const method = (idFilme === 0 ? 'POST' : 'PUT');
        const urlRequest = (idFilme === 0 ? 'http://localhost:5000/api/filmes' : 'http://localhost:5000/api/filmes/' + idFilme);

        fetch(urlRequest, {
            method: method,
            body: JSON.stringify(form),
            headers: {
                'content-type': 'application/json',
                authorization: 'Bearer' + localStorage.getItem('token-filmes')
            }
        })
            .then(() => {
                alert('Filme cadastrado');
                setIdFilme(0);
                setFilme('');
                listar();
            })
            .catch(erro => console.error(erro));
    }

    return (
        <div>
            <Header description="Cadastre os filmes de sua preferência" />
            <div className="centro">
                <div className="filmes">
                    <title>Filmes</title>
                    <h1>Filmes</h1>
                    <div className="imgTitulo">
                        <img src={imgCinema} alt="" className="theater" width="100" />
                    </div>
                    <table>
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Filmes</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                filmes.map((item: any) => {
                                    return (
                                        <tr key={item.idGenero}>
                                            <td>{item.idGenero}</td>
                                            <td>{item.nome}</td>
                                            <td>
                                                <img className="icon" src={imgRefresh} alt="" onClick={() => refresh(item.idGenero)} />
                                                <img className="icon" src={imgTrash} alt="" onClick={() => trash(item.idGenero)} />
                                            </td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                    <form onSubmit={event => {
                        event.preventDefault();
                        salvar();
                    }}>
                    </form>
                    <div className="form">
                        <Input name="genero" label="Cadastrar gênero" value={filme} onChange={e => setFilme(e.target.value)} />
                        <div className="btn">
                            <Button onClick value="Salvar" />
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Filmes;