import React, { useEffect } from 'react';
import '../stylesheets/sectionContact.css';
import { MdAttachEmail } from 'react-icons/md';
import AOS from 'aos';
import 'aos/dist/aos.css';

function SectionContact(){

    useEffect(() => {
        AOS.init({ duration: 1800, delay: 500, easing: "ease", once: false });
    }, []);

    return(
        <section className='contact section' id='contact'>
            
            <h2 className='section-title' data-aos='fade-in'>Contact</h2>

            <div className='contact-container container grid' data-aos='zoom-in' data-aos-delay='500'>
                <div className='contact-content'>
                    <div className='contact-card'>
                        <MdAttachEmail className='contact-card-icon' />

                        <h3 className='contact-card-title'>Mail</h3>

                        <span className='contact-card-data'>andresdmf55@gmail.com</span>
                    </div>
                </div>
            </div>

        </section>
    );
}

export default SectionContact;