"use client"
import React from 'react'
import { headerLinks } from '@/constants'
import { Link } from 'lucide-react'
import { usePathname } from 'next/navigation'
const NavItems = () => {
    const pathname = usePathname()
    console.log(pathname)
    return (
        <div className='md:flex gap-10 justify-between max-w-xl hidden '>
            {headerLinks.map((l) => {
                return (
                    <li>
                        <Link href={l.route} className={`${(pathname === l.label) ? "text-red-500" : "text-blue-500"}`}>
                            {l.label}
                        </Link>
                    </li>
                )
            })
            }
        </div>
    )
}

export default NavItems