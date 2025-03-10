import React from 'react'
import Link from 'next/link'
import { Button } from '../components/ui/button'

function Header() {
    return (
        <header className="sticky top-0 z-10 bg-white border-b shadow-sm flex-none">
            <div className="container flex items-center justify-between h-16 px-4 mx-auto">
                <Link href="/" className="flex items-center space-x-2">
                    <span className="text-xl font-bold text-blue-500">Carstairs Kids&apos; Contest</span>
                </Link>
                <nav className="flex items-center space-x-4">
                    <Link href="/rules">
                        <Button
                            variant="outline"
                            className="font-medium border-2 border-blue-400 text-blue-600 hover:bg-blue-100"
                        >
                            Rules
                        </Button>
                    </Link>
                    <Link href="/venue">
                        <Button
                            variant="outline"
                            className="font-medium border-2 border-green-400 text-green-600 hover:bg-green-100"
                        >
                            Venue Info
                        </Button>
                    </Link>
                </nav>
            </div>
        </header>
    )
}

export default Header
