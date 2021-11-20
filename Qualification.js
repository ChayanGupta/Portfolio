import React from 'react'

export default function Qualification() {
    return (
        <section className="qualification section">
            <h2 className="section__title">Qualification</h2>
            <span className="section__subtitle">My Personal Journey</span>
            <div className="qualification__container container">
                <div className="qualification__tabs">
                    <div className="qualification__button button--flex">
                        <i className="uil uil-graduation-cap qualification__icon"></i> Education
                    </div>
                </div>
                <div className="qualification__sections">
                    <div className="qualification__content qualification__active" data-content id="education">
                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Class 10</h3>
                                <span className="qualification__subtitle">K.V. Rajgarh</span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i> 2014 - 2015
                                </div>
                            </div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>
                        <div className="qualification__data">
                            <div></div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                            <div>
                                <h3 className="qualification__title">Class 12</h3>
                                <span className="qualification__subtitle">K.V. Rajgarh</span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i> 2016 - 2017
                                </div>
                            </div>

                        </div>
                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">B.E. (IT)</h3>
                                <span className="qualification__subtitle">IET DAVV Indore</span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i> 2018 - 2022
                                </div>
                            </div>
                            <div>
                                <span className="qualification__rounder"></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
