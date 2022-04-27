import React from 'react';
import '../stylesheets/Header.css';
import { BiHomeAlt } from "react-icons/bi";
import { FaRegMoon, FaBook, FaUser, FaRegFileCode, FaSuitcase } from "react-icons/fa";
import { BsFillSunFill } from 'react-icons/bs';

/**
 * This header contains the menu to diversals sections of the
 * page. There are 5 sections: Home, About, Experience, Skills and Projects
 * 
 * We have 2 main styles depend on the screen of the device
 *
 */

class Header extends React.Component{

  constructor(props){
    super(props);

    this.state = {
      theme: false,
      link: 'home',
    };

    this.handlerTheme = this.handlerTheme.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }


  handlerTheme = () => {
    this.setState({ theme: !this.state.theme });

    this.props.themeValue(this.state.theme);

  }

  handleClick = (event) => {

    this.setState({ link: event });
    console.log(this.state.link);
    
  }

  render(){

    return (
      <header className='header' id='header'>
        <nav className='nav'>
          <a href='#' className='nav-logo'>Andrés</a>

          <div className='nav-menu'>
            <ul className='nav-list'>
              <li>
                <a href='#home' onClick={() => this.handleClick('home')} className={`nav-link ${this.state.link === 'home' ? 'active-link' : ''}`}>
                  <BiHomeAlt />
                  <span className='nav-link-name'>Home</span>
                </a>
              </li>
              <li>
                <a href='#about' onClick={() => this.handleClick('about')} className={`nav-link ${this.state.link === 'about' ? 'active-link' : ''}`}>
                  <FaUser />
                  <span className='nav-link-name'>About</span>
                </a>
              </li>
              <li>
                <a href='#experience' onClick={() => this.handleClick('exp')} className={`nav-link ${this.state.link === 'exp' ? 'active-link' : ''}`}>
                  <FaSuitcase />
                  <span className='nav-link-name'>Experience</span>
                </a>
              </li>
              <li>
                <a href='#skills' onClick={() => this.handleClick('skills')} className={`nav-link ${this.state.link === 'skills' ? 'active-link' : ''}`}>
                  <FaBook />
                  <span className='nav-link-name'>Skills</span>
                </a>
              </li>
              <li>
                <a href='#projects' onClick={() => this.handleClick('pro')} className={`nav-link ${this.state.link === 'pro' ? 'active-link' : ''}`}>
                  <FaRegFileCode />
                  <span className='nav-link-name'>Projects</span>
                </a>
              </li>
            </ul>
          </div>

          <BsFillSunFill className={this.state.theme === true ? 'change-theme-hide' : 'change-theme'} onClick={this.handlerTheme} />
          <FaRegMoon className={this.state.theme === false ? 'change-theme-hide' : 'change-theme'} onClick={this.handlerTheme} />


        </nav>
      </header>
    );
  }
}

export default Header;
