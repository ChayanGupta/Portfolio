import React, { useEffect } from 'react'

export default function Header() {

    let navMenu;

    useEffect(()=>{
        navMenu = document.getElementById('nav-menu');
    })

    let menushow=()=>{
        if(navMenu!==null && !navMenu.classList.contains('show-menu'))
            navMenu.classList.add('show-menu');
    }

    let menuhide=()=>{
        if(navMenu!==undefined && navMenu.classList.contains('show-menu'))
            navMenu.classList.remove('show-menu');
    }

    return (
        <header className="header" id="header">
            <nav className="nav container">
                <a href="#" className="nav__logo">Chayan</a>

                <div className="nav__menu" id="nav-menu">
                    <ul className="nav__list grid">
                        <li className="nav__item" onClick={menuhide}>
                            <a href="#home" className="nav__link">
                                <i className="uil uil-estate nav__icon"></i> Home
                            </a>
                        </li>
                        <li className="nav__item" onClick={menuhide}>
                            <a href="#about" className="nav__link">
                                <i className="uil uil-user nav__icon"></i> About
                            </a>
                        </li>
                        <li className="nav__item" onClick={menuhide}>
                            <a href="#skills" className="nav__link">
                                <i className="uil uil-file-alt nav__icon"></i> Skills
                            </a>
                        </li>
                        <li className="nav__item" onClick={menuhide}>
                            <a href="#services" className="nav__link">
                                <i className="uil uil-briefcase-alt nav__icon"></i> Services
                            </a>
                        </li>
                        <li className="nav__item" onClick={menuhide}>
                            <a href="#portfolio" className="nav__link">
                                <i className="uil uil-scenery nav__icon"></i> Portfolio
                            </a>
                        </li>
                        <li className="nav__item" onClick={menuhide}>
                            <a href="#contact" className="nav__link">
                                <i className="uil uil-message nav__icon"></i> Contactme
                            </a>
                        </li>
                    </ul>
                    <i className="uil uil-times nav__close" id="nav-close" onClick={menuhide}></i> 
                </div>
                <div className="nav__btns">
                    <div className="nav__toggle" id="nav-toogle" onClick={menushow}>
                        <i className="uil uil-apps"></i>
                    </div>
                </div>
            </nav>
        </header>
    )
}
