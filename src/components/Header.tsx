import React from 'react'
import Link from 'next/link'
import { Button } from '../components/ui/button'
import Image from 'next/image'

function Header() {
    return (
        <header className="sticky top-0 z-10 bg-white border-b shadow-sm flex-none">
            <div className="container flex items-center justify-between h-16 px-4 mx-auto">
                <Link href="/" className="flex items-center space-x-2">
                    <span className="text-xl font-bold text-blue-500">Carstairs Kids&apos; Contest</span>
                </Link>
                <nav className="flex items-center space-x-4">
                    <Link href="/rules" >
                        <Button
                            variant="outline"
                            className="font-medium border-2 border-blue-400 text-blue-600 hover:bg-blue-100"
                        >
                            <Image
                                src="/checklist.png"
                                alt="Checklist Icon"
                                width={24}
                                height={24}
                                className="inline-block pr-1 blue-filter"
                            />
                            Rules
                        </Button>
                    </Link>
                    <Link href="/venue">
                        <Button
                            variant="outline"
                            className="font-medium border-2 border-blue-400 text-blue-600 hover:bg-blue-100"
                        >
                            <Image
                                src="/maps-and-flags.png"
                                alt="Checklist Icon"
                                width={24}
                                height={24}
                                className="inline-block pr-1 blue-filter"
                            />
                            Venue Info
                        </Button>
                    </Link>
                    <Link href="/donate" >
                        <Button
                            variant="outline"
                            className="border-2 bg-green-500 text-white font-bold hover:bg-green-800"
                        >
                            Donate
                        </Button>
                    </Link>
                </nav>
            </div>
        </header>
    )
}

export default Header
