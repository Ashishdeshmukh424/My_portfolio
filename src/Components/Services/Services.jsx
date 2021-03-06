import React from 'react'
import './Services.css'
import HeartEmoji from '../../img/heartemoji.png'
import Glasses from '../../img/glasses.png'
import Humble from '../../img/humble.png'
import Card from '../Card/Card'
import Resume from './Ashish_Deshmuk_Exp_git.pdf'

const Services = () => {
  return (
    <div className="services">
        {/* left side div  */}
        <div className="awesome">
            <span>About Me</span>
            <span> </span>
            {/* <span>My Awesome</span> */}
            <span>
                I am good in React js, Redux, 
                <br/>
                node js and javascript
            </span>
            <a href={Resume} download> 
            <button className=" button s-button">Download CV</button>
            </a>
            <div className="blur s-blur1" style={{background: '#ABF1FF94'}}></div>
        </div>
        {/* right side div  */}
        <div className="cards">

            {/* First Card */}
            <div style={{left: '14rem'}}>
                <Card 
                emoji = {HeartEmoji}
                heading = {'Design'}
                detail = {'React Design Web App'}
                />
            </div>

            {/* second card */}
            <div style={{top:'12rem', left: '-4rem'}}>
                <Card 
                emoji = {Glasses}
                heading = {'Developer'}
                detail = {'React, Redux, Node, JavaScript'}
                />
            </div>

            {/* Third Card  */}
            <div style={{top:'19rem', left: '12rem'}}>
                <Card 
                emoji = {Humble}
                heading = {'UI/UX'}
                detail = {'HTML,CSS, TypeScript'}
                />
            </div>
            <div className="blur s-blur2" style={{background: 'var(--purple)'}}></div>
        </div>
    </div>
  )
}

export default Services