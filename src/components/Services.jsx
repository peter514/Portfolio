import React from 'react'
import webd from '../assets/graphics/webd.webp'
import payment from '../assets/graphics/payment.webp'
import sms from '../assets/graphics/sms.webp'
import mobile from '../assets/graphics/mobile.webp'

function Services() {
  return (
    <div className='bg-secondary pb-5'>
            <h1 className='text-center font-bold mb-4 py-4' >Services</h1>

            {/* services container */}
            <div className='px-2 mx-3  md:mx-[140px] md:gap-6 flex flex-col  md:grid md:grid-cols-4 md:place-content-cnter '>
                 {/*  card 1 */}
            <div className='bg-gray-50  mb-4 w-full h-[200px] shadow-md' >
                <div className='flex justify-center items-center mt-2'>
                    <img src={webd} alt="" className='w-[100px] h-[100px] ' />
                </div>

                <div className='m-3 flex flex-col'>
                    <p className='text-center'>Web and software development</p>
                   
                </div>


            </div>
                 {/*  card 2 */}
            <div className='bg-gray-50  mb-4 w-full h-[200px] shadow-md' >
                <div className='flex justify-center items-center mt-2'>
                    <img src={payment} alt="" className='w-[100px] h-[100px] ' />
                </div>

                <div className=' flex flex-col'>
                    <p className='text-center'>Payment Gateway Integration</p>
                    <p className='text-center'>Mpesa, stripe</p>
                   
                </div>


            </div>
                 {/*  card 3 */}
            <div className='bg-gray-50 mb-4 w-full h-[200px] shadow-md' >
                <div className='flex justify-center items-center mt-2'>
                    <img src={sms} alt="" className='w-[100px] h-[100px] ' />
                </div>

                <div className='m-3 flex flex-col'>
                    <p className='text-center'>Bulk SMS Integration</p>
                   
                </div>


            </div>

              {/*  card 4*/}
            <div className='bg-gray-50  mb-4 w-full h-[200px] shadow-md' >
                <div className='flex justify-center items-center mt-2'>
                    <img src={mobile} alt="" className='w-[100px] h-[100px] ' />
                </div>

                <div className='m-3 flex flex-col'>
                    <p className='text-center'>Mobile App Development</p>
                   
                </div>


            </div>





            </div>


    </div>
  )
}

export default Services