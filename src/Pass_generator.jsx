import React, { useCallback, useState, useEffect, useRef } from 'react'

function Pass_generator() {
    const [length, setLength]=useState(8);
    const [number, setNumber]=useState(false);
    const [character, setCharacter]=useState(false);
    const [password, setPassword]=useState("");

    const passref= useRef('null');

    const passwordGenerator=useCallback(()=>{
    let pass=""
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(number) str+="0123456789"
    if(character) str+="@!#$%^&*?"
    for (let i = 0; i < length; i++) {
        let variable=Math.floor(Math.random()*str.length+1)
        pass+=str.charAt(variable)
        
    }
    setPassword(pass)
    },[length,number,character,setPassword])

    const copyPassword = useCallback(()=>{
      passref.current?.select();
      passref.current?.setSelectionRange(0, 999);
      window.navigator.clipboard.writeText(password)
    },[password])

    useEffect(() => {
        passwordGenerator()
      }, [length, number, character, passwordGenerator])

  return (
    <>
      <div className='  text-white'>
        <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500 '>
            <h1 className='text-white text-center text-3xl font-semibold my-3'>Password Generator</h1>
            <div className=' flex flex-col align-middle h-full'>

            <div className='flex shadow rounded-lg overflow-hidden mb-4'>
            <input
            type="text"
            placeholder='password'
            value={password}
            readOnly
            className='outline-none w-full py-1 px-3 text-black '
            />
            <button
            onClick={copyPassword}
            className=' outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0 hover:bg-green-500'>Copy</button>
            </div>
           <div className=' flex gap-3 justify-center '>
            <input
            type="range"
            value={length}
            min={6}
            max={100}
            className=''
            onChange={(e)=>{setLength(e.target.value)}}
            />
            <label>Length:{length}</label>
            <div>
            <input
            type='checkbox'
            onChange={() => {
                setNumber((prev) => !prev);
            }}
            
            />
            <label>Number</label>
            </div>
            <div>
            <input
            type='checkbox'
            onChange={() => {
              setCharacter((prev) => !prev);
          }}
            
            />
            <label>Character</label>
            </div>
            </div>
            </div>
            
        </div>
      </div>
    </>
  )
}

export default Pass_generator
