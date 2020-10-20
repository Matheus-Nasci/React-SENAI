import React from 'react';
import './style.css';
import '../../Assets/Style/global.css';
import logo from '../../Assets/Images/logo.png';
import { Link, useHistory } from 'react-router-dom';

interface HeaderProps {
  description: string;
  text?: string;
}

const Header: React.FC<HeaderProps> = (props) => {
  let history = useHistory()

  const logout = () => {
    localStorage.removeItem('token-filmes');
    history.push('/');
  }

  const menu = () => {
    const token = localStorage.getItem('token-filmes');

    if (token === undefined || token === null) {

      return (
        <ul className="menu">
          <li><Link className="link" to="/">Home</Link></li>
          <li><Link className="link" to="/lista-filme">Filme</Link></li>
          <li><Link className="link" to="/login">Login</Link></li>
          <li><Link className="link" to="/cadastro">Cadastro</Link></li>
        </ul>
      )
    } else {

      return(
        <ul className="menu">
          <li><Link className="link" to="/">Home</Link></li>
          <li><Link className="link" to="/filme">Filme</Link></li>
          <li><Link className="link" to="/genero">Genero</Link></li>

          <li><Link to="" onClick={event => {
            event.preventDefault();
            logout();
          }}>Logout</Link></li>

          </ul>
      );
    }
  }

  return (
    <div className="principal">
      <div className="header">
        <div className="align">
          <nav>
            <Link to="/"><img src={logo} alt="Logo da aplicação" /></Link>
            {menu()}
          </nav>
          <h3>{props.description}</h3>
          {props.text && <p>{props.text}</p>}
          
        </div>
      </div>
    </div>
  );
}

export default Header;