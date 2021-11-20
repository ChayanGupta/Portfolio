import React from 'react'
import Portfolio1 from '../Images/portfolio1.jpg'
import Portfolio2 from '../Images/portfolio2.jpg'
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination } from 'swiper'
import 'swiper/swiper-bundle.css'
import 'swiper/components/navigation/navigation.min.css'
import 'swiper/components/pagination/pagination.min.css'

SwiperCore.use([Navigation, Pagination]);

export default function Portfolio() {

  return (
    <section className="portfolio section" id="portfolio">
      <h2 className="section__title">Portfolio</h2>
      <span className="section__subtitle">Most Recent Work</span>
      <div className="portfolio__container container">
        <div>
          <Swiper
            slidesPerView={1}
            loop={true}
            navigation
            pagination={{
              "clickable": true
            }}
          >
            <SwiperSlide>
              <div className="portfolio__content grid">
                <img src={Portfolio1} alt="" className="portfolio__img" />
                <div className="portfolio__data">
                  <h3 className="portfolio__title">Restaurant Website</h3>
                  <p className="portfolio__description">Website adoptable to all devices, with ui components and animated interaction.</p>
                  <a href="http://infinitirestaurant.herokuapp.com" target="_blank" className="button button--flex button--small portfolio__button">
                    Demo
                    <i className="uil uil-arrow-right button__icon"></i>
                  </a>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="portfolio__content grid">
                <img src={Portfolio2} alt="" className="portfolio__img" />
                <div className="portfolio__data">
                  <h3 className="portfolio__title">E-Commerce Website</h3>
                  <p className="portfolio__description">Website adoptable to all devices, with ui components.</p>
                  <a href="https://infiniticollection.herokuapp.com" target="_blank" className="button button--flex button--small portfolio__button">
                    Demo
                    <i className="uil uil-arrow-right button__icon"></i>
                  </a>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  )
}
