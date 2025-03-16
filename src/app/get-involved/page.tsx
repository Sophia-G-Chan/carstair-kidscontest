import Link from "next/link"
import { ArrowLeft, Star, Heart, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function DonatePage() {
    return (
        <main className="container px-4 py-8 mx-auto flex-1">
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

                <div className="p-8 bg-white rounded-lg shadow-lg flex flex-col gap-3">
                    <h1 className="mb-2 text-3xl font-bold text-center text-blue-600">Support Carstairs Kids Connect</h1>
                    <h2>There are two ways to support the Carstairs Kids Contest</h2>
                    <ol className=" space-y-2 flex flex-col md:flex-row gap-4">
                        <li className="flex flex-col gap-2 items-center p-4 bg-cyan-50 rounded-lg">
                            <div className="space-y-6 text-blue-800">
                                <h3 className="mb-2 text-xl font-semibold text-blue-800 flex items-center">1. Donate</h3>
                                <p>
                                    Your generosity fuels our mission to create engaging experiences for Carstairs&apos; youth! Every donation supports contests, educational activities, and community events that inspire creativity, build confidence, and foster friendships.
                                </p>
                                <p>
                                    From craft supplies to learning materials, your contributions make it all possible. Interested in donating prizes? We welcome new items that inspire joy and creativity, like art supplies and educational games, to make our events even more special.
                                </p>

                                <div className="text-black flex flex-col gap-2 items-center p-4 bg-yellow-100 rounded-lg mt-6">
                                    <p>
                                        Ready to make a difference?
                                    </p>
                                    <Link href="https://checkout.square.site/merchant/MLB8TY1QMQG6C/checkout/2CDTARWNLSSNSKDCUZF3SAFV?src=webqr"  >
                                        <Button
                                            variant="outline"
                                            className="mb-6 bg-gradient-to-r from-orange-400 to-orange-600 hover:from-orange-500 hover:to-orange-700 rounded-xl shadow-lg transform transition-transform hover:scale-105 text-white font-bold "
                                            size='lg'
                                        >
                                            Donate Now
                                        </Button>
                                    </Link>
                                    <p className="text-black-700">Or make an <span className="font-bold text-blue-600">item</span> donation by contacting:</p>
                                    <a className=" font-bold text-blue-800 underline" href="mailto:carstairskidscontest@gmail.com">Rose Warden</a>
                                </div>
                            </div>
                        </li>
                        <li className="flex flex-col gap-2 items-center p-4 bg-green-50 rounded-lg">
                            <div className="space-y-6 text-gray-800">
                                <h3 className="mb-2 text-lg font-semibold text-green-600 flex items-center">2. Volunteer</h3>
                                <p>
                                    Volunteer for either Drop Off Day or Viewing day
                                </p>
                                <p>
                                    <span className="font-bold">Drop Off Day: </span>
                                    Volunteers will help with recieving entries and setting up the displays.
                                </p>
                                <p>
                                    <span className="font-bold">Viewing Day: </span>
                                    Volunteers can register to be part of the jduging commitee that day or help greet guests and answer questions.
                                </p>
                                <div className="text-black flex flex-col gap-2 items-center p-4 bg-green-100 rounded-lg mt-6">
                                    <p className="text-black-700">Apply to volunteer by emailing: </p>
                                    <a className=" font-bold text-blue-800 underline" href="mailto:carstairskidscontest@gmail.com">Rose Warden</a>
                                </div>
                            </div>
                        </li>
                    </ol>


                </div>
            </div>
        </main>
    );
}
