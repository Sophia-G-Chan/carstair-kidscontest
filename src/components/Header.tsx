'use client'
import React from 'react'
import { useState } from 'react';
import Link from 'next/link'
import { Button } from '../components/ui/button'
import Image from 'next/image'
import { Heart, MapPin, Menu, X } from "lucide-react"

function Header() {
    const [isOpen, setIsOpen] = useState(false);

    const handleNav = () => {
        setIsOpen(false);
    }

    return (
        <header className="sticky top-0 z-10 bg-white border-b shadow-sm flex-none">
            <div className="container flex items-center justify-between h-16 px-4 mx-auto">
                <Link href="/" className="flex items-center space-x-2">
                    <span className="text-xl font-bold text-blue-500 whitespace-nowrap">Carstairs Kids&apos; Contest</span>
                    <Heart className="text-pink-500 animate-pulse" />
                </Link>


                <nav className="flex md:items-center md:space-x-4">
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className='md:hidden'
                    >
                        <Menu className="w-6 h-6 text-blue-500" />
                    </button>
                    {isOpen && (
                        <div className="m-0 h-full fixed inset-0 md:hidden">
                            <div className="h-full bg-white p-4 w-full flex">
                                <button className='absolute top-0 right-0 p-4' onClick={() => setIsOpen(false)}>
                                    <X className="w-6 h-6 text-blue-500" />
                                </button>
                                <div className='grow flex flex-col items-center justify-center gap-10'>
                                        <Link href="/rules" onClick={handleNav}>
                                            <Button
                                                variant='default'
                                                className=" text-blue-600 hover:bg-blue-100"
                                                size='lg'
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
                                        <Link href="/venue" onClick={handleNav}>
                                            <Button
                                                variant="default"
                                                className="font-medium text-blue-600 hover:bg-blue-100"
                                                size='lg'
                                            >
                                                <MapPin className="flex-shrink-0 w-6 h-6 pr-1 text-blue-600" />
                                                Venue Info
                                            </Button>
                                        </Link>
                                        <Link href="/donate"  onClick={handleNav}>
                                            <Button
                                                variant="outline"
                                                className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 rounded-xl shadow-lg transform transition-transform hover:scale-105 text-white font-bold "
                                                size='lg'
                                            >
                                                Donate
                                            </Button>
                                        </Link>

                                </div>
                            </div>
                        </div>
                    )}

                    <div className='hidden md:flex gap-2'>
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
                    </div>

                </nav>
            </div>
        </header>
    )
}

export default Header
