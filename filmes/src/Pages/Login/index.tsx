import React from 'react';
import './main.css';
import Header from '../../Componets/Header/Index';
import Footer from '../../Componets/footer/index';
import '../../Assets/Style/global.css'
import Input from '../../Componets/input/index';

function Login() {
    return (
        <div>
            <Header description="Faça o login para acessar a Coletanea" />
            <div className="centro">
                <div className="login">
                    <main>
                        <h1>Login</h1>
                        <Input type="e-mail" name="email" label="E-mail" />
                        <Input type="password" name="senha" label="Senha" />
                        <div className="botao">
                            <button>Enviar</button>
                        </div>
                    </main>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Login;