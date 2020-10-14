import React from 'react';
import './main.css';
import Header from '../../Componets/Header/Index';
import Footer from '../../Componets/footer/index';
import '../../Assets/Style/global.css';
import cinema from '../../Assets/Images/cinema.png';
import theater from '../../Assets/Images/theater.png';

function Home() {
  return (
    <div>
        <Header description="Conheça nossa Coletanea" text="Olá,tudo bem?"/>
          <div className="centro">
            <div className="home">
              <main>
                <h1> Monte sua coletânea de filmes...</h1>
                <div className="text">
                  <h3>Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do eiusmod tempor</h3><br/>
                  <p>Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                  exercitation ullamco laboris nisi ut eiusmod tempor incididunt ut labore aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit
                  esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit.</p>
                </div>

                <img src={cinema} alt="Cinema" width="100"/><br/>
                <h3>Filmes</h3>
                
                <div className="text2">
                  <p>Filmes Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim 
                  veniam, quis nostrud exercitation ullamco laboris nisi ut eiusmod tempor 
                  incididunt ut labore aliquip ex ea commodo consequat.</p>

                  <img src={theater} alt="Teatro" width="100"/>
                  <h3>Categoria</h3>
                  <p>Categoria Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                  quis nostrud exercitation ullamco laboris nisi ut eiusmod tempor incididunt ut 
                  labore aliquip ex ea commodo consequat.</p>
                </div>
              </main>
            </div>
          </div>
        <Footer/>
    </div>
  );
}

export default Home;
