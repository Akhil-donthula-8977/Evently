import React from 'react'
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import Image from 'next/image'

const MobileNav = () => {
    return (
        <div className='ml-2 md:hidden'>
            <Sheet >
                <SheetTrigger><Image 
                src="/assets/icons/menu.svg"
                height={24}
                width={34}
                alt="menu"></Image></SheetTrigger>
                <SheetContent side="left" className=''>
                    <SheetHeader>
                        <SheetTitle>Are you absolutely sure?</SheetTitle>
                        <SheetDescription>
                            This action cannot be undone. This will permanently delete your account
                            and remove your data from our servers.
                        </SheetDescription>
                    </SheetHeader>
                </SheetContent>
            </Sheet>
        </div>
    )
}

export default MobileNav