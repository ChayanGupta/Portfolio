import React from 'react'

export default function Contact() {
    return (
        <section className="contact section" id="contact">
            <h2 className="section__title">Contact Me</h2>
            <span className="section__subtitle">Get in Touch</span>
            <div className="contact__container container grid">
                <div>
                    <div className="contact__information">
                        <i className="uil uil-phone contact__icon"></i>
                        <div>
                            <h3 className="contact__title">Call Me</h3>
                            <span className="contact__subtitle">+91 9074703363</span>
                        </div>
                    </div>
                    <div className="contact__information">
                    <i className="uil uil-envelope contact__icon"></i>
                        <div>
                            <h3 className="contact__title">Email</h3>
                            <span className="contact__subtitle">chayangupta7@gmail.com</span>
                        </div>
                    </div>
                    <div className="contact__information">
                    <i className="uil uil-map-marker contact__icon"></i>
                        <div>
                            <h3 className="contact__title">Location</h3>
                            <span className="contact__subtitle">Indore, Madhya Pradesh, India</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
