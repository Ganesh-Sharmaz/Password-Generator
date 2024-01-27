import { useState, useCallback } from 'react'

function App() {
  
  const [Password, setPassword] = useState("");
  const [Length, setLength] = useState(8);
  const [NumbersAllowed, setNumbersAllowed] = useState(false);
  const [CharactersAllowed, setCharactersAllowed] = useState(false);

  const passwordGenerator = useCallback(
    () => {
      let pass = ''
      let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'

      if (NumbersAllowed) str += "0123456789";
      if (CharactersAllowed) str += "~!@#$%^&*()_+"

      for(i=1; i<=Length; i++){
        let char = Math.floor(Math.random() * str.length+1 );
        pass += str.charAt(char)
      }

      setPassword(pass)

    },[Length, CharactersAllowed,NumbersAllowed, setPassword]
  )




  return (

    <>
      <div className=' overflow-hidden flex justify-center items-center w-full h-screen ' >
        <div className=' bg-gray-500 rounded-xl px-3 py-2 shadow-lg mt-2 mb-4 w-{600} '>

          {/* Password Input and Copy starts here */}

          <h1 className='px-4 text-lg text-white text-center mb-2'>Password Generator</h1>
          <div className='flex shadow-lg rounded-xl overflow-hidden mb-4'>
            <input 
            type='text'
            value={Password}  
            className='w-full px-3 py-1'
            readOnly
            placeholder='Password'
            />
            <button className='outline-none bg-blue-600 text-white px-3 py-0.5 shrink-0'>copy</button>
          </div>

          {/* Range, NumCheckBox and CharCheckBox starts here */}

          <div className='flex text-sm gap-x-2'>
            <div className='flex items-center text-center gap-x-1'>
              <input
              type='range'
              min={8}
              max={100}
              className='rounded-full shadow-sm cursor-pointer'
              value={Length}
              onChange={(e) => {setLength(e.target.value)}}
              />
              <label className="text-white ">Length: {Length}</label>
            </div>

            <div className='flex items-center text-center gap-x-1'>
              <input
              type='checkbox'
              className=''
              />
              <label htmlFor="numberInput" className="text-white ">Numbers</label>
            </div>

            <div className='flex items-center text-center gap-x-1'>
              <input
              type='checkbox'
              />
              <label htmlFor="numberInput" className="text-white ">Charaters</label>
            </div>

          </div>


        </div>

      </div>


    </>
    
  )
}

export default App
