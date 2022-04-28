import React, { useState, useEffect } from 'react';
import '../stylesheets/sectionWorks.css';
import projects from './projects';
import { BiRightArrowAlt } from 'react-icons/bi';
import AOS from 'aos';
import 'aos/dist/aos.css';

let classChange = 'all';

function SectionWork(){
    
    const [ items, setItems ] = useState(projects);

    useEffect(() => {
        AOS.init({ duration: 1800, delay: 500, easing: "ease", once: false });
    }, []);

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
                <span className='section-subtitle' data-aos='fade-in'>Portfolio</span>
                <h2 className='section-title' data-aos='fade-in'>Recents Projects</h2>

                <div className='work-filters' data-aos='fade-left' data-aos-delay='600'>
                    <span onClick={() => handlerFilter('all')} className={`work-item ${classChange === 'all' ? 'active-work' : ''}`}>All</span>
                    <span onClick={() => handlerFilter('web')} className={`work-item ${classChange === 'web' ? 'active-work' : ''}`}>Web</span>
                    <span onClick={() => handlerFilter('movil')} className={`work-item ${classChange === 'movil' ? 'active-work' : ''}`}>Movil</span>
                </div>

                <div className='work-container container grid' data-aos='fade-up' data-aos-delay='800'>
                      
                    {
                        items.map((elem) => {
                        
                            const { id, title, img, alt, link } = elem;

                            return(

                                <div className='work-card' key={id}>
                                    <img src={img} alt={alt} className='work-img' />
                                    <h3 className='work-title'>{title}</h3>
                                    <a href={link} target="_blank" rel="noreferrer" className='work-button'>
                                        Demo <BiRightArrowAlt className='work-icon' />
                                    </a>
                                </div>
                            )
                        })
                    }
                </div>
            </section>
        );
}

export default SectionWork;