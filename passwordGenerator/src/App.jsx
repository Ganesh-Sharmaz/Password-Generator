import { useState } from 'react'

function App() {

  return (

    <>
    <div className='flex justify-center items-center w-full h-screen ' >
      <div className=' bg-gray-600 rounded-xl px-3 py-2 shadow-lg mt-2'>
        <h1 className='px-4 text-lg text-white text-center'>Password Generator</h1>
        <div className='flex items-center justify-center px-3 py-3'>
          <input 
          type='text'
          // value={Password}
          className='w-full px-3 py-1 rounded-md shadow-md '
          readOnly
          placeholder='Password'
          />
          <button className='outline-none  text-white  focus:bg-opacity-5 px-3 py-0.5 bg-blue-900 rounded-md'>copy</button>
        </div>
      </div>

    </div>


    </>
    
  )
}

export default App
