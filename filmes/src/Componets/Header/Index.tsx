import React from 'react';
import './style.css';
import '../../Assets/Style/global.css';
import logo from '../../Assets/Images/logo.png';

function Header() {
  return (
    <div className="principal">
      <div className="header">
          <nav>
            <img src={logo} alt="Logo da aplicação"/>
          </nav>
      </div>
    </div>
  );
}

export default Header;