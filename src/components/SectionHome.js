import React, { useEffect } from "react";
import '../stylesheets/sectionHome.css';
import { BsLinkedin, BsGithub } from 'react-icons/bs';
import { BiMouse } from 'react-icons/bi';
import AOS from 'aos';
import 'aos/dist/aos.css';

/**
 * This is the presentation page where It shows information about me and what I do. 
 */

const profil = './img/profil1.png';

function SectionHome(){

    useEffect(() => {
        AOS.init({ duration: 1800, delay: 500, easing: "ease", once: false });
    }, []);

    return(
        <section className="home section" id="home">
            <div className="home-container container grid">
                <div className="home-data">
                    <span className="home-greeting" data-aos='fade-in'>Hello! I'm</span>
                    <h1 className="home-name" data-aos='zoom-in' data-aos-delay='800'>Andrés Márquez</h1>
                    <h3 className="home-education" data-aos='fade-in' data-aos-delay='1500'>Front end Developer</h3>

                    <div className="home-social">
                        <a href="https://www.linkedin.com/in/andres-marquez-747723215" target="_blank" rel="noreferrer" className="home-social-link" data-aos='fade-in' data-aos-delay='1800'>
                            <BsLinkedin />
                        </a>
                        <a href="https://github.com/andres-webdev" target="_blank" rel="noreferrer" className="home-social-link" data-aos='fade-in' data-aos-delay='2000'>
                            <BsGithub /> 
                        </a>
                    </div>          
                </div>
                <div className="home-handle" data-aos='fade-up' data-aos-delay='2300'>
                        <img src={profil} alt="Foto-Profil" className="home-img" />
                </div>

                <a href="#about" className="home-scroll" data-aos='fade-right'>
                    <BiMouse className="home-scroll-icon" />
                    <span className="home-scroll-name">Scroll down</span>
                </a>
            </div>
        </section>
    );
}

export default SectionHome;