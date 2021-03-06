import React from 'react'

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer__bg">
                <div className="footer__container container grid">
                    <div>
                        <h1 className="footer__title">Chayan</h1>
                        <span className="footer__subtitle">Fullstack Developer</span>
                    </div>
                    <ul className="footer__links">
                        <li>
                            <a href="#services" className="footer__link">Services</a>
                        </li>
                        <li>
                            <a href="#portfolio" className="footer__link">Portfolio</a>
                        </li>
                        <li>
                            <a href="#contact" className="footer__link">Contactme</a>
                        </li>
                    </ul>
                    <div className="footer__socials">
                        <a href="https://www.facebook.com/chayan.gupta.71465/" target="_blank" className="footer__social">
                            <i className="uil uil-facebook-f"></i>
                        </a>
                        <a href="https://www.instagram.com/chayan_gupta17" target="_blank" className="footer__social">
                            <i className="uil uil-instagram"></i>
                        </a>
                    </div>
                </div>
                <p className="footer__copy">&#169; Chayan. All right reserved</p>
            </div>
        </footer>
    )
}
