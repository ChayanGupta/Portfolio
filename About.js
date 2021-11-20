import React from 'react'
import AboutImg from '../Images/about.jpeg'
import CV from '../pdf/Chayan-Cv.pdf'

export default function About() {
    return (
        <section className="about section" id="about">
            <h2 className="section__title">About Me</h2>
            <span className="section__subtitle">My Introduction</span>
            <div className="about__container container grid">
                <img src={AboutImg} alt="" className="about__img" />
                <div className="about__data">
                    <p className="about__description">
                        Web Developer with extension knowledge and working in Web Technologies, Backend and UI/UX Design, delivering quality work.
                    </p>
                    <div className="about__info">
                        <div>
                            <span className="about__info-title">05+ </span>
                            <span className="about__info-name">Completed <br/> project</span>
                        </div>
                    </div>
                    <div className="about__buttons">
                        <a download="" href={CV} className="button button--flex">
                            Download CV<i className="uil uil-download-alt button__icon"></i>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}
