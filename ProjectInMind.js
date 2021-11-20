import React from 'react'

export default function ProjectInMind() {
    return (
        <section className="project section">
            <div className="project__bg">
                <div className="project__container container grid">
                    <div className="project__data">
                        <h2 className="project__title">
                            You have a New Project
                        </h2>
                        <p className="project__description">
                            Contact me now and get a 30% discount on your new project.
                        </p>
                        <a href="#contact" className="button button--flex button--white">
                            Contact me<i className="uil uil-message project__icon button__icon"></i>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}
