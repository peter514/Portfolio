import React from 'react'
import NavBar from '../components/NavBar'
import webVextor from '../assets/images/rafik.png'
import Skills from '../components/Skills'
import Services from '../components/Services'
import Projects from '../components/Projects'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import Typed from 'react-typed'
import Slide from 'react-reveal/Slide';
import { Link as LinkS } from 'react-scroll'
import bgimage from '../assets/graphics/herob.jpg'

function HomePage() {
  return (
    <div>
      <div className="">
        <NavBar />
      </div>

      {/* hero section  */}
      <div id='home' className="bg-heroBg h-[100vh] bg-cover bg-center bg-no-repeat bg-blend-overlay bg-opacity-70 bg-[#2c2f3062]  ">
        <div className="pt-[90px] flex justify-between mx-3 md:mx-[200px] items-center  text-white ">
           <Slide left cascade>

          <div className="">
            <div className="">
              <p className="text-[40px] mb-3 font-bold text-primary">Hello, I'm Peter Gachora,</p>
              <p className="text-[40px] mb-3 font-bold text-primary">Software <span className='text-white' >Developer</span></p>
              <h1 className=" ">
              Versatile fullstack developer skilled in React, React Native, and Node.js, crafting dynamic and seamless web and mobile solutions.
              </h1>
              <div className='mt-5 flex flex-col md:flex-row items-center'>
                <h1>Hire me and lets create:</h1>
                <Typed
                  className="font-bold text-[25px]"
                  strings={[
                    'Modern UI/UX designs',
                    'Digital solutions',
                    'Scalable applications'
                  ]}
                  typeSpeed={80}
                  backSpeed={50}
                  loop
                ></Typed>
              </div>
            </div>

            <div className="flex justify-start items-center gap-6 mt-16  ">
             

              <h1 className="bg-primary p-2 font-bold  rounded-md hover:bg-secondary hover:text-gray-900   cursor-pointer">
                <LinkS
                activeClass="active"
                to="contact"
                spy={true}
                smooth={true}
                offset={-65}
              >
                
                Contact me 
              </LinkS>
                
              </h1>
              <h1 className="p-2 font-semibold  rounded-sm border border-primary hover:bg-primary cursor-pointer ">
                 <LinkS
                activeClass="active"
                to="services"
                spy={true}
                smooth={true}
                offset={-65}
              >
                
                See services
              </LinkS>
              </h1>
            </div>
          </div>
           </Slide>
           <Slide right cascade>

          <div className="hidden lg:flex flex-col ">
            <img src={webVextor} alt="" className=" h-[400px] w-[500px]" />
          </div>
           </Slide>
        </div>
      </div>

      {/* skills */}
      <div id='skills'>
        <Skills />
      </div>

      <div id='services'>
        <Services />
      </div>

      <div id='projects'>
        <Projects />
      </div>

      <div id='contact'>
        <Contact />
      </div>

      <div>
        <Footer />
      </div>
    </div>
  )
}

export default HomePage
