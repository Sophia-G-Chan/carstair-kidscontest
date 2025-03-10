import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function DonatePage() {
    return (
        <main className="container px-4 py-8 mx-auto flex-1">
            <div className="max-w-3xl mx-auto">
                <Link href="/" className="inline-flex items-center mb-6 text-blue-500 hover:text-blue-700">
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Back to Home
                </Link>

                <div className="p-8 bg-white rounded-lg shadow-lg">
                    <h1 className="mb-6 text-3xl font-bold text-center text-blue-600">Support Carstairs Kids Connect</h1>

                    <div className="space-y-6">

                        <p>
                        Your generosity powers our mission to create engaging experiences for the young minds of Carstairs! Every donation helps us organize exciting contests, educational activities, and community events that bring our children together.
                        </p>

                        <p>Our events inspire creativity, build confidence, and foster lasting friendships within our wonderful community. Whether it&apos;s craft supplies, event paces, or learning materials - your contribution makes these moments possible.</p>

                        <p>
                        Want to donate prizes? We welcome new items that spark joy and creativity in our young participants! From art supplies to educational games, your prize donations help make our events extra special.
                        </p>
                        <p>
                        Ready to make a difference? Contact  <a className="mt-2 font-bold text-purple-800" href="mailto:rose.warden@hotmail.com">Rose </a>
                        to start your donation today! Every dollar helps create more magical moments for Carstairs kids!
                        </p>
                    </div>

                </div>
            </div>
        </main>
    );
}
