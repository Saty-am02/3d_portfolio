import React from 'react'
import { Link } from 'react-router-dom'
import arrow from '../assets/icons/arrow.svg'
import hand from "../assets/icons/hand.png";

const renderContent ={
    1:(
        <h1 className="sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 i text-white mx-5">
        Hi, I am <span className="font-semibold" >Satyam </span> <span><img className='w-8 h-8 inline -mt-3' src={hand} /></span> <br/> A Web Devloper From India
        </h1>
    ),
    2:(
    
    <div className='info-box'>
    <p className='font-medium sm:text-xl text-center'>
        Eager to learn new things and <br/> picked up a many skills along the way
    </p>

    <Link to='/about' className='neo-brutalism-white neo-btn'>
      Learn more
      <img src={arrow} alt='arrow' className='w-4 h-4 object-contain' />
    </Link>
  </div>

    ),
    3:(
        <div className='info-box'>
        <p className='font-medium text-center sm:text-xl'>
          Led multiple projects to success over the years. <br /> Curious about the impact?
        </p>

        <Link to='/projects' className='neo-brutalism-white neo-btn'>
          Visit my portfolio
          <img src={arrow} alt='arrow' className='w-4 h-4 object-contain' />
        </Link>
      </div>
    ),
    4:(
        <div className='info-box'>
        <p className='font-medium sm:text-xl text-center'>
          Need a project done or looking for a dev? <br/> I'm just a few keystrokes away
        </p>
  
        <Link to='/contact' className='neo-brutalism-white neo-btn'>
          Let's talk
          <img src={arrow} alt='arrow' className='w-4 h-4 object-contain' />
        </Link>
      </div>
  
    )
}



const Homeinfo = ({currentStage}) => {
  return renderContent[currentStage] || null;
}

export default Homeinfo
