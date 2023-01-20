import { useState } from 'react'
import HomePage from './pages/HomePage'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from "react-toastify";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";






function App() {
  // Create a client
const queryClient = new QueryClient();


  return (
    // routes 
    <div className=''>
      <ToastContainer
      position="top-right"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="colored"
      />
      <QueryClientProvider client={queryClient}>

      <HomePage/>
      </QueryClientProvider>
       
      
    </div>
  )
}

export default App
