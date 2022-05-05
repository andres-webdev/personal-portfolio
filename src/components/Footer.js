import React from 'react';
import '../stylesheets/Footer.css';

function Footer(){

    return(
        <footer className='footer'>
            <div className='footer-container container'>
                <h1 className='footer-title'>Andrés</h1>

                <ul className='footer-list'>
                    <li>
                        <a href='#home' className='footer-link'>About</a>
                    </li>
                    <li>
                        <a href='#projects' className='footer-link'>Projects</a>
                    </li>
                    <li>
                        <a href='#skills' className='footer-link'>Skills</a>
                    </li>
                </ul>

                <span className='footer-copy'>
                    2022 Copiright. All rights reserved.
                </span>
            </div>
        </footer>
    );
}

export default Footer;