import { useEffect } from 'react'

import { useAuthContext } from "../hooks/useAuthContext"
import { Link } from 'react-router-dom'
import AOS from "aos"
import "aos/dist/aos.css"

// components
//https://img.freepik.com/free-photo/abstract-textured-backgound_1258-30510.jpg?size=626&ext=jpg&ga=GA1.1.1336803255.1681741228&semt=ais

const Home = () => {

  const { user } = useAuthContext()
  useEffect(() => {
    AOS.init({ duration: 1000 })
  }, []

  )

  return (
    <div className="home">
      <div className='home-main'>
        <div className='home-title'>
          <h1>Find Your Path to a Perfect Career</h1>
          <h3> CareerPilot is the AI-powered platform
            transforming secondary education by providing
            personalized career guidance to students. We offer
            assessment tests that delve deep into students' interests
            and abilities, offering a curated list of career choices.</h3>

          <button>Get Started</button>
        </div>
        <img className='image' src='https://cdn.dribbble.com/users/1961677/screenshots/16561089/media/ed1cfb03c022b2bed3173ac3f0fb6383.png' />
      </div>

      <div className='for-div'>
        <div className='for-sub-div' data-aos="zoom-in">

          <h1>Secondary-Level Students </h1>
          <h1>(Ages 14-21)</h1>
          <p>Our core audience seeking career guidance and
            personalized recommendations as they navigate through secondary education</p>
          <button>Know More</button>
        </div>
        <div className='for-sub-div' data-aos="zoom-in">
          <h1>Parents and Guardians</h1>
          <p>Empowering parents and guardians with insights and
            resources to actively support their children's career
            decisions.</p>
          <button>Know More</button>
        </div>
        <div className='for-sub-div' data-aos="zoom-in">
          <h1>Institutions and Colleges
          </h1>
          <p>Offering tailored partnerships to schools and colleges to
            provide students with access to our career guidance
            platform.
          </p>
          <button>Know More</button>
        </div>

      </div>

      <div className='path-div'>

        <h1>CareerPilot's path to the perfect career</h1>
        <div className='path-sub-div' data-aos="fade-right">
          <div>
            <h2>1. Psycometric Tests</h2>
            <ul>
              <li>Assesses interests and traits.</li>
              <li>Tailors career suggestions.</li>
              <li>Informed decision-making.</li>
            </ul>
            <button>Explore Now</button>

          </div>
          <img src='https://img.freepik.com/premium-vector/job-exam-test-vector-illustration_138676-243.jpg' className='path-image' />
        </div>
        <div className='path-sub-div2' data-aos="fade-left">
          <img src='https://itl-website-aws.s3.ap-south-1.amazonaws.com/manage/assets/images/features-pincode-ai-driven.png' className='path-image' />
          <div>
            <h2>2. AI driven career recommendations</h2>
            <ul>
              <li>Profiles analyzed for career matches.</li>
              <li>Evolves with usage.</li>
              <li>Personalized career guidance</li>

            </ul>
            <button>Explore Now</button>
          </div>

        </div>
        <div className='path-sub-div' data-aos="fade-right">
          <div>
            <h2>3. Career Overviews</h2>
            <ul>
              <li>Concise career insights</li>
              <li>Scope, growth, salaries</li>
              <li>Resourceful data.</li>
            </ul>
            <button>Explore Now</button>

          </div>
          <img src='https://blog.careerlauncher.com/wp-content/uploads/2016/03/AFTER_12_770X494.gif' className='path-image' />

        </div>
        <div>


        </div>
      </div>
      <div className='wcu-section' data-aos="zoom-in">
        <h1>Why Choose Us ?</h1>
        <p> CareerPilot is AI-powered platform that provides personalized career guidance to students. We offer assessment tests that delve deep into students' 
          interests and abilities, offering a curated list of career choices. Our interactive website presents comprehensive insights into each career's growth, potential, and current landscape. With a robust AI recommendation system, CareerPilot ensures that every student finds the perfect career match.
          Our mission is to make career choices and AI-based counseling accessible to every child at the secondary level. By doing so, we are not only helping students find their passion and potential but also empowering them to make informed decisions about their future.</p>
      </div>
    </div>
  )
}

export default Home