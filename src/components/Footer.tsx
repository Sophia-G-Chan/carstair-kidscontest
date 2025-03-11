import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {  Flower,  Cake, } from "lucide-react";

function Footer() {
    return (
        <footer className="py-6 mt-12 text-center text-gray-600 bg-gradient-to-r from-blue-100 to-purple-100 flex-none relative">
            <div className="container px-4 mx-auto">
                <p>Sponsored by: the Carstairs &amp; District Agricultural Society</p>
                <Link href="https://CarstairsAgSociety.ca">
                    <Image
                        src="/CDAS_logo_FINAL_web.png"
                        alt="Carstairs Ag Society Logo"
                        width={100}
                        height={100}
                        className="mx-auto mt-4"
                    />
                </Link>

                <p className="mt-2">
                    <a href="https://CarstairsAgSociety.ca" className="text-blue-500 hover:underline">
                        CarstairsAgSociety.ca
                    </a>
                </p>
                <p className="mt-4 text-sm">Ages 17 &amp; under</p>
            </div>
            <div className="absolute bottom-2 left-4 animate-bounce-slow hidden md:block">
                <Cake size={24} className="text-pink-400" />
            </div>
            <div className="absolute bottom-2 right-4 animate-float hidden md:block">
                <Flower size={24} className="text-green-400" />
            </div>
        </footer>
    )
}

export default Footer
