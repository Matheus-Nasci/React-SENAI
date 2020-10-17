import React, { useState, useEffect } from 'react';
import Footer from '../../Componets/footer/index';
import Header from '../../Componets/Header/Index';
import Input from '../../Componets/input/index';
import Button from '../../Componets/button/index';

import imgTheater from '../../Assets/Images/theater.png';
import imgRefresh from '../../Assets/Images/refresh.png';
import imgTrash from '../../Assets/Images/trash.png';
import '../../Assets/Style/global.css';


function Genero() {

    const [idGenero, setIdGenero] = useState(0);
    const [genero, setGenero] = useState('');

    const [generos, setGeneros] = useState([]);

    useEffect(() => {
        listar();
    }, [])

    const listar = () => {
        fetch('http://localhost:5000/api/generos', {
            method: 'GET',

            headers: {
                authorization: 'Bearer' + localStorage.getItem('token-filmes')
            }
        })
            .then(response => response.json())
            .then(dados => {
                setGeneros(dados);
            })
            .catch(erro => console.error(erro));
    }

    //Deletar
    const trash = (id: number) => {
        if (window.confirm('Deseja excluir o Genero?')) {
            fetch('http://localhost:5000/api/generos' + id, {
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
        fetch('http://localhost:5000/api/generos/' + id, {
            method: 'GET',
            headers: {
                authorization: 'Bearer' + localStorage.getItem('token-filmes')
            }
        })
            .then(response => response.json())
            .then(dados => {
                setIdGenero(dados.idGenero);
                setGenero(dados.nome);
            })
            .catch(erro => console.error(erro));
    }

    //Cadastrar Genero

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
                authorization: 'Bearer' + localStorage.getItem('token-filmes')
            }
        })
            .then(() => {
                alert('Genero cadastrado');
                setIdGenero(0);
                setGenero('');
                listar();
            })
            .catch(erro => console.error(erro));
    }



    return (
        <div>
            <Header description="Cadastre os gêneros dos filmes" />
            <div className="centro">

                <div className="genero">
                    <main>
                        <h1>Gêneros</h1>
                        <div className="imgTitulo">
                            <img src={imgTheater} alt="" className="theater" width="100" />
                        </div>
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
                            <Input name="genero" label="Cadastrar gênero" value={genero} onChange={e => setGenero(e.target.value)} />
                            <div className="btn">
                                <Button onClick value="Salvar" />
                            </div>
                        </div>
                    </main>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Genero;