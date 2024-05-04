import React from 'react'
import './About.css'
import about_img from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png'

const About = ({setPlayState}) => {
  return (
    <div className='about'>
        <div className="about-left">
            <img src={about_img} alt="" className="about-img"/>
            <img src={play_icon} alt="" className="play-icon" onClick={()=>{
              setPlayState(true)}}/>
        </div>
        <div className="about-right">
            <h3>ABOUT UNIVERSITY</h3>
            <h2>Nurturing Tomorrows's Leaders Today</h2>
            <p>Our university is known for its cutting-edge research, world-class faculty, and state-of-the-art facilities. We offer a wide range of programs in various fields, ensuring that students have ample opportunities to pursue their passions and achieve their academic and career goals.</p>
            <p>Whether you're a prospective student, a current student, an alum, or a visitor, we invite you to explore our website and learn more about what makes [University Name] a dynamic and inspiring place to study, work, and grow.</p>
        </div>
    </div>
  )
}

export default About