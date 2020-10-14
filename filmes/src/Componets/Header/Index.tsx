import React from 'react';
import './style.css';
import '../../Assets/Style/global.css';
import logo from '../../Assets/Images/logo.png';
import { Link } from 'react-router-dom';

interface HeaderProps {
  description: string;
  text?: string;
}

const Header: React.FC<HeaderProps> = (props) => {
  return (
    <div className="principal">
      <div className="header">
        <div className="align">
          <nav>
            <Link to="/"><img src={logo} alt="Logo da aplicação" /></Link>
            <ul className="menu">
              <li><Link className="link" to="/">Home</Link></li>
              <li><Link className="link" to="/login">Login</Link></li>
              <li><Link className="link" to="/cadastro">Cadastro</Link></li>
            </ul>
          </nav>
          <h3>{props.description}</h3>
          {props.text && <p>{props.text}</p>}

        </div>
      </div>
    </div>
  );
}

export default Header;