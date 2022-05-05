import React, { useState, useEffect } from 'react';
import '../stylesheets/sectionWorks.css';
import projects from './projects';
import { BiRightArrowAlt } from 'react-icons/bi';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { BsPatchCheckFill } from 'react-icons/bs';
import { RiPagesFill } from 'react-icons/ri';
import { BsGithub } from 'react-icons/bs';
import AOS from 'aos';
import 'aos/dist/aos.css';

let classChange = 'all';

function SectionWork(){
    
    const [ items, setItems ] = useState(projects);

    const [ show, setShow ] = useState(null);

    useEffect(() => {
        AOS.init({ duration: 1000, easing: "ease", once: false });
    }, []);

    function showDetails(msg){
        setShow(msg);
    }

    const handlerFilter = (elem) => {
        
        if(elem !== 'all'){

            const updateProjects = projects.filter((cateElem) => {
                return cateElem.category === elem
            });
    
            setItems(updateProjects);

        } else{
            setItems(projects);
        }

        classChange = elem;
    }

    return(
            <section className='work section' id='projects'>
                <span className='section-subtitle'>Portfolio</span>
                <h2 className='section-title' data-aos='fade-in'>Recents Projects</h2>

                <div className='work-filters'>
                    <span onClick={() => handlerFilter('all')} className={`work-item ${classChange === 'all' ? 'active-work' : ''}`}>All</span>
                    <span onClick={() => handlerFilter('web')} className={`work-item ${classChange === 'web' ? 'active-work' : ''}`}>Web</span>
                    <span onClick={() => handlerFilter('movil')} className={`work-item ${classChange === 'movil' ? 'active-work' : ''}`}>Movil</span>
                </div>

                <div className='work-container container grid'>
                      
                    {
                        items.map((elem) => {
                        
                            const { id, title, img, alt, link, description, linkGithub, goal1, goal2, goal3, goal4 } = elem;

                            return(

                                <div className='work-card' key={id}>
                                    <div className='work-card-item' onClick={() => showDetails(title)}>
                                        <img src={img} alt={alt} className='work-img' />
                                        <h3 className='work-title'>{title}</h3>
                                        <span className="work-button">
                                            Show more <BiRightArrowAlt className="work-icon" />
                                        </span>
                                    </div>

                                    <div className={`work-modal ${show === title ? 'active-modal' : ''}`}>
                                        <div className="work-modal-content">

                                            <AiOutlineCloseCircle className="work-modal-close" onClick={showDetails} />

                                            <h3 className="work-modal-title">{title}</h3>

                                            <p className="work-modal-description">{description}</p>

                                            <ul className='work-modal-list'>
                                                <li>
                                                    <h3 className="work-modal-title2">App Performance</h3>
                                                    <ul>
                                                        <li className="work-modal-item">
                                                            <BsPatchCheckFill className="work-modal-icon" />
                                                            <p className="work-modal-info">{goal1}</p>
                                                        </li>
                                                        <li className="work-modal-item">
                                                            <BsPatchCheckFill className="work-modal-icon" />
                                                            <p className="work-modal-info">{goal2}</p>
                                                        </li>
                                                        <li className="work-modal-item">
                                                            <BsPatchCheckFill className="work-modal-icon" />
                                                            <p className="work-modal-info">{goal3}</p>
                                                        </li>
                                                        <li className="work-modal-item">
                                                            <BsPatchCheckFill className="work-modal-icon" />
                                                            <p className="work-modal-info">{goal4}</p>
                                                        </li>
                                                    </ul>
                                                </li>
                                            </ul>

                                            <h4 className='work-modal-links'>Links</h4>

                                            <div className='work-modal-footer'>
                                                <a href={linkGithub} target="_blank" rel="noreferrer" className='work-button'>
                                                    <BsGithub className='work-modal-link-icon' />
                                                </a>

                                                <a href={link} target="_blank" rel="noreferrer" className='work-button'>
                                                    <RiPagesFill className='work-modal-link-icon' />
                                                </a>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            )
                        })
                    }
                </div>
            </section>
        );
}

export default SectionWork;