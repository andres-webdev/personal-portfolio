import React, { useEffect } from "react";
import '../stylesheets/sectionSkills.css';
import { SiJavascript } from 'react-icons/si';
import { BsPatchCheckFill, BsGithub } from 'react-icons/bs';
import { FaReact, FaGitAlt } from 'react-icons/fa';
import { IoLogoCss3, IoLogoHtml5 } from 'react-icons/io';
import { RiBookMarkFill } from 'react-icons/ri';
import { MdOutlineMenuBook } from 'react-icons/md';
import AOS from 'aos';
import 'aos/dist/aos.css';

function SectionSkills(){

    useEffect(() => {
        AOS.init({ duration: 1800, delay: 500, easing: "ease", once: false });
    }, []);

    return(
        <section className="skills section" id="skills">
            <span className="section-subtitle" data-aos='fade-in'>Certificates</span>
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

                <div className="skills-content" data-aos='zoom-in' data-aos-delay='200'>
                    <h3 className="skills-title">Certificates</h3>
                
                    <div className="skills-box">
                        <div className="skills-group">
                            <div className="skills-data" data-aos='fade-in' data-aos-delay='1600'>
                                <MdOutlineMenuBook className="skills-icons" />
                                <div className="skills-block3">
                                    <span className="skills-level">Course</span>
                                    <h3 className="skills-name">Git and GitHub</h3>
                                    <span className="skills-level">Platzi - September 2021</span>
                                </div>
                            </div>
                            
                            <div className="skills-data" data-aos='fade-in' data-aos-delay='1200'>
                                <MdOutlineMenuBook className="skills-icons" />
                                <div className="skills-block3">
                                    <span className="skills-level">Course</span>
                                    <h3 className="skills-name">Algorithms and Logical Thinking</h3>
                                    <span className="skills-level">Platzi - July 2021</span>
                                </div>
                            </div>

                            <div className="skills-data" data-aos='fade-in' data-aos-delay='1000'>
                                <MdOutlineMenuBook className="skills-icons" />
                                <div className="skills-block3">
                                    <span className="skills-level">Course</span>
                                    <h3 className="skills-name">Digital Product Illustration</h3>
                                    <span className="skills-level">Platzi - July 2021</span>
                                </div>
                            </div>

                            <div className="skills-data" data-aos='fade-in' data-aos-delay='800'>
                                <MdOutlineMenuBook className="skills-icons" />
                                <div className="skills-block3">
                                    <span className="skills-level">Course</span>
                                    <h3 className="skills-name">Fundamentals of Software Engineering</h3>
                                    <span className="skills-level">Platzi - August 2021</span>
                                </div>
                            </div>

                            <div className="skills-data" data-aos='fade-in' data-aos-delay='1400'>
                                <MdOutlineMenuBook className="skills-icons" />
                                <div className="skills-block3">
                                    <span className="skills-level">Course</span>
                                    <h3 className="skills-name">Basic Programming</h3>
                                    <span className="skills-level">Platzi - August 2021</span>
                                </div>
                            </div>

                            <div className="skills-data" data-aos='fade-in' data-aos-delay='1800'>
                                <RiBookMarkFill className="skills-icons" />
                                <div className="skills-block3">
                                    <span className="skills-level">Diploma</span>
                                    <h3 className="skills-name">Bachelor of Technology</h3>
                                    <span className="skills-level">Universidad Nacional Experimental Politécnica 'Antonio José de Sucre' - June 2021</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default SectionSkills;