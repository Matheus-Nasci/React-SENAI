import React from 'react';
import './main.css';
import Header from '../../Componets/Header/Index';
import Footer from '../../Componets/footer/index';
import '../../Assets/Style/global.css'
import Input from '../../Componets/input/index';
import Button from '../../Componets/button';

function Cadastro() {
    return(
        <div>
            <Header description="Faça o cadastro para o Acesso"/>
            <div className="centro">
                <form>
                    <h1>Cadastro</h1>
                    <div className="cadastro">
                        <div className="inputs">
                            <Input type="name" name="nome" label="Nome" />
                            <Input type="e-mail" name="email" label="E-mail" />
                            <Input type="permission" name="permissao" label="Permissão" />
                            <Input type="password" name="senha" label="Senha" />
                        </div>
                        <div className="btn-cadastro">
                            <Button onClick value="Enviar"/>
                        </div>
                    </div>
                </form>
            </div>
            <Footer/>
        </div>
    );
}

export default Cadastro;