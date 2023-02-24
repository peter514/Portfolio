import React from 'react'
import lemka from '../assets/images/lemka.jpg'
import pchat from '../assets/images/pchat.jpg'
import baHardware from '../assets/images/baHardware.jpeg'
import Bafrica from '../assets/images/Bafrica.jpg'
import Slide from 'react-reveal/Slide';

function Projects() {
  return (
    <div className='mt-5 py-10'>
     <h1 className='text-center font-bold' >Projects</h1>
                         <h1 className='text-center text-primary mb-8'>______________</h1>


     {/* Projects container */}
     <div className='px-2 mx-3 my-6 md:mx-[140px]  md:gap-6 flex flex-col  md:grid md:grid-cols-2 md:place-content-cnter '>

                <Slide bottom>
                    
                {/*  card 1 */}
            <div className='bg-gray-50  mb-4 w-full h-[450px] shadow-md' >
                <div>
                    <img src={lemka} alt="" className='w-full h-[300px] ' />
                </div>

                <div className=' flex flex-col gap-2'>
                    <p className='text-center'>Lemka Estate Agents</p>
                    <p>
                        Property managemnet system.
                    </p>
                    <a href='https://realestate-ylrw.onrender.com/' target={"_blank"} className=" outline-none ">
                        lemka.info
                    </a>
                   
                </div>


            </div>
            
                {/*  card 2 */}
            <div className='bg-gray-50  mb-4 w-full h-[450px] shadow-md' >
                <div>
                    <img src={pchat} alt="" className='w-full h-[300px] ' />
                </div>

                <div className='m-3 flex flex-col gap-2'>
                    <p className='text-center'>Pchat</p>
                    <p >
                        Social and chat app.
                    </p>
                    <a href='https://pchat.onrender.com/' target={"_blank"} className=" outline-none ">
                       Link: https://pchat.onrender.com/
                    </a>
                   
                </div>


            </div>
              {/*  card 3 */}
            <div className='bg-gray-50  mb-4 w-full h-[450px] shadow-md flex' >
                <div>
                    <img src={baHardware} alt="" className='w-[240px] h-[400px] ' />
                </div>

                <div className='m-3 flex flex-col gap-2 justify-center items-start'>
                    <p className=''> 
                    Builders Africa App
                    </p>
                    <p >
                        Building and construction company
                    </p>
                    <a href='#' className=" outline-none ">
                       Link: Comming soon !
                    </a>
                   
                </div>


            </div>
             {/*  card 4 */}
            <div className='bg-gray-50  mb-4 w-full h-[450px] shadow-md' >
                <div>
                    <img src={Bafrica} alt="" className='w-full h-[300px] ' />
                </div>

                <div className='m-3 flex flex-col gap-2'>
                    <p className='text-center'> Builders Africa</p>
                    <p >
                        Building Company  (on build)
                        
                    </p>
                    <a href='https://buildersafrica.onrender.com/' target={"_blank"} className=" outline-none ">
                       Link: https://buildersafrica.onrender.com/
                    </a>
                   
                </div>


            </div>
                </Slide>


     </div>



    </div>
  )
}

export default Projects