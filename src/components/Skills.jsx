import React from 'react'
import frontend from '../assets/graphics/frontend.jpg'
import backend from '../assets/graphics/backend.webp'
import database from '../assets/graphics/database.webp'
import tools from '../assets/graphics/tools.webp'
import apps from '../assets/graphics/apps.webp'
import {FaReact} from 'react-icons/fa'
import {SiTailwindcss, SiCanva, SiMysql, SiCoronarenderer, SiCapacitor} from 'react-icons/si'
import {DiNodejsSmall} from 'react-icons/di'
import {FaPython, FaGithubSquare} from 'react-icons/fa'
import {AiFillApi} from 'react-icons/ai'
import {DiMongodb} from 'react-icons/di'
import {RiTeamFill} from 'react-icons/ri'
import {TbBrandReactNative} from 'react-icons/tb'
import Slide from 'react-reveal/Slide';


function Skills() {
  return (
    <div className='py-10' >
        <h1 className='text-center font-bold m-2' >My skills and Tech stack</h1>
        <div className='px-2 mx-3 my-6 md:mx-[140px] md:gap-6 flex flex-col  md:grid md:grid-cols-3 md:place-content-cnter '>

            <Slide bottom >

            {/*  card 1 */}
            <div className='bg-gray-50  mb-4 w-full h-[340px] shadow-xl' >
                <div>
                    <img src={frontend} alt="" className='w-full h-[150px] ' />
                </div>

                <div className='m-3 flex flex-col gap-4'>
                    <div className='flex  items-center gap-3 ' >
                       <span><FaReact size={23} color="blue" /></span>
                       <h1>React JS</h1> 
                    </div>
                    <div  className='flex  items-center gap-3'>
                       <span><SiTailwindcss size={23} color="blue"  /></span>
                       <h1>Tailwind CSS</h1> 
                    </div>
                    <div  className='flex  items-center gap-3'>
                       <span><SiCanva size={20} color="blue"  /></span>
                       <h1>Canva</h1> 
                    </div>
                    
                </div>


            </div>

              {/*  card 2 */}
            <div className='bg-gray-50 mb-4 w-full h-[340px] shadow-xl' >
                <div>
                    <img src={backend} alt="" className='w-full h-[150px] ' />
                </div>

                <div className='m-3 flex flex-col gap-4'>
                    <div className='flex  items-center gap-3 ' >
                       <span><DiNodejsSmall size={23} color="green" /></span>
                       <h1>Node JS (Express framework)</h1> 
                    </div>
                    <div  className='flex  items-center gap-3'>
                       <span><FaPython size={21} color=""/></span>
                       <h1>Python (Django)</h1> 
                    </div>
                    <div  className='flex  items-center gap-3'>
                       <span><AiFillApi size={23} color="blue" /></span>
                       <h1>Architecture - Restfull API </h1> 
                    </div>
                    
                </div>


            </div>

             {/*  card 3 */}
            <div className='bg-gray-50  mb-4 w-full h-[340px] shadow-xl' >
                <div>
                    <img src={database} alt="" className='w-full h-[150px] ' />
                </div>

                <div className='m-3 flex flex-col gap-4'>
                    <div className='flex  items-center gap-3 ' >
                       <span><DiMongodb size={23} color="green" /></span>
                       <h1>MongoDB</h1> 
                    </div>
                    <div  className='flex  items-center gap-3'>
                       <span><SiMysql size={21} color="blue"/></span>
                       <h1>Mysql</h1> 
                    </div>
                    <div  className='flex  items-center gap-3'>
                       <span><SiCoronarenderer size={20} color="blue" /></span>
                       <h1>Render.com</h1> 
                    </div>
                    
                </div>


            </div>

             {/*  card 4*/}
            <div className='bg-gray-50  mb-4 w-full h-[340px] shadow-xl' >
                <div>
                    <img src={tools} alt="" className='w-full h-[150px] ' />
                </div>

                <div className='m-3 flex flex-col gap-4'>
                    <div className='flex  items-center gap-3 ' >
                       <span><FaGithubSquare size={20} color="" /></span>
                       <h1>Git and Github (Peter514) </h1> 
                    </div>
                    <div  className='flex  items-center gap-3'>
                       <span><RiTeamFill size={21} color=""/></span>
                       <h1>Render Teams</h1> 
                    </div>
                  
                    
                </div>


            </div>

             {/*  card 5*/}
            <div className='bg-gray-50  mb-4 w-full h-[340px] shadow-xl' >
                <div>
                    <img src={apps} alt="" className='w-full h-[150px] ' />
                </div>

                <div className='m-3 flex flex-col gap-4'>
                    <div className='flex  items-center gap-3 ' >
                       <span><TbBrandReactNative size={20} color="blue" /></span>
                       <h1>React native </h1> 
                    </div>
                    <div  className='flex  items-center gap-3'>
                       <span><SiCapacitor size={21} color="blue"/></span>
                       <h1>Capacitor </h1> 
                    </div>
                  
                    
                </div>


            </div>
            </Slide>


        </div>

    </div>
  )
}

export default Skills