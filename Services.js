import React from 'react'

export default function Services() {

    var modal1,modal2;

    let openModal1=()=>{
        modal1=document.getElementById('model1');
        modal1.classList.add('active-modal');
    }

    let openModal2=()=>{
        modal2=document.getElementById('model2');
        modal2.classList.add('active-modal');
    }

    let closeModal1=()=>{
        modal1.classList.remove('active-modal');
    }

    let closeModal2=()=>{
        modal2.classList.remove('active-modal');
    }

    return (
        <section className="services section" id="services">
            <h2 className="section__title">Services</h2>
            <span className="section__subtitle">What I Offer</span>
            <div className="services__container container grid">
                <div className="services__content">
                    <div>
                    <i className="uil uil-arrow services__icon"></i>
                        <h3 className="services__title">Frontend <br/> Developer</h3>
                    </div>
                    <span className="button button--flex button--small button--link services__button" onClick={openModal1}>
                        View More
                        <i className="uil uil-arrow-right button__icon"></i>
                    </span>
                    <div className="services__modal" id="model1">
                        <div className="services__modal-content">
                            <h4 className="services__modal-title">Frontend <br /> Developer</h4>
                            <i className="uil uil-times services__modal-close" onClick={closeModal1}></i>
                            <ul className="services__modal-services grid">
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p>I develop the user interface.</p>
                                </li>
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p>Web Page Development.</p>
                                </li>
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p>I create ux element interactions.</p>
                                </li>
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p>HTML5 and CSS3 Development.</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="services__content">
                    <div>
                    <i className="uil uil-server services__icon"></i>
                        <h3 className="services__title">Backend <br/> Developer</h3>
                    </div>
                    <span className="button button--flex button--small button--link services__button" onClick={openModal2}>
                        View More
                        <i className="uil uil-arrow-right button__icon"></i>
                    </span>
                    <div className="services__modal" id="model2">
                        <div className="services__modal-content">
                            <h4 className="services__modal-title">Backend <br /> Developer</h4>
                            <i className="uil uil-times services__modal-close" onClick={closeModal2}></i>
                            <ul className="services__modal-services grid">
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p>Backend for Web Apps.</p>
                                </li>
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p>API Integration and Development.</p>
                                </li>
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p>Security.</p>
                                </li>
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p>Re-engineering and Maintenance.</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
