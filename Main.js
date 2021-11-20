import React from 'react'
import About from './About'
import Contact from './Contact'
import Footer from './Footer'
import Home from './Home'
import Portfolio from './Portfolio'
import ProjectInMind from './ProjectInMind'
import Qualification from './Qualification'
import Services from './Services'
import Skills from './Skills'

export default function Main() {
    return (
        <main className="main">
            <Home/>
            <About/>
            <Skills/>
            <Qualification/>
            <Services/>
            <Portfolio/>
            <ProjectInMind/>
            <Contact/>
            <Footer/>
        </main>
    )
}
