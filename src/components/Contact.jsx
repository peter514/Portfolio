import React from 'react'
import { HiOutlineMail } from 'react-icons/hi'
import { AiOutlineTwitter, AiFillGithub } from 'react-icons/ai'
import { BiPhoneCall } from 'react-icons/bi'
import Slide from 'react-reveal/Slide'
import { useForm, Controller } from 'react-hook-form'
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import PulseLoader from 'react-spinners/PulseLoader'
import { toast } from 'react-toastify'
import axiosPrivate from '../api/axios.jsx'


function Contact() {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
  } = useForm()
  //  send message  function
  const sendMessage = (message) => {
    return axiosPrivate.post('/messages/contact', message)
  }

  //  send message  mutation function-----------------------
  const {
    mutate: messageMutation,
    isError: errorSendingMessage,
    isLoading: loadingSendMessage,
  } = useMutation(sendMessage, {
    onSuccess: (response) => {
      const text = response?.data?.message
      toast.success(text)
      reset()
    },
    onError: (err) => {
      const text = err?.response?.data?.message
      toast.error(text)
      if (!err.response.data.message) {
        toast.error('something went wrong')
      }
    },
  })

  const submit = (data) => {
    if (!data.message) {
      toast.warn('Please type a message!')
    } else {
         messageMutation(data)
      console.log(data)
    }
  }

  return (
    <div className="bg-gray-100 py-4">
      <h1 className="text-center font-bold m-2">Contact </h1>

      <div className="px-2 mx-3   md:mx-[140px] md:gap-6 flex flex-col  md:grid md:grid-cols-2 md:place-content-cnter ">
        <Slide left>
          <div className="flex flex-col gap-4 ">
            <h1>Contact Info </h1>
            <div className="flex gap-2 justify-start items-center ">
              <span>
                <HiOutlineMail size={23} color="brown" />
              </span>
              <p>dev.petergachora@gmail.com</p>
            </div>
            <div className="flex gap-2 justify-start items-center ">
              <span>
                <BiPhoneCall size={23} />
              </span>
              <p>+254 706181387 / +254 717063036</p>
            </div>
            <div className="flex gap-2 justify-start items-center ">
              <span>
                <AiOutlineTwitter size={23} color="blue" />
              </span>
              <p>@PeterGachora1</p>
            </div>
            <div className="flex gap-2 justify-start items-center ">
              <span>
                <AiFillGithub size={23} color="black" />
              </span>
              <p>Peter514</p>
            </div>
          </div>
        </Slide>

        <div className="">
          <h1 className="text-center mb-4 font-semibold">Send message</h1>
          <Slide right>
            <div>
              <form
                action=""
                onSubmit={handleSubmit(submit)}
                className="min-h-[250px] bg-white shadow-lg"
              >
                <div className="flex flex-col gap-4 p-4 ">
                  <div className="flex flex-col gap-3">
                    <h1 htmlFor="">Name </h1>
                    <input
                      type="text"
                      placeholder="Enter name"
                      className="p-1 w-full border border-gray-200 outline-none"
                      {...register('fullName')}
                    />
                  </div>
                  <div className="flex flex-col gap-3">
                    <h1 htmlFor="">Phone </h1>
                    <input
                    required
                      type="number"
                      placeholder="Enter number"
                      className="p-1 w-full border border-gray-200 outline-none"
                      {...register('phone', { required: true })}
                    />
                    <p>
                      {/* {errors.phone?.type === 'required' &&
                        "Enter phone number"} */}
                    </p>
                  </div>

                  <div className="flex flex-col gap-3">
                    <h1 htmlFor="">Message </h1>
                    <textarea
                      placeholder="Type message..."
                      className="border border-gray-200 p-1 outline-none"
                      {...register('message', { required: false })}
                    ></textarea>
                  </div>

                  <div className="flex flex-col justify-center items-center w-full m-2">
                    <input
                      type="submit"
                      className="bg-primary text-gray-200 rounded-md hover:bg-white hover:text-gray-900 hover:border hover:border-primary w-[30%] p-2 outline-none"
                    />
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
