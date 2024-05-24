"use client"

import React from 'react'
import toast from 'react-hot-toast'

const Buttons = ({title, disabled}:{title:any, disabled : boolean}) => {

    function handleClick() {
        toast.success('clicked')
    }

  return (
    <>
       <button disabled={!disabled} onClick={handleClick} className='p-3 bg-emerald-400 w-[30vw] rounded-full'>{title}</button>
    </>
  )
}

export default Buttons