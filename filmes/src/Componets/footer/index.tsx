import React from 'react'
import './style.css';
import imgRodape from '../../Assets/Images/logonegativo.png';

function Footer() {
    return(
        <div className="principal">
            <div className="footer">

                <img src={imgRodape} alt="Imagem Rodapé"/>

                <div className="text">

                    <p>Company Inc., 8901 Marmora Road, Glasgow, D04 89GR</p>

                    <p>Call us now toll free: (800)2345-6789</p>

                    <p>Customer support: support@demolink.org</p>

                    <p>Skype: sample-username</p>
                
                </div>

            </div>
        </div>
    );
}
export default Footer;