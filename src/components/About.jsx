import React from 'react'
import me from '../assets/me-about.jpg'
import { FaAward } from 'react-icons/fa'
import { HiLightBulb } from 'react-icons/hi'
import { AiFillFolderOpen } from 'react-icons/ai'


const About = () => {
  return (
    <section id='about' className='pt-5'>
      <h5 className='pt-5'>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container">
        <div className="row">

        <div className="about__me col-7 mb-5 col-lg-4 mb-lg-0 px-0">
          <div className="about__me-img">
            <img src={me} alt="About Image" />
          </div>
        </div>

        <div className="about__content col-11 col-lg-6 offset-lg-2 d-flex flex-column justify-content-center text-center text-md-start">
          
          <div className="about__cards">
            <article className="about__card">
              <FaAward className='about__icon' />
              <h5>Overall Experience</h5>
              <small>2 Years Software Engineer</small><br />
              <small>1+ Years Digital Marketer</small>
            </article>

            <article className="about__card">
              <HiLightBulb className='about__icon' />
              <h5>Academic</h5>
              <small>Diploma in Data Analytics (Distinction)</small><br />
              <small>Bachelors in Financial Technology</small><br />
              <small>CGPA 3.95</small>
            </article>

            <article className="about__card">
              <AiFillFolderOpen className='about__icon' />
              <h5>Working Experience</h5>
              <small>Developed a System for a Startup Company</small><br />
              <small>Secured RM 23k+ Sales from Digital Marketing</small>
            </article>
          </div>

          <p>
            Passionate in digital markeing and web development. Interested in collaborating internationally. 
            I can market your product /service, build a website for you. 
            Feel free to drop me a DM for more info, I won't eat you. :D
          </p>
          <a href="#contact" className='btn btn-primary'>Let's Talk</a>

        </div>
        
        </div>
      </div>
    </section>
  )
}

export default About