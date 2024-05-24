"use client"

import React, { useEffect, useState } from 'react'
import { MediaUploader } from './mediauploader'
import Buttons from './buttons'

const TextField = ({ placeholder, label, type }: { placeholder: any, label: any, type: string }) => {

  const [text, setText] = useState("")
  const [isTransforming, setTransforming] = useState(false)

  useEffect(()=>{
    if(text.length > 0){
      setTransforming(true)
    } else{
      setTransforming(false)
    }
  
    console.log(text)
  }, [text])


  return (
    <>
      <div className="flex flex-col p-5 text-left">
        <label className='p-2'>{label}</label>
        <input onChange={(e) => setText(e.target.value)} className='w-[30vw] p-2 rounded-2xl border-black border-2' type="text" placeholder={placeholder} />
      </div>

      <div>
        <Buttons disabled={isTransforming} title="Apply transformations" />
        <br />  <br />
        <Buttons disabled={!isTransforming} title="Save Image" />
      </div>

    </>
  )
}

export default TextField