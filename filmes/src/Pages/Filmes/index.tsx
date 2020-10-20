import React, { useEffect, useState } from 'react';
import Header from '../../Componets/Header/Index';
import Footer from '../../Componets/footer/index';
import Button from '../../Componets/button/index';
import Input from '../../Componets/input/index';


import imgRefresh from '../../Assets/Images/refresh.png';
import imgTrash from '../../Assets/Images/trash.png';
import imgCinema from '../../Assets/Images/cinema.png';
import '../../Assets/Style/global.css';
import './main.css';

function Filme() {

    const [idFilme, setIdFilme] = useState(0);
    const [filme, setFilme] = useState('');

    const [filmes, setFilmes] = useState([]);

    const [genero, setGenero] = useState('');
    const [generos, setGeneros] = useState([]);

    useEffect(() => {
        listar();
    }, []);

    const listar = () => {
        fetch('http://localhost:5000/api/filmes', {
            method: 'GET',
            headers: {
                authorization: 'Bearer ' + localStorage.getItem('token-filmes')
            }
        })
            .then(response => response.json())
            .then(dados => {
                setFilmes(dados);
                console.log('' + filmes)

            })
            .catch(err => console.error(err));
    }

    const trash = (id: number) => {
        if (window.confirm('Deseja excluir o Filme?')) {
            fetch('http://localhost:5000/api/filmes/' + id, {
                method: 'DELETE',
                headers: {
                    authorization: 'Bearer ' + localStorage.getItem('token-filmes')
                }
            })
                .then(response => response.json())
                .then(dados => {
                    listar();
                })
                .catch(err => console.error(err));
        }
    }

    const refresh = (id: number) => {
        fetch('http://localhost:5000/api/filmes/' + id, {
            method: 'GET',
            headers: {
                authorization: 'Bearer ' + localStorage.getItem('token-filmes')
            }
        })
            .then(response => response.json())
            .then(dados => {
                setIdFilme(dados.idFilme);
                setFilme(dados.titulo);
            })
            .catch(err => console.error(err));
    }

    const salvar = () => {
        var idGenero2 = parseInt(genero);
        const form = {
            titulo: filme,
            idGenero: idGenero2
        };

        const method = (idFilme === 0 ? 'POST' : 'PUT');
        const urlRequest = (idFilme === 0 ? 'http://localhost:5000/api/filmes' : 'http://localhost:5000/api/filmes/' + idFilme);

        fetch(urlRequest, {
            method: method,
            body: JSON.stringify(form),
            headers: {
                'content-type': 'application/json',
                authorization: 'Bearer ' + localStorage.getItem('token-filmes')
            }
        })
            .then(() => {
                alert('Filme cadastrado');
                setIdFilme(0);
                setFilme('');
                listar();
            })
            .catch(err => console.error(err));
    }

    useEffect(() => {
        listargenero();
    }, []);

    const listargenero = () => {
        fetch('http://localhost:5000/api/generos', {
            method: 'GET',
            headers: {
                authorization: 'Bearer ' + localStorage.getItem('token-filmes')
            }
        })
            .then(response => response.json())
            .then(dados => {
                setGeneros(dados);
                console.log('' + generos)
            })
            .catch(err => console.error(err));
    }

    return (
        <div>
            <Header description="Cadastre os Filmes" />
            <div className="centro">
                <main>
                    <h1>Filme</h1>
                    <div className="imgTitulo">
                        <img className="theater" src={imgCinema} alt="" width="100" />
                    </div>
                    <table id="tabelaFilmes">
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Filme</th>
                                <th>Gênero</th>
                                <th>Ações</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                filmes.map((item: any) => {
                                    return (
                                        <tr key={item.idFilme}>
                                            <td>{item.idFilme}</td>
                                            <td>{item.titulo}</td>
                                            <td>{item.genero.nome}</td>
                                            <td>
                                                <img className="icon" src={imgRefresh} onClick={() => refresh(item.idFilme)} alt="" width="40" />
                                                <img className="icon" src={imgTrash} onClick={() => trash(item.idFilme)} alt="" width="40" />
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

                        <div className="formFilme">

                            <div>
                                <Input name="filme" label="Cadastrar Filme" value={filme} onChange={e => setFilme(e.target.value)} />
                            </div>

                            <div className="selectFilmes">

                                <select name="genero" onChange={e => setGenero(e.target.value)} value={genero}>
                                    <option value="0">Selecione um Gênero</option>
                                    {
                                        generos.map((item: any) => {
                                            return <option value={item.idGenero}>{item.nome}</option>
                                        })
                                    }
                                </select>
                            </div>
                            <div className="btnFilmes">
                                <Button onClick value="Salvar" />
                            </div>
                        </div>
                    </form>
                </main>
            </div>
            <Footer />
        </div>
    );
}

export default Filme;