import React, { useEffect, useState } from 'react';
import Header from '../../Componets/Header/Index';
import Footer from '../../Componets/footer/index';
import Button from '../../Componets/button/index';
import Input from '../../Componets/input/index';


import imgRefresh from '../../Assets/Images/refresh.png';
import imgTrash from '../../Assets/Images/trash.png';
import imgTheater from '../../Assets/Images/theater.png';
import '../../Assets/Style/global.css';
import './main.css';

function Genero() {

    const [idGenero, setIdGenero] = useState(0);
    const [genero, setGenero] = useState('');

    const [generos, setGeneros] = useState([]);

    useEffect(() => {
        listar();
    }, []);

    const listar = () => {
        fetch('http://localhost:5000/api/generos', {
            method: 'GET',
            headers: {
                authorization: 'Bearer ' + localStorage.getItem('token-filmes')
            }
        })
            .then(response => response.json())
            .then(dados => {
                setGeneros(dados);
            })
            .catch(err => console.error(err));
    }

    const trash = (id: number) => {
        if (window.confirm('Deseja excluir o Genero?')) {
            fetch('http://localhost:5000/api/generos/' + id, {
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
        fetch('http://localhost:5000/api/generos/' + id, {
            method: 'GET',
            headers: {
                authorization: 'Bearer ' + localStorage.getItem('token-filmes')
            }
        })
            .then(response => response.json())
            .then(dados => {
                setIdGenero(dados.idGenero);
                setGenero(dados.nome);
            })
            .catch(err => console.error(err));
    }

    const salvar = () => {
        const form = {
            nome: genero
        };

        const method = (idGenero === 0 ? 'POST' : 'PUT');
        const urlRequest = (idGenero === 0 ? 'http://localhost:5000/api/generos' : 'http://localhost:5000/api/generos/' + idGenero);

        fetch(urlRequest, {
            method: method,
            body: JSON.stringify(form),
            headers: {
                'content-type': 'application/json',
                authorization: 'Bearer ' + localStorage.getItem('token-filmes')
            }
        })
            .then(() => {
                alert('Genero cadastrado');
                setIdGenero(0);
                setGenero('');
                listar();
            })
            .catch(err => console.error(err));
    }

    return (
        <div>
            <Header description="Cadastre os Gêneros dos Filmes" />
            <div className="centro">
                <main>
                    <h1>Gênero</h1>
                    <div className="imgTitulo">
                        <img className="theater" src={imgTheater} alt="" width="100" />
                    </div>
                    <section id="tabela-genero">
                        <table>
                            <thead>
                                <tr>
                                    <th>Id</th>
                                    <th>Gênero</th>
                                    <th>Ações</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    generos.map((item: any) => {
                                        return (
                                            <tr key={item.idGenero}>
                                                <td>{item.idGenero}</td>
                                                <td>{item.nome}</td>
                                                <td>
                                                    <img className="icon" src={imgRefresh} onClick={() => refresh(item.idGenero)} alt="" width="40" />
                                                    <img className="icon" src={imgTrash} onClick={() => trash(item.idGenero)} alt="" width="40" />
                                                    {/* <input type="button" onClick={() => editar(item.idGenero)} /> */}
                                                    {/* <input type="button" onClick={() => remover(item.idGenero)} /> */}
                                                </td>
                                            </tr>
                                        )
                                    })
                                }
                            </tbody>
                        </table>
                    </section>

                    <form onSubmit={event => {
                        event.preventDefault();
                        salvar();
                    }}>

                        <div className="input-genero">
                            <div className="formGenero">
                                <Input name="genero" label="Cadastrar genero" value={genero} onChange={e => setGenero(e.target.value)} />
                            </div>

                            <div className="btnGenero">
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

export default Genero;
