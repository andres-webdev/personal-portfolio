import React, { useEffect } from "react";
import '../stylesheets/sectionSkills.css';
import { SiJavascript, SiAdobephotoshop, SiAdobeillustrator, SiAdobepremierepro, SiWordpress } from 'react-icons/si';
import { BsPatchCheckFill, BsGithub, BsGoogle } from 'react-icons/bs';
import { FaReact, FaGitAlt, FaFacebookF } from 'react-icons/fa';
import { IoLogoCss3, IoLogoHtml5 } from 'react-icons/io';
import AOS from 'aos';
import 'aos/dist/aos.css';

function SectionSkills(){

    useEffect(() => {
        AOS.init({ duration: 1800, delay: 500, easing: "ease", once: false });
    }, []);

    return(
        <section className="skills section" id="skills">
            <span className="section-subtitle" data-aos='fade-in'>Competence</span>
            <h2 className="section-title" data-aos='fade-in'>Skills</h2>

            <div className="skills-container container grid">
                <div className="skills-content" data-aos='zoom-in' data-aos-delay='400'>
                    <h3 className="skills-title">Lenguages and Framework</h3>
                
                    <div className="skills-box">
                        <div className="skills-group">
                            <div className="skills-data" data-aos='fade-in' data-aos-delay='800'>
                                <FaReact className="skills-icons" />
                                <div className="skills-block2">
                                    <h3 className="skills-name">React.Js</h3>
                                    <span className="skills-level">Basic</span>
                                </div>
                                <div className="skills-bs-check">
                                    <BsPatchCheckFill className="bxs" />
                                    <BsPatchCheckFill className="bxs" />
                                </div>
                            </div>

                            <div className="skills-data" data-aos='fade-in' data-aos-delay='1000'>
                                <SiJavascript className="skills-icons" />
                                <div className="skills-block2">
                                    <h3 className="skills-name">JavaScript</h3>
                                    <span className="skills-level">Intermediate</span>
                                </div>
                                <div className="skills-bs-check">
                                    <BsPatchCheckFill className="bxs" />
                                    <BsPatchCheckFill className="bxs" />
                                    <BsPatchCheckFill className="bxs" />
                                </div>
                            </div>

                            <div className="skills-data" data-aos='fade-in' data-aos-delay='1200'>
                                <IoLogoCss3 className="skills-icons" />
                                <div className="skills-block2">
                                    <h3 className="skills-name">CSS</h3>
                                    <span className="skills-level">Intermediate</span>
                                </div>
                                <div className="skills-bs-check">
                                    <BsPatchCheckFill className="bxs" />
                                    <BsPatchCheckFill className="bxs" />
                                    <BsPatchCheckFill className="bxs" />
                                </div>
                            </div>

                            <div className="skills-data" data-aos='fade-in' data-aos-delay='1400'>
                                <IoLogoHtml5 className="skills-icons" />
                                <div className="skills-block2">
                                    <h3 className="skills-name">HTML</h3>
                                    <span className="skills-level">Avanced</span>
                                </div>
                                <div className="skills-bs-check">
                                    <BsPatchCheckFill className="bxs" />
                                    <BsPatchCheckFill className="bxs" />
                                    <BsPatchCheckFill className="bxs" />
                                    <BsPatchCheckFill className="bxs" />
                                </div>
                            </div>

                            <div className="skills-data" data-aos='fade-in' data-aos-delay='1600'>
                                <BsGithub className="skills-icons" />
                                <div className="skills-block2">
                                    <h3 className="skills-name">GitHub</h3>
                                    <span className="skills-level">Basic</span>
                                </div>
                                <div className="skills-bs-check">
                                    <BsPatchCheckFill className="bxs" />
                                    <BsPatchCheckFill className="bxs" />
                                </div>
                            </div>

                            <div className="skills-data" data-aos='fade-in' data-aos-delay='1800'>
                                <FaGitAlt className="skills-icons" />
                                <div className="skills-block2">
                                    <h3 className="skills-name">GIT</h3>
                                    <span className="skills-level">Basic</span>
                                </div>
                                <div className="skills-bs-check">
                                    <BsPatchCheckFill className="bxs" />
                                    <BsPatchCheckFill className="bxs" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="skills-content" data-aos='zoom-in'>
                    <h3 className="skills-title">Extra Tools</h3>
                
                    <div className="skills-box">
                        <div className="skills-group">
                            <div className="skills-data2">
                                <SiAdobephotoshop className="skills-icons" />
                                <SiAdobeillustrator className="skills-icons" />
                                <SiAdobepremierepro className="skills-icons" />
                            </div>

                            <div className="skills-data2">
                                <BsGoogle className="skills-icons" />
                                <FaFacebookF className="skills-icons" />
                                <SiWordpress className="skills-icons" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default SectionSkills;