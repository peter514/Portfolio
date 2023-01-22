import React, { useState,useEffect } from 'react'
import { MdMenu, MdClose } from 'react-icons/md'
import { Link as LinkS } from 'react-scroll'
import Logo from '../assets/graphics/logo.png'

function NavBar() {
  const [mobileMenu, setMobileMenu] = useState(false)

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 70 && !scrolled) {
        setScrolled(true);
      } else if (window.pageYOffset <= 70 && scrolled) {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  return (
    <div className={`fixed top-0 right-0 left-0  z-10 bg-opacity-70 ${scrolled ? 'bg-secondary bg-opacity-100' : 'bg-opacity-0'}`}>
      <div className="flex justify-between items-center px-6 py-4  ">
        <div className="font-bold text-xl text-primary">
          <img src={Logo} alt="logo" className='w-[] h-[40px] ' />
        </div>
        <div className="mr-[90px] opac ">
          <ul className="hidden md:flex gap-5  text-primary font-semibold text-opacity-100 ">
            <li className=" px-2 py-1 hover:border-b border-b-primary ">
              <LinkS
                activeClass="active"
                to="home"
                spy={true}
                smooth={true}
                offset={-65}
              >
                Home
              </LinkS>
            </li>

            <li className=" px-2 py-1 hover:border-b border-b-primary ">
                 <LinkS
                activeClass="active"
                to="skills"
                spy={true}
                smooth={true}
                offset={-65}
              >
                Skills
              </LinkS>
            </li>

            <li className=" px-2 py-1 hover:border-b border-b-primary ">
                 <LinkS
                activeClass="active"
                to="services"
                spy={true}
                smooth={true}
                offset={-65}
              >
                Services
              </LinkS>
            </li>

            <li className=" px-2 py-1 hover:border-b border-b-primary ">
                 <LinkS
                activeClass="active"
                to="projects"
                spy={true}
                smooth={true}
                offset={-65}
              >
                Projects
              </LinkS>
            </li>

            <li className=" px-2 py-1 hover:border-b border-b-primary ">
                 <LinkS
                activeClass="active"
                to="contact"
                spy={true}
                smooth={true}
                offset={-65}
              >
                Contact
              </LinkS>
            </li>
          </ul>
        </div>
        <div className="md:hidden">
          {mobileMenu ? (
            <div
              onClick={(e) => {
                setMobileMenu(!mobileMenu)
              }}
            >
              <MdClose size={30} color="#ff1616" />
            </div>
          ) : (
            <div
              onClick={(e) => {
                setMobileMenu(!mobileMenu)
              }}
            >
              <MdMenu size={30} color="#ff1616" />
            </div>
          )}
        </div>
      </div>
      {/* mobile menu */}
      <div
        className={
          mobileMenu
            ? 'absolute top-[62px] ease-in-out duration-500 flex flex-col bg-gray-50 w-[60%] py-6 md:hidden'
            : ' absolute left-[-100%] '
        }
      >
         <ul className="flex flex-col  gap-5  text-primary font-semibold text-opacity-100  ">
            <LinkS
                activeClass="active"
                to="home"
                spy={true}
                smooth={true}
                offset={-65}
                onClick= {()=>{setMobileMenu(!mobileMenu)}}
              >
            <li className=" px-4 py-1 hover:border-b border-b-primary hover:cursor-pointer hover:bg-gray-100 ">
              
                Home
             
            </li>
             </LinkS>
            <LinkS
                activeClass="active"
                to="skills"
                spy={true}
                smooth={true}
                offset={-65}
                onClick= {()=>{setMobileMenu(!mobileMenu)}}
              >
            <li className=" px-4 py-1 hover:border-b border-b-primary hover:cursor-pointer hover:bg-gray-100 ">
              
                Skills
             
            </li>
             </LinkS>
            <LinkS
                activeClass="active"
                to="services"
                spy={true}
                smooth={true}
                offset={-65}
                onClick= {()=>{setMobileMenu(!mobileMenu)}}
              >
            <li className=" px-4 py-1 hover:border-b border-b-primary hover:cursor-pointer hover:bg-gray-100 ">
              
                Services
             
            </li>
             </LinkS>
            <LinkS
                activeClass="active"
                to="projects"
                spy={true}
                smooth={true}
                offset={-65}
                onClick= {()=>{setMobileMenu(!mobileMenu)}}
              >
            <li className=" px-4 py-1 hover:border-b border-b-primary hover:cursor-pointer hover:bg-gray-100 ">
              
                Projects
             
            </li>
             </LinkS>
            <LinkS
                activeClass="active"
                to="contact"
                spy={true}
                smooth={true}
                offset={-65}
                onClick= {()=>{setMobileMenu(!mobileMenu)}}
              >
            <li className=" px-4 py-1 hover:border-b border-b-primary hover:cursor-pointer hover:bg-gray-100 ">
              
                Contact
             
            </li>
             </LinkS>

         
          </ul>
        
      </div>
    </div>
  )
}

export default NavBar
