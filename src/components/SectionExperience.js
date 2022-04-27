import React, { useState, useEffect } from "react";
import '../stylesheets/sectionExperience.css';
import { BiRightArrowAlt } from 'react-icons/bi';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { BsPatchCheckFill } from 'react-icons/bs';
import AOS from 'aos';
import 'aos/dist/aos.css';

function SectionExperience(){

    const [ state, setState ] = useState(false);
    
    const showDetails = () => {
        setState(!state)
    }

    useEffect(() => {
        AOS.init({ duration: 1800, delay: 500, easing: "ease" });
    }, []);
    
    return(
        <section className="exp section" id="experience">
            <h2 className="section-title" data-aos='fade-in'>Experience</h2>
        
            <div className="exp-container container grid">

                <div className="exp-card">
                    <h3 className="exp-title">Company</h3>
                    <h4 className="exp-date">Month/Year - Month/Year</h4>

                    <span className="exp-button" onClick={showDetails}>
                        Show more <BiRightArrowAlt className="exp-icon" />
                    </span>

                    <div className={`exp-modal ${state ? 'active-modal' : ''}`}>
                        <div className="exp-modal-content">

                            <AiOutlineCloseCircle className="exp-modal-close" onClick={showDetails} />

                            <h3 className="exp-modal-title">Company X</h3>

                            <p className="exp-modal-description">
                                example, example
                                example, example.
                            </p>

                            <ul className="exp-modal-list">
                                <li>
                                    <h3 className="exp-modal-title2">Title 1</h3>
                                    <ul>
                                        <li className="exp-modal-item">
                                            <BsPatchCheckFill className="exp-modal-icon" />
                                            <p className="exp-modal-info">
                                                We implemented...
                                            </p>
                                        </li>
                                        <li className="exp-modal-item">
                                            <BsPatchCheckFill className="exp-modal-icon" />
                                            <p className="exp-modal-info">
                                                We implemented2...
                                            </p>
                                        </li>
                                        <li className="exp-modal-item">
                                            <BsPatchCheckFill className="exp-modal-icon" />
                                            <p className="exp-modal-info">
                                                We implemented3...
                                            </p>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <h3 className="exp-modal-title2">Title 1</h3>
                                    <ul>
                                        <li className="exp-modal-item">
                                            <BsPatchCheckFill className="exp-modal-icon" />
                                            <p className="exp-modal-info">
                                                We implemented...
                                            </p>
                                        </li>
                                        <li className="exp-modal-item">
                                            <BsPatchCheckFill className="exp-modal-icon" />
                                            <p className="exp-modal-info">
                                                We implemented2...
                                            </p>
                                        </li>
                                        <li className="exp-modal-item">
                                            <BsPatchCheckFill className="exp-modal-icon" />
                                            <p className="exp-modal-info">
                                                We implemented3...
                                            </p>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>

                </div>

                <div className="exp-card">
                    <h3 className="exp-title">Company</h3>
                    <h4 className="exp-date">Month/Year - Month/Year</h4>

                    <span className="exp-button" onClick={showDetails}>
                        Show more <BiRightArrowAlt className="exp-icon" />
                    </span>

                    <div className="exp-modal">
                        <div className="exp-modal-content">

                            <AiOutlineCloseCircle className="exp-modal-close" onClick={showDetails} />

                            <h3 className="exp-modal-title">Company X</h3>

                            <p className="exp-modal-description">
                                example, example
                                example, example.
                            </p>

                            <ul className="exp-modal-list">
                                <li>
                                    <h3 className="exp-modal-title2">Title 1</h3>
                                    <ul>
                                        <li className="exp-modal-item">
                                            <BsPatchCheckFill className="exp-modal-icon" />
                                            <p className="exp-modal-info">
                                                We implemented...
                                            </p>
                                        </li>
                                        <li className="exp-modal-item">
                                            <BsPatchCheckFill className="exp-modal-icon" />
                                            <p className="exp-modal-info">
                                                We implemented2...
                                            </p>
                                        </li>
                                        <li className="exp-modal-item">
                                            <BsPatchCheckFill className="exp-modal-icon" />
                                            <p className="exp-modal-info">
                                                We implemented3...
                                            </p>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <h3 className="exp-modal-title2">Title 1</h3>
                                    <ul>
                                        <li className="exp-modal-item">
                                            <BsPatchCheckFill className="exp-modal-icon" />
                                            <p className="exp-modal-info">
                                                We implemented...
                                            </p>
                                        </li>
                                        <li className="exp-modal-item">
                                            <BsPatchCheckFill className="exp-modal-icon" />
                                            <p className="exp-modal-info">
                                                We implemented2...
                                            </p>
                                        </li>
                                        <li className="exp-modal-item">
                                            <BsPatchCheckFill className="exp-modal-icon" />
                                            <p className="exp-modal-info">
                                                We implemented3...
                                            </p>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>

                </div>

            </div>
        </section>
    );
}

export default SectionExperience;