import React from 'react'
import Link from 'next/link'
import { Button } from '../components/ui/button'
import Image from 'next/image'
import { Heart, MapPin} from "lucide-react"

function Header() {
    return (
        <header className="sticky top-0 z-10 bg-white border-b shadow-sm flex-none">
            <div className="container flex items-center justify-between h-16 px-4 mx-auto">
                <Link href="/" className="flex items-center space-x-2">
                    <span className="text-xl font-bold text-blue-500">Carstairs Kids&apos; Contest</span>
                    <Heart className="text-pink-500 animate-pulse" />
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
                            <MapPin className="flex-shrink-0 w-6 h-6 mt-1 mr-3 text-blue-600" />
                            {/* <Image
                                src="/maps-and-flags.png"
                                alt="Checklist Icon"
                                width={24}
                                height={24}
                                className="inline-block pr-1 blue-filter"
                            /> */}
                            Venue Info
                        </Button>
                    </Link>
                    <Link href="/donate" >
                        <Button
                            variant="outline"
                            className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 rounded-xl shadow-lg transform transition-transform hover:scale-105 text-white font-bold "
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
