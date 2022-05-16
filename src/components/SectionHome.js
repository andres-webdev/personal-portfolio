import React, { useEffect } from "react";
import '../stylesheets/sectionHome.css';
import { BsLinkedin, BsGithub } from 'react-icons/bs';
import { BiMouse } from 'react-icons/bi';
import TypeWriterEffect from 'react-typewriter-effect';
import AOS from 'aos';
import 'aos/dist/aos.css';

/**
 * This is the presentation page where It shows information about me and what I do. 
 */

const profil = './img/profil1.png';

function SectionHome(){

    useEffect(() => {
        AOS.init({ duration: 1000, easing: "ease", once: false });
    }, []);

    return(
        <section className="home section" id="home">
            <div className="home-container container grid">
                <div className="home-data">
                    <span className="home-greeting">Hello! I'm</span>
                    <h1 className="home-name" data-aos='fade-in'>Andrés Márquez</h1>

                    <TypeWriterEffect 
                        textStyle={{
                            color: 'var(--first-color)',
                            fontSize: 'var(--small-font-size)',
                            textAlign: 'center',
                        }}
                        startDelay={600}
                        multiText={["Front end Developer","React Developer","UX / UI Developer"]}
                        multiTexDelay={1000}
                        typeSpeed={135}
                        cursorColor='#3F3D56'
                        multiTextLoop
                         />         
                </div>
                
                <div className="home-handle">
                        <img src={profil} alt="Foto-Profil" className="home-img" />
                </div>

                <div className="home-resume" data-aos='fade-in'>
                    <p className="home-description">
                        I'm a Front end Software Developer using React.js library to build client-side Software, user interfaces responsibly and improving UI and UX.                   
                    </p>

                    <div className="home-social">
                        <a href="https://www.linkedin.com/in/andres-marquez-747723215" target="_blank" rel="noreferrer" className="home-social-link" data-aos='fade-in'>
                            <BsLinkedin />
                        </a>
                        <a href="https://github.com/andres-webdev" target="_blank" rel="noreferrer" className="home-social-link" data-aos='fade-in'>
                            <BsGithub /> 
                        </a>
                    </div> 
                </div>
            </div>

            <a href="#projects" className="home-scroll">
                    <BiMouse className="home-scroll-icon" />
                    <span className="home-scroll-name">Scroll down</span>
            </a>
        </section>
    );
}

export default SectionHome;