import React from 'react'
import {HiOutlineMail} from 'react-icons/hi'
import {AiOutlineTwitter, AiFillGithub} from 'react-icons/ai'
import {BiPhoneCall} from 'react-icons/bi'
import Slide from 'react-reveal/Slide';
function Contact() {
  return (
    <div className='bg-gray-100 py-4'>
        <h1 className='text-center font-bold m-2' >Contact </h1>

        <div  className='px-2 mx-3   md:mx-[140px] md:gap-6 flex flex-col  md:grid md:grid-cols-2 md:place-content-cnter '>
            <Slide left>

            <div className='flex flex-col gap-4 '>
                <h1>Contact Info </h1>
                <div className='flex gap-2 justify-start items-center '>
                    <span><HiOutlineMail size={23} color="brown" /></span>
                    <p>dev.petergachora@gmail.com</p>
                </div>
                <div className='flex gap-2 justify-start items-center '>
                    <span><BiPhoneCall size={23} /></span>
                    <p>+254 706181387 / +254 717063036</p>
                </div>
                <div className='flex gap-2 justify-start items-center '>
                    <span><AiOutlineTwitter size={23} color="blue" /></span>
                    <p>@PeterGachora1</p>
                </div>
                <div className='flex gap-2 justify-start items-center '>
                    <span><AiFillGithub size={23} color="black"/></span>
                    <p>Peter514</p>
                </div>


            </div>
            </Slide>

            <div className=''>
                <h1 className='text-center mb-4 font-semibold'>Send message</h1>
            <Slide  right>

                <div>
                    <form action="" className='min-h-[250px] bg-white shadow-lg'>
                                
                        <div className='flex flex-col gap-4 p-4 '>
                        
                        <div className='flex flex-col gap-3'>

                        <h1 htmlFor="">Name </h1>
                        <input type="text" placeholder='Enter name'  className='p-1 w-full border border-gray-200 outline-none'  />
                        </div>

                        <div className='flex flex-col gap-3'>

                        <h1 htmlFor="">Message </h1>
                        <textarea placeholder='Type message...' className='border border-gray-200 p-1 outline-none' ></textarea>
                        </div>

                        <div className='flex flex-col justify-center items-center w-full m-2'>
                            <button className='bg-primary text-gray-200 rounded-md hover:bg-white hover:text-gray-900 hover:border hover:border-primary w-[30%] p-2' >Send</button>
                        </div>
                        </div>
                    </form>
                </div>
             </Slide>


            </div>

        </div>

    </div>
  )
}

export default Contact