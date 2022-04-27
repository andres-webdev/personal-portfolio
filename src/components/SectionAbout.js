import React, { useEffect } from "react";
import '../stylesheets/sectionAbout.css';
import { BsAwardFill, BsFillFolderFill } from 'react-icons/bs';
import AOS from 'aos';
import 'aos/dist/aos.css';

const profil2 = './img/about.png';

function SectionAbout(){

    useEffect(() => {
        AOS.init({ duration: 1800, delay: 500, easing: "ease", once: false });
    }, []);

    return(
        <section className="about section" id="about">
            <span className="section-subtitle" data-aos='fade-in'>Presentation</span>
            <h2 className="section-title" data-aos='fade-in'>Resume</h2>

            <div className="about-container container grid">
                <img className="about-img" src={profil2} alt="Photo-Resume" data-aos='fade-right' data-aos-delay='600' />

                <div className="about-data">
                    <div className="about-info" data-aos='fade-in' data-aos-delay='350'>
                        <div className="about-box">
                            <BsAwardFill className='about-icon' />
                            <h3 className="about-title">Experience</h3>
                            <span className="about-subtitle">+6 months</span>
                        </div>
                        <div className="about-box">
                            <BsFillFolderFill className="about-icon" />
                            <h3 className="about-title">Projects</h3>
                            <span className="about-subtitle">+12 Completed</span>
                        </div>
                    </div>

                    <p className="about-description" data-aos='fade-left' data-aos-delay='450'>
                        I'm a Front end Software Developer using React.js Framework to build client-side Software improving UI and UX.  
                    </p>

                    <a href="#contact" className="button" data-aos='fade-in' data-aos-delay='800'>Contact</a>
                </div>
            </div>
        </section>
    );
}

export default SectionAbout;