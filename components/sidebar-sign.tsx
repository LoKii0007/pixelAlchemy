"use client"

import { links } from '@/constants'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const Sidebar = () => {

    const pathname = usePathname()

    return (
        <>
            <div className="sidebar p-5 flex flex-col justify-between  bg-slate-100 w-[40vh] min-h-screen  border-r-2 ">
                <div className="sidebar-top">
                    <div className="logo p-4">
                        <Link href="/" >logo</Link>
                    </div>
                    <div className="links flex flex-col">
                        {links.slice(0, 6).map((link, index) => {

                            const isActive = link.route == pathname

                            return (
                                <div className={` rounded-full py-4 px-4 ${isActive ? "bg-emerald-400" : ""}`}>
                                    <Link className='' key={index} href={link.route} >{link.label}</Link>
                                </div>
                            )
                        })}
                    </div>
                </div>
                
                <div className="sidebar-bottom">
                    {links.slice(6).map((link, index) => {

                        const isActive = link.route == pathname

                        return (
                            <div className={` rounded-full p-4 ${isActive ? "bg-emerald-400" : ""}`}>
                                <Link className='' key={index} href={link.route} >{link.label}</Link>
                            </div>
                        )
                    })}

                    <button className='p-4'>sign out</button>
                </div>
            </div>
        </>
    )
}

export default Sidebar