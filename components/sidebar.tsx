"use client"

import { navLinks } from '@/constants'
import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const Sidebar = () => {

    const pathname = usePathname()

    return (
        <>
            <SignedIn>
            <div className="sidebar p-5 flex flex-col justify-between  bg-slate-100 w-[40vh] min-h-screen  border-r-2 ">
                <div className="sidebar-top">
                    <div className="sidebar-logo p-4">
                        <Link href="/" >logo</Link>
                    </div>
                    <div className="links flex flex-col">
                        {navLinks.slice(0, 6).map((link, index) => {

                            const isActive = link.route == pathname

                            return (
                                <div key={index} className={` rounded-full flex items-center py-4 px-4 ${isActive ? "bg-emerald-400" : ""}`}>
                                    <img src={link.icon} alt="image" width={24} height={24} />
                                    <Link className='' key={index} href={link.route} >{link.label}</Link>
                                </div>
                            )
                        })}
                    </div>
                </div>
                
                <div className="sidebar-bottom">
                    {navLinks.slice(6).map((link, index) => {

                        const isActive = link.route == pathname

                        return (
                            <div key={index} className={` rounded-full p-4 ${isActive ? "bg-emerald-400" : ""}`}>
                                <Link className='' key={index} href={link.route} >{link.label}</Link>
                            </div>
                        )
                    })}

                    <UserButton afterSignOutUrl='/' showName />
                </div>
            </div>
            </SignedIn>
            <SignedOut>
                <button className='p-4'>
                    <Link href='/'>Sign in</Link>
                </button>
            </SignedOut>
        </>
    )
}

export default Sidebar