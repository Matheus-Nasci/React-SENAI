import React from 'react';
import './main.css';
import Header from '../../Componets/Header/Index';
import Footer from '../../Componets/footer/index';
import '../../Assets/Style/global.css';

function Home() {
  return (
    <div>
        <Header description="Conheça nossa Coletanea"/>
          <div className="centro">
            <div className="home">
              <main>
                <h1>Home</h1>
              </main>
            </div>
          </div>
        <Footer/>
    </div>
  );
}

export default Home;
