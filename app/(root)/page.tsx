import { UserButton } from '@clerk/nextjs'
import React from 'react'

const Page = () => {
  return (
    <div className='text-center'>
    <h2>home</h2>
    <UserButton afterSignOutUrl='/'/>
    </div>
  )
}

export default Page