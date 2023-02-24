import React, { useState, useEffect } from 'react'
import { MdMenu, MdClose } from 'react-icons/md'
import { Link as LinkS, NavLink } from 'react-scroll'
import Logo from '../assets/graphics/logo.png'

function NavBar() {
  const [mobileMenu, setMobileMenu] = useState(false)

  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 70 && !scrolled) {
        setScrolled(true)
      } else if (window.pageYOffset <= 70 && scrolled) {
        setScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [scrolled])

  const navItems = [
    {
      name: 'Home',
      path: 'home',
    },
    {
      name: 'Skills',
      path: 'skills',
    },
    {
      name: 'Services',
      path: 'services',
    },
    {
      name: 'Projects',
      path: 'projects',
    },
    {
      name: 'Contact',
      path: 'contact',
    },
  ]

  return (
    <div
      className={`fixed top-0 right-0 left-0  z-10 bg-opacity-70 ${
        scrolled ? 'bg-secondary bg-opacity-100' : 'bg-opacity-0'
      }`}
    >
      <div className="flex justify-between items-center px-6 py-4  ">
        <div className="font-bold text-xl text-primary">
          <img src={Logo} alt="logo" className="w-[] h-[40px] " />
        </div>
        <div className="mr-[90px] opac ">
          <ul className="hidden md:flex gap-5  text-primary font-semibold text-opacity-100 ">
            {navItems?.map((item, index) => {
              return (
                
                <LinkS
                activeClass="active"
                to={item.path}
                spy={true}
                smooth={true}
                offset={-65}
                key={index}
                >
                  <li className="cursor-pointer px-2 py-1 hover:border-b border-b-primary ">
                    {item.name}
                  </li>
                </LinkS>
              )
            })}
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
            ? 'absolute top-[62px] ease-in-out duration-500 flex flex-col bg-gray-50 w-[80%] py-6 md:hidden'
            : ' absolute left-[-100%] '
        }
      >
        <ul className="flex flex-col  gap-5  text-primary font-semibold text-opacity-100  ">
          {
            navItems.map((item, index)=>{
              return(
                <LinkS
            activeClass="active"
            to={item.path}
            spy={true}
            smooth={true}
            offset={-65}
            onClick={() => {
              setMobileMenu(!mobileMenu)
            }}
            key={index}
          >
            <li className=" px-4 py-1 cursor-pointer hover:border-b border-b-primary hover:cursor-pointer hover:bg-gray-100 ">
              {item.name}
            </li>
          </LinkS>
              )
            })
          }
          
        </ul>
      </div>
    </div>
  )
}

export default NavBar
