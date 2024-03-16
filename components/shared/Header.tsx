import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
import { Button } from '../ui/button'
import NavItems from './NavItems'
import MobileNav from './MobileNav'
const Header = () => {
    return (
        <header className='w-full border-b border'>
            <div className='wrapper flex items-center justify-between'>
                <Link href="/" className='w-36'>
                    <Image src={"/assets/images/logo.svg"} width={128} height={38} alt="logo"></Image>
                </Link>
                <SignedIn>
                   <NavItems></NavItems>
                </SignedIn>
                <div className='flex w-32 justify-end gap-3'>
                    <SignedIn>
                        <UserButton afterSignOutUrl='/'></UserButton>
                        <MobileNav></MobileNav>
                    </SignedIn>
                    <SignedOut>
                        <Button asChild className="rounded-full" size="lg">
                            <Link href="/sign-in">Login</Link>
                        </Button>
                    </SignedOut>
                </div>
            </div>
        </header>
    )
}

export default Header