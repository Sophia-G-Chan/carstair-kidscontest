import React from 'react'
import { ArrowLeft, MapPin, Clock, Calendar, Info, Star, Heart, Sparkles } from "lucide-react"
import Link from 'next/link'


function VenuePage() {
    return (
        <main className="container px-4 py-8 mx-auto">
            <div className="absolute top-40 right-10 animate-float hidden md:block">
                <Star size={30} className="text-yellow-400" />
            </div>
            <div className="absolute top-60 left-20 animate-bounce-slow hidden md:block">
                <Heart size={30} className="text-pink-400" />
            </div>
            <div className="absolute bottom-40 right-20 animate-spin-slow hidden md:block">
                <Sparkles size={30} className="text-purple-400" />
            </div>
            <div className="max-w-3xl mx-auto">
                <Link href="/" className="inline-flex items-center mb-6 text-blue-500 hover:text-blue-700">
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Back to Home
                </Link>

                <div className="p-8 bg-white rounded-lg shadow-lg">
                    <h1 className="mb-6 text-3xl font-bold text-center text-green-600">Venue Information</h1>

                    <div className="space-y-8">
                        <div className="flex items-start p-4 bg-green-100 rounded-lg">
                            <MapPin className="flex-shrink-0 w-6 h-6 mt-1 mr-3 text-green-700" />
                            <div>
                                <h2 className="mb-2 text-xl font-bold text-green-800">Location</h2>
                                <p className="text-lg font-medium">Carstairs Curling Rink</p>
                                <p>350 11 Ave,</p>
                                <p>Carstairs, Alberta T0M 0N0</p>
                                <p className="mt-2">
                                    <a
                                        href="https://maps.google.com/?q=Carstairs+Curling+Rink"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center text-green-700 hover:text-green-900 hover:underline"
                                    >
                                        View on Google Maps
                                    </a>
                                </p>
                            </div>
                        </div>

                        <div className="grid gap-6 md:grid-cols-2">
                            <div className="flex items-start p-4 bg-blue-100 rounded-lg">
                                <Calendar className="flex-shrink-0 w-6 h-6 mt-1 mr-3 text-blue-700" />
                                <div>
                                    <h2 className="mb-2 text-xl font-bold text-blue-800">Drop Off Day</h2>
                                    <p className="text-lg font-medium">Friday, August 15, 2025</p>
                                    <p>8:00 AM - 11:00 AM</p>
                                    <p className="mt-2 text-sm text-blue-700">
                                        Please arrive during this time window to register and submit your entries
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start p-4 bg-red-100 rounded-lg">
                                <Clock className="flex-shrink-0 w-6 h-6 mt-1 mr-3 text-red-700" />
                                <div>
                                    <h2 className="mb-2 text-xl font-bold text-red-800">Viewing Day</h2>
                                    <p className="text-lg font-medium">Saturday, August 16, 2025</p>
                                    <p>11:00 AM - 4:00 PM</p>
                                    <p className='my-2'>This is when family, friends and community gather to appreciate the talents and hard work of our participants!</p>
                                    <p className="mt-2 text-sm text-red-700">Awards ceremony will be held at 3:00 PM</p>
                                </div>
                            </div>
                        </div>

                        <div className="flex items-start p-4 bg-yellow-100 rounded-lg">
                            <Info className="flex-shrink-0 w-6 h-6 mt-1 mr-3 text-yellow-700" />
                            <div>
                                <h2 className="mb-2 text-xl font-bold text-yellow-800">Facility Information</h2>
                                <ul className="pl-5 space-y-2 list-disc">
                                    <li>Wheelchair accessible entrance and facilities</li>
                                    <li>Free parking available on-site</li>
                                    <li>Restrooms available</li>
                                    <li>Refreshments will be available for purchase on viewing day</li>
                                    <li>Photography is permitted and encouraged</li>
                                </ul>
                            </div>
                        </div>

                        <div className="p-4 text-center bg-purple-100 rounded-lg">
                            <h2 className="mb-2 text-xl font-bold text-purple-800">Questions?</h2>
                            <p className="text-purple-700">For more information about the venue or event, please contact:</p>
                            <a className="mt-2 font-bold text-purple-800" href="mailto:carstairskidscontest@gmail.com">Rose Warden</a>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default VenuePage
